import { Router } from "express";
import userController from "../users/user.controller";
const router = Router();

router.get("/", userController.create.bind(userController));
router.post("/", userController.get.bind(userController));

export default router;
