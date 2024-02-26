"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = __importDefault(require("../user/user.router"));
class RootRouter {
    constructor() {
        this.v1Router = (0, express_1.Router)();
        this.UserRootRouter = new user_router_1.default();
        this.callV1Router();
    }
    callV1Router() {
        // user router
        this.v1Router.use("/user", this.UserRootRouter.UserRootRouter);
    }
}
exports.default = RootRouter;
