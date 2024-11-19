"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookServices = void 0;
const sharedPrisma_1 = require("../../../shared/sharedPrisma");
const CreateBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate required fields
        if (!data.title ||
            !data.genre ||
            !data.publishedYear ||
            !data.totalCopies) {
            throw new Error("Missing required fields: title, genre, publishedYear, totalCopies");
        }
        // Ensure availableCopies is not greater than totalCopies
        if (data.availableCopies > data.totalCopies) {
            throw new Error("availableCopies cannot be greater than totalCopies");
        }
        // Create a new book record
        const result = yield sharedPrisma_1.prisma.book.create({
            data: {
                title: data.title,
                genre: data.genre,
                publishedYear: data.publishedYear,
                totalCopies: data.totalCopies,
                availableCopies: data.availableCopies,
            },
        });
        return result;
    }
    catch (error) {
        throw error;
    }
});
const GetBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all books from the database
        const books = yield sharedPrisma_1.prisma.book.findMany();
        return books;
    }
    catch (error) {
        throw error;
    }
});
const GetByBookId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch the book by its ID
        const book = yield sharedPrisma_1.prisma.book.findUnique({
            where: {
                bookId: id,
            },
        });
        // Check if the book exists
        if (!book) {
            throw new Error(`Book with ID ${id} not found.`);
        }
        return book;
    }
    catch (error) {
        throw error;
    }
});
const UpdateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (Object.keys(data).length === 0) {
            throw new Error("No data provided to update the book.");
        }
        const updatedBook = yield sharedPrisma_1.prisma.book.update({
            where: { bookId: id },
            data: data,
        });
        return updatedBook;
    }
    catch (error) {
        throw error;
    }
});
const DeleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield sharedPrisma_1.prisma.book.findUnique({
            where: { bookId: id },
        });
        if (!book) {
            throw new Error(`Book with ID ${id} not found.`);
        }
        // Perform the delete operation
        const deletedBook = yield sharedPrisma_1.prisma.book.delete({
            where: { bookId: id },
        });
        return deletedBook;
    }
    catch (error) {
        throw error;
    }
});
exports.BookServices = {
    CreateBook,
    GetBooks,
    GetByBookId,
    UpdateBook,
    DeleteBook
};
