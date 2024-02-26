"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_service_1 = __importDefault(require("../../abstract/abstract.service"));
class MemberUserService extends abstract_service_1.default {
    constructor() {
        super();
    }
    // get user
    getUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { limit = 10, skip = 0, age } = req.query;
            // Build the query in user partition not the base table
            let query = this.db("user_partitioned")
                .withSchema("test")
                .select("id", "name", "age");
            // Add condition to filter by age if provided
            if (age) {
                query = query.where({ age });
            }
            // Apply pagination
            query = query.limit(Number(limit)).offset(Number(skip));
            // Execute the query
            const data = yield query;
            return {
                success: true,
                code: this.StatusCode.HTTP_OK,
                data: data,
            };
        });
    }
}
exports.default = MemberUserService;
