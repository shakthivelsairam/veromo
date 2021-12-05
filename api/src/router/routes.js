import express from "express"

const router = express.Router()

import * as tenantController from "../controllers/tenants"
import * as facilityController from "../controllers/facility"

// tenant routes
router.route("/tenants/:id").get(tenantController.get)
router.route("/tenants").get(tenantController.list)
router.route("/tenants").post(tenantController.add)
router.route("/tenants/:id").put(tenantController.update)

// Facility routes
router.route("/facilities/:id").get(facilityController.get)
router.route("/facilities").get(facilityController.list)
router.route("/facilities").post(facilityController.add)
router.route("/facilities/:id").put(facilityController.update)

// Export API routes
export const apiRoutes = router