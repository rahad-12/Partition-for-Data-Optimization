import { Request, Response } from "express";
import MemberUserService from "../services/user.service";

class Userontroller {
  private MemberUserService = new MemberUserService();

  // get user
  public getUser = async (req: Request, res: Response) => {
    try {
      const { code, ...data } = await this.MemberUserService.getUser(req);

      res.status(code).json(data);
    } catch (e) {
      console.log(e);
    }
  };
}

export default Userontroller;
