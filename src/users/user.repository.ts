import { Model } from "mongoose";
import { AbstractRepository } from "../database/abstract.repository";
import { UserDocument } from "./interface/user.interface";

export class UserRepository extends AbstractRepository<UserDocument> {
  constructor(model: Model<UserDocument>) {
    
    super(model);
  }
}
