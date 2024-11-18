import express  from "express";
import { BorrowControllars } from "./borrow.controllar";



const router = express.Router();

router.post("", BorrowControllars.CreateBorrowDB);



export const BorrowRoutes = router;