"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
class App {
  constructor(port) {
    this.app = (0, express_1.default)();
    this.port = port;
    this.initRouters();
  }
  // start server
  startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server is started at port: ${this.port} 🚀`);
    });
  }
  // init routers
  initRouters() {
    this.app.use("/api/v1", new router_1.default().v1Router);
  }
}
exports.default = App;
