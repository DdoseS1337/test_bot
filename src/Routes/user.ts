import { Router, Request, Response } from "express";
import userController from "../users/user.controller";
const router = Router();

router.get("/", userController.create.bind(userController));
router.post("/", userController.create.bind(userController));

export default router;
