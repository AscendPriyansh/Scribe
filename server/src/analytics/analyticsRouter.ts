import express from "express";
import authenticate from "../middleware/authentication.ts";
import { getDashboardStats, recordVisit } from "./analyticsController.ts";

const analyticsRouter = express.Router();

analyticsRouter.post("/analytics/visit", authenticate, recordVisit);

analyticsRouter.get("/stats/dashboard", authenticate, getDashboardStats);

export default analyticsRouter;
