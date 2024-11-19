import { prisma } from "../../../shared/sharedPrisma";

const CreateBook = async (data: TBook) => {
  try {
    // Validate required fields
    if (
      !data.title ||
      !data.genre ||
      !data.publishedYear ||
      !data.totalCopies
    ) {
      throw new Error(
        "Missing required fields: title, genre, publishedYear, totalCopies"
      );
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
    throw error;
  }
};

const GetBooks = async () => {
  try {
    // Fetch all books from the database
    const books = await prisma.book.findMany();
    return books;
  } catch (error) {
    throw error;
  }
};

const GetByBookId = async (id: string) => {
  try {
    // Fetch the book by its ID
    const book = await prisma.book.findUnique({
      where: {
        bookId: id,
      },
    });

    // Check if the book exists
    if (!book) {
      throw new Error(`Book with ID ${id} not found.`);
    }

    return book;
  } catch (error) {
    throw error;
  }
};


const UpdateBook = async (id: string, data: Partial<TBook>) => {
    try {
      if (Object.keys(data).length === 0) {
        throw new Error("No data provided to update the book.");
      }
      const updatedBook = await prisma.book.update({
        where: { bookId: id },
        data: data,
      });
  
      return updatedBook;
    } catch (error) {
      throw error;
    }
  };


  const DeleteBook = async (id: string) => {
    try {
      const book = await prisma.book.findUnique({
        where: { bookId: id },
      });
  
      if (!book) {
        throw new Error(`Book with ID ${id} not found.`);
      }
  
      // Perform the delete operation
      const deletedBook = await prisma.book.delete({
        where: { bookId: id },
      });
  
      return deletedBook;
    } catch (error) {
      throw error;
    }
  };


export const BookServices = {
  CreateBook,
  GetBooks,
  GetByBookId,
  UpdateBook,
  DeleteBook
};
