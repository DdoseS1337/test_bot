import mongoose from "mongoose";

class Database {
  private readonly uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  async connect(): Promise<void> {
    try {
      await mongoose.connect(this.uri, {});
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }
}

export default Database;
