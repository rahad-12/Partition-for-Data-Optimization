import { Request, Response } from "express";
import MemberUserService from "../services/user.service";
import AbstractServices from "../../abstract/abstract.service";

class Userontroller extends AbstractServices {
  private MemberUserService = new MemberUserService();

  // get user
  public getUser = async (req: Request, res: Response) => {
    try {
      const { code, ...data } = await this.MemberUserService.getUser(req);

      res.status(code).json(data);
    } catch (error) {
      console.error("Error in getUser controller:", error);
      res.status(this.StatusCode.HTTP_INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
}

export default Userontroller;
