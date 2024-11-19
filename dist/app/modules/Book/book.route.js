"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controlar_1 = require("./book.controlar");
const router = express_1.default.Router();
router.post("", book_controlar_1.BooksControllars.CreateBookDB);
router.get("", book_controlar_1.BooksControllars.GetBooksDB);
router.get("/:bookId", book_controlar_1.BooksControllars.GetByBookIdDB);
router.put("/:bookId", book_controlar_1.BooksControllars.UpdateBookDB);
router.delete("/:bookId", book_controlar_1.BooksControllars.DeleteBookDB);
exports.BookRoutes = router;
