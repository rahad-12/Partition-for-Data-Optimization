import { Router } from "express";
import UserRootRouter from "../user/user.router";
class RootRouter {
  public v1Router = Router();
  private UserRootRouter = new UserRootRouter();

  constructor() {
    this.callV1Router();
  }

  private callV1Router() {
    // user router
    this.v1Router.use("/user", this.UserRootRouter.UserRootRouter);
  }
}

export default RootRouter;
