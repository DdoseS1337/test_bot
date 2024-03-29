import { UserDocumentModel } from "./model/user.schema";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";
import { Request, Response } from "express";

class UserController {
  constructor(private readonly userService: UserService) {}
  async create(req: Request, res: Response) {
    try {
      return this.userService.validateCreateUserDto(req.body);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
}

const userController = new UserController(
  new UserService(new UserRepository(UserDocumentModel))
);
export default userController;
