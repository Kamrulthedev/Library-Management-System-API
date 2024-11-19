"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHendlar_1 = require("./app/middlewares/globalErrorHendlar");
const notFount_1 = require("./app/middlewares/notFount");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("Library Managment System API....");
});
app.use("/api", routes_1.default);
app.use(globalErrorHendlar_1.globalErrorHendlar);
app.use(notFount_1.notFount);
exports.default = app;
