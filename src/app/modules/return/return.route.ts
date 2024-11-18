import express from "express";
import { ReturnControllars } from "./return.controllar";

const router = express.Router();

router.post("", ReturnControllars.CreateReturnDB);

export const ReturnRoutes = router;
