import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import {
  deleteNotifications,
  getNotifications,
  singleDelete,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectedRoute, getNotifications);
router.delete("/", protectedRoute, deleteNotifications);
router.delete("/:id", protectedRoute, singleDelete);

export default router;
