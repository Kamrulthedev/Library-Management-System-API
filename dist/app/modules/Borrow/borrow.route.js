"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrow_controllar_1 = require("./borrow.controllar");
const router = express_1.default.Router();
router.post("", borrow_controllar_1.BorrowControllars.CreateBorrowDB);
router.get("/overdue", borrow_controllar_1.BorrowControllars.OverdueBorrowDB);
exports.BorrowRoutes = router;
