import { Router } from "express";
import userController from "../users/user.controller";
const router = Router();

router.get("/", userController.get.bind(userController));
router.post("/", userController.create.bind(userController));

export default router;
