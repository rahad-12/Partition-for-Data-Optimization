"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
const expressServer = http_1.default.createServer(app);
const port = 3000;
app.get('/', (req, res) => {
    res.send("send");
});
expressServer.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
