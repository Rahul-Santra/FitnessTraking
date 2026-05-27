import { getDashboardData } from "../services/dashboard.service.js";

import asyncHandler from "../utils/asyncHandler.js";

import { sendResponse } from "../utils/response.js";

export const getDashboard =
  asyncHandler(
    async (req, res) => {
      const dashboard =
        await getDashboardData(
          req.user.id
        );

      return sendResponse({
        res,
        statusCode: 200,
        message:
          "Dashboard fetched successfully",
        data: dashboard,
      });
    }
  );