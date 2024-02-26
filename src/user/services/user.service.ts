import { Request } from "express";
import AbstractServices from "../../abstract/abstract.service";
import config from "../../config/config";

class MemberUserService extends AbstractServices {
  constructor() {
    super();
  }

  // get user
  public async getUser(req: Request) {
    try {
      const data = await this.db("user").withSchema("test").select("*");
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default MemberUserService;
