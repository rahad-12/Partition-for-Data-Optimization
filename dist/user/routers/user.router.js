"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_router_1 = __importDefault(require("../../abstract/abstract.router"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
class UserRouter extends abstract_router_1.default {
    constructor() {
        super();
        this.Userontroller = new user_controller_1.default();
        this.callRouter();
    }
    callRouter() {
        // get user router
        this.router.route("/").get(this.Userontroller.getUser);
    }
}
exports.default = UserRouter;
