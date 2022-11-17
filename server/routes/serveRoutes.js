import { Router } from "express";
const router = Router();

import {
  saveInfosLoginPost,
  verifyEmailAlreadyExist,
  verifyDataToLogin,
} from "../controller/InfosLoginController.js";

router.post("/saveInfosLogin", saveInfosLoginPost);
router.get("/verifyEmailAlreadyExist/:email", verifyEmailAlreadyExist);
router.post("/verifyDataToLogin", verifyDataToLogin);

export default router;
