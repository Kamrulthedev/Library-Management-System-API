import express  from "express";
import { BooksControllars } from "./book.controlar";

const router = express.Router();

router.post("", BooksControllars.CreateBookDB);

router.get("", BooksControllars.GetBooksDB);

router.get("/:bookId", BooksControllars.GetByBookIdDB);

router.put("/:bookId", BooksControllars.UpdateBookDB);

router.delete("/:bookId", BooksControllars.DeleteBookDB);

export const BookRoutes = router;