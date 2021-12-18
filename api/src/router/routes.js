import express from "express"

const router = express.Router()

import * as tenantController from "../controllers/tenants"
import * as facilityController from "../controllers/facility"
import * as departmentController from "../controllers/department"
import * as sampleController from "../controllers/sample"
import * as containerController from "../controllers/container"
import * as methodController from "../controllers/method"
import * as metatypeController from "../controllers/metatype"
import * as instrumentDataController from "../controllers/instrument"
import * as serviceController from "../controllers/service"


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

// Metattypes Routes
router.route("/metatypes").post(metatypeController.add)
router.route("/metatypes").get(metatypeController.list)

// Meta data Routes
router.route("/metadatas/:id").get(metatypeController.get)
router.route("/metadatas").post(metatypeController.addmeta)
router.route("/metadatas").get(metatypeController.listmeta)



router.route("/instrumentdata").post(instrumentDataController.add)
router.route("/instrumentdata/:id").get(instrumentDataController.get)
router.route("/instrumentdata").get(instrumentDataController.list)

router.route("/instrumenttype/:id").get(instrumentDataController.getType)
router.route("/instrumenttype").get(instrumentDataController.getTypeList)
router.route("/instrumenttype").post(instrumentDataController.addType)





// Lookup routes

router.route("/tenantslookup").get(tenantController.lookup)
router.route("/metatypeslookup").get(metatypeController.lookup)
router.route("/instrumenttypelookup").get(instrumentDataController.lookup)
router.route("/facilitylookup").get(facilityController.lookup)
router.route("/servicelookup").get(serviceController.lookup)
// Export API routes
export const apiRoutes = router