import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import userRoutes from "./Routes/user";
export default class Server {
  constructor(app: Application) {
    this.config(app);
  }

  private config(app: Application): void {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/user", userRoutes);
  }
}
