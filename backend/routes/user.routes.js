import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import {
  getUserProfile,
  followUnfollowUser,
  getSuggestedUserProfile,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", protectedRoute, getUserProfile);
router.post("/follow/:id", protectedRoute, followUnfollowUser);
router.get("/suggested", protectedRoute, getSuggestedUserProfile);
router.post("/update", protectedRoute, updateUser);

export default router;
