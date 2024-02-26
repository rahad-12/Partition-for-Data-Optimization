"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../app/database");
const responseMessage_1 = __importDefault(require("../utils/responseMessage"));
const statusCode_1 = __importDefault(require("../utils/statusCode"));
class AbstractServices {
  constructor() {
    this.db = database_1.db;
    this.ResMsg = responseMessage_1.default;
    this.StatusCode = statusCode_1.default;
  }
}
exports.default = AbstractServices;
