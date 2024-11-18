import express  from "express";
import { BooksControllars } from "./book.controlar";

const router = express.Router();

router.post("", BooksControllars.CreateBookDB);

export const BookRoutes = router;