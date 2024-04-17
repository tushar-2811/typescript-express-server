"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 9000;
app.get('/', (req, res) => {
    res.send('<h1> Hello world </h1>');
});
app.listen(port, () => {
    console.log(`The server is running on port : ${port}`);
});
