import AbstractRouter from "../../abstract/abstract.router";
import Userontroller from "../controllers/user.controller";

class UserRouter extends AbstractRouter {
  private Userontroller = new Userontroller();
  constructor() {
    super();
    this.callRouter();
  }

  private callRouter() {
    // get user router
    this.router.route("/").get(this.Userontroller.getUser);
  }
}
export default UserRouter;
