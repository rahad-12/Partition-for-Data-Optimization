import { Router } from "express";
import UserRouter from "./routers/user.router";

class UserRootRouter {
  public UserRootRouter = Router();
  private UserRouter = new UserRouter();

  constructor() {
    this.callRouter();
  }

  private callRouter() {
    // user root router
    this.UserRootRouter.use("/list", this.UserRouter.router);
  }
}

export default UserRootRouter;
