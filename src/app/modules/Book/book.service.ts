import { prisma } from "../../../shared/sharedPrisma";

const CreateBook = async (data: TBook) => {
    try {
      // Validate required fields
      if (!data.title || !data.genre || !data.publishedYear || !data.totalCopies) {
        throw new Error("Missing required fields: title, genre, publishedYear, totalCopies");
      }
  
      // Ensure availableCopies is not greater than totalCopies
      if (data.availableCopies > data.totalCopies) {
        throw new Error("availableCopies cannot be greater than totalCopies");
      }
  
      // Create a new book record
      const result = await prisma.book.create({
        data: {
          title: data.title,
          genre: data.genre,
          publishedYear: data.publishedYear,
          totalCopies: data.totalCopies,
          availableCopies: data.availableCopies,
        },
      });
  
      return result;
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
  };


  const GetBooks = async () => {
    try {
      // Fetch all books from the database
      const books = await prisma.book.findMany();
      return books;
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };

export const BookServices = {
  CreateBook,
  GetBooks
};
