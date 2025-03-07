import {registerUser, loginUser } from "../controllers/auth.controller.js";
import e from "express";


const authRoutes = e.Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);

export {authRoutes}