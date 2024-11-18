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
        throw new Error(`No available copies of the book with ID ${data.bookId}.`);
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
        borrowId : borrowRecord.borrowId,
        bookId : borrowRecord.bookId,
        memberId : borrowRecord.memberId,
        borrowDate : borrowRecord.borrowDate
      };
    } catch (error) {
      console.error("Error creating borrow record:", error);
      throw error;
    }
  };

export const BorrowServices = {
    CreateBorrow
};