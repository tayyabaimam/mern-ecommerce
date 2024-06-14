import express from "express";
const authRouter = express.Router();
import { login, register } from "../controllers/auth/User";
import passport from "passport";

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
export default authRouter;
