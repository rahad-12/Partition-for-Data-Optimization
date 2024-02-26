"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { db } from '../app/database';
const database_1 = require("../app/database");
class AbstractServices {
    constructor() {
        this.db = database_1.db;
    }
}
exports.default = AbstractServices;
