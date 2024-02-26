"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = __importDefault(require("./routers/user.router"));
class UserRootRouter {
    constructor() {
        this.UserRootRouter = (0, express_1.Router)();
        this.UserRouter = new user_router_1.default();
        this.callRouter();
    }
    callRouter() {
        // user root router
        this.UserRootRouter.use("/list", this.UserRouter.router);
    }
}
exports.default = UserRootRouter;
