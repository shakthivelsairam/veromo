import express from "express"

const router = express.Router()

import * as tenantController from "../controllers/tenants"
import * as facilityController from "../controllers/facility"
import * as departmentController from "../controllers/department"
import * as sampleController from "../controllers/sample"
import * as containerController from "../controllers/container"
import * as methodController from "../controllers/method"


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

// Department routes
router.route("/departments/:id").get(departmentController.get)
router.route("/departments").get(departmentController.list)
router.route("/departments").post(departmentController.add)
router.route("/departments/:id").put(departmentController.update)

//Sample routes
router.route("/samples/:id").get(sampleController.get)
router.route("/samples").get(sampleController.list)
router.route("/samples").post(sampleController.add)
router.route("/samples/:id").put(sampleController.update)


//Containers routes
router.route("/containers/:id").get(containerController.get)
router.route("/containers").get(containerController.list)
router.route("/containers").post(containerController.add)
router.route("/containers/:id").put(containerController.update)

//Containers routes
router.route("/methods/:id").get(methodController.get)
router.route("/methods").get(methodController.list)
router.route("/methods").post(methodController.add)
router.route("/methods/:id").put(methodController.update)


// Lookup routes

router.route("/tenantslookup").get(tenantController.lookup)

// Export API routes
export const apiRoutes = router