import { prisma } from "../../../shared/sharedPrisma";


const CreateReturn = async (id: string) => {
    try {
      const borrowRecord = await prisma.borrowRecord.findUniqueOrThrow({
        where: { borrowId: id },
      });
      if (!borrowRecord) {
        throw new Error(`Borrow record with ID ${id} not found.`);
      }  
      const returnedRecord = await prisma.borrowRecord.update({
        where: { borrowId: id },
        data: {
          returnDate: new Date(),
        },
      });
        const book = await prisma.book.findUnique({
        where: { bookId: borrowRecord.bookId },
      });
  
      if (!book) {
        throw new Error(`Book with ID ${borrowRecord.bookId} not found.`);
      }
  
      // Increase the available copies of the book
      await prisma.book.update({
        where: { bookId: borrowRecord.bookId },
        data: {
          availableCopies: book.availableCopies + 1,
        },
      });
  
      return borrowRecord;
    } catch (error) {
      console.error("Error processing return:", error);
      throw error;
    }
  };
  

export const ReturnServices = {
    CreateReturn
};