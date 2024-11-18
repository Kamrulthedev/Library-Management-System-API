import { prisma } from "../../../shared/sharedPrisma";

const CreateBorrow = async (data: { bookId: string; memberId: string }) => {
  try {
    const book = await prisma.book.findUnique({
      where: { bookId: data.bookId },
    });

    const member = await prisma.member.findUnique({
      where: { memberId: data.memberId },
    });

    if (!book) {
      throw new Error(`Book with ID ${data.bookId} not found.`);
    }

    if (!member) {
      throw new Error(`Member with ID ${data.memberId} not found.`);
    }

    // Check if there are available copies of the book
    if (book.availableCopies <= 0) {
      throw new Error(
        `No available copies of the book with ID ${data.bookId}.`
      );
    }

    // Create a borrow record
    const borrowRecord = await prisma.borrowRecord.create({
      data: {
        bookId: data.bookId,
        memberId: data.memberId,
        borrowDate: new Date(),
      },
    });

    // Decrease the available copies of the book
    await prisma.book.update({
      where: { bookId: data.bookId },
      data: {
        availableCopies: book.availableCopies - 1,
      },
    });

    return {
      borrowId: borrowRecord.borrowId,
      bookId: borrowRecord.bookId,
      memberId: borrowRecord.memberId,
      borrowDate: borrowRecord.borrowDate,
    };
  } catch (error) {
    console.error("Error creating borrow record:", error);
    throw error;
  }
};



const OverdueBorrow = async () => {
  try {
    // Get the current date
    const currentDate = new Date();

    // Find all borrow records where the book has not been returned and the borrow date is more than 14 days ago
    const overdueBooks = await prisma.borrowRecord.findMany({
      where: {
        returnDate: null, // Not yet returned
        borrowDate: {
          lt: new Date(currentDate.setDate(currentDate.getDate() - 14)), // Borrow date older than 14 days
        },
      },
      include: {
        book: true, // To get book details
        member: true, // To get member (borrower) details
      },
    });

    if (overdueBooks.length > 0) {
      const overdueList = overdueBooks.map((borrow) => {
        const overdueDays = Math.floor(
          (currentDate.getTime() - new Date(borrow.borrowDate).getTime()) / (1000 * 3600 * 24)
        );
        
        return {
          borrowId: borrow.borrowId,
          bookTitle: borrow.book.title,
          borrowerName: borrow.member.name,
          overdueDays: overdueDays,
        };
      });

      return {
        success: true,
        status: 200,
        message: "Overdue borrow list fetched",
        data: overdueList,
      };
    } else {
      return {
        success: true,
        status: 200,
        message: "No overdue books",
        data: [],
      };
    }
  } catch (error) {
    console.error("Error fetching overdue borrow records:", error);
    return {
      success: false,
      status: 500,
      message: "Internal Server Error",
      error: error?.message,
    };
  }
};

export const BorrowServices = {
  CreateBorrow,
  OverdueBorrow
};
