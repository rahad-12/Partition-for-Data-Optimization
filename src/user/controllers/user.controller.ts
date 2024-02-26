import { Request, Response } from "express";
import MemberUserService from "../services/user.service";

class Userontroller {
  private MemberUserService = new MemberUserService();

  // get user
  public getUser = async (req: Request, res: Response) => {
    try {
      const user = await this.MemberUserService.getUser(req);

    res.json(user);
    } catch(e) {
      console.log(e)
    }
  } 
}

export default Userontroller;
