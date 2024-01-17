import { Types, Document } from "mongoose";

export class AbstractDocument extends Document {
  _id: string;

  constructor() {
    super();
    this._id = new Types.ObjectId().toHexString();
  }
}
