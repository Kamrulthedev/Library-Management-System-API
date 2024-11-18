import express from "express";
import { BorrowControllars } from "./borrow.controllar";

const router = express.Router();

router.post("", BorrowControllars.CreateBorrowDB);

router.get("/overdue", BorrowControllars.OverdueBorrowDB)

export const BorrowRoutes = router;
