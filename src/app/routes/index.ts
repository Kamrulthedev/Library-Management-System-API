import express from "express";
import { BookRoutes } from "../modules/Book/book.route";

const router = express.Router();

const moduleRotes = [{
    path: "",
    route: BookRoutes
}];

moduleRotes.forEach((route) => router.use(route.path, route.route));

export default router;
