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
exports.ReturnServices = void 0;
const sharedPrisma_1 = require("../../../shared/sharedPrisma");
const CreateReturn = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrowRecord = yield sharedPrisma_1.prisma.borrowRecord.findUniqueOrThrow({
            where: { borrowId: id },
        });
        if (!borrowRecord) {
            throw new Error(`Borrow record with ID ${id} not found.`);
        }
        const returnedRecord = yield sharedPrisma_1.prisma.borrowRecord.update({
            where: { borrowId: id },
            data: {
                returnDate: new Date(),
            },
        });
        const book = yield sharedPrisma_1.prisma.book.findUnique({
            where: { bookId: borrowRecord.bookId },
        });
        if (!book) {
            throw new Error(`Book with ID ${borrowRecord.bookId} not found.`);
        }
        // Increase the available copies of the book
        yield sharedPrisma_1.prisma.book.update({
            where: { bookId: borrowRecord.bookId },
            data: {
                availableCopies: book.availableCopies + 1,
            },
        });
        return borrowRecord;
    }
    catch (error) {
        console.error("Error processing return:", error);
        throw error;
    }
});
exports.ReturnServices = {
    CreateReturn
};
