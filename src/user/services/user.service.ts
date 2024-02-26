import { Request } from "express";
import AbstractServices from "../../abstract/abstract.service";
import config from "../../config/config";

class MemberUserService extends AbstractServices {
  constructor() {
    super();
  }

  // get user
  public async getUser(req: Request) {
    const { limit = 10, skip = 0, age } = req.query;

    // Build the query in user partition not the base table
    let query = this.db("user_partitioned")
      .withSchema("test")
      .select("id", "name", "age");

    // Add condition to filter by age if provided
    if (age) {
      query = query.where({ age });
    }

    // Apply pagination
    query = query.limit(Number(limit)).offset(Number(skip));

    // Execute the query
    const data = await query;

    return {
      success: true,
      code: this.StatusCode.HTTP_OK,
      data: data,
    };
  }
}

export default MemberUserService;
