import express from "express"

const router = express.Router()

import * as tenantController from "../controllers/tenants"

// tenant routes
router.route("/tenants/:id").get(tenantController.get)
router.route("/tenants").get(tenantController.list)
router.route("/tenants").post(tenantController.add)
router.route("/tenants/:id").put(tenantController.update)

// Export API routes
export const apiRoutes = router