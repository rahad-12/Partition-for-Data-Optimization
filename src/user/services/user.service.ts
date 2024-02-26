import { Request } from "express";
import AbstractServices from "../../abstract/abstract.service";
import config from "../../config/config";

class MemberUserService extends AbstractServices {
  constructor() {
    super();
  }

  // get user
  public async getUser(req: Request) {
    const data = await this.db("user").withSchema("test").select("*");
    if (!data) throw new Error("Data is not fetching");

    return {
      success: true,
      code: this.StatusCode.HTTP_OK,
      data: data,
    };
  }
}

export default MemberUserService;
