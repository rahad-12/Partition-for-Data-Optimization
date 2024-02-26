import { db } from "../app/database";
import ResMsg from "../utils/responseMessage";
import StatusCode from "../utils/statusCode";

abstract class AbstractServices {
  protected db = db;
  protected ResMsg = ResMsg;
  protected StatusCode = StatusCode;
}

export default AbstractServices;
