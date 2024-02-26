import express, { Application, NextFunction, Request, Response } from "express";
import RootRouter from "./router";

class App {
  public app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initRouters();
  }

  // start server
  public startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server is started at port: ${this.port} 🚀`);
    });
  }

  // init routers
  private initRouters() {
    this.app.use("/api/v1", new RootRouter().v1Router);
  }
}

export default App;
