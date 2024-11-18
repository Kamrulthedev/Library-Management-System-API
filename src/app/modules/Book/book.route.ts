import express  from "express";
import { BooksControllars } from "./book.controlar";

const router = express.Router();

router.post("", BooksControllars.CreateBookDB);

router.get("", BooksControllars.GetBooksDB);

router.get("/:id", BooksControllars.GetByBookIdDB);

router.get("/:id", BooksControllars.UpdateBookDB);

export const BookRoutes = router;