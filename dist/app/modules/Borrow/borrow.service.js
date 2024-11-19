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
exports.BorrowServices = void 0;
const sharedPrisma_1 = require("../../../shared/sharedPrisma");
const CreateBorrow = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield sharedPrisma_1.prisma.book.findUnique({
            where: { bookId: data.bookId },
        });
        const member = yield sharedPrisma_1.prisma.member.findUnique({
            where: { memberId: data.memberId },
        });
        if (!book) {
            throw new Error(`Book with ID ${data.bookId} not found.`);
        }
        if (!member) {
            throw new Error(`Member with ID ${data.memberId} not found.`);
        }
        if (book.availableCopies <= 0) {
            throw new Error(`No available copies of the book with ID ${data.bookId}.`);
        }
        const borrowRecord = yield sharedPrisma_1.prisma.borrowRecord.create({
            data: {
                bookId: data.bookId,
                memberId: data.memberId,
                borrowDate: new Date(),
            },
        });
        yield sharedPrisma_1.prisma.book.update({
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
    }
    catch (error) {
        throw error;
    }
});
const OverdueBorrow = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentDate = new Date();
        const overdueBooks = yield sharedPrisma_1.prisma.borrowRecord.findMany({
            where: {
                returnDate: null,
                borrowDate: {
                    lt: new Date(currentDate.setDate(currentDate.getDate() - 14)),
                },
            },
            include: {
                book: true,
                member: true,
            },
        });
        if (overdueBooks.length > 0) {
            const overdueList = overdueBooks.map((borrow) => {
                const overdueDays = Math.floor((currentDate.getTime() - new Date(borrow.borrowDate).getTime()) / (1000 * 3600 * 24));
                return {
                    borrowId: borrow.borrowId,
                    bookTitle: borrow.book.title,
                    borrowerName: borrow.member.name,
                    overdueDays: overdueDays,
                };
            });
            return overdueList;
        }
        else {
            return {
                success: true,
                status: 200,
                message: "No overdue books",
                data: [],
            };
        }
    }
    catch (error) {
        return error;
    }
});
exports.BorrowServices = {
    CreateBorrow,
    OverdueBorrow
};
