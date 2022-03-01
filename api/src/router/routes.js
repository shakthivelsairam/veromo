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
import * as commonController from "../controllers/common"
import * as uomController from "../controllers/uom"
import * as lonicController from "../controllers/loinccode"
import * as analyteController from "../controllers/anayte"
import * as instrumentanalyteController from "../controllers/instrumentAnalyte"
import * as userController from "../controllers/user"
import * as clientsController from "../controllers/clients"

// General Lookups controller

import * as genericController from "../controllers/general"

// tenant routes
router.route("/tenants/:id").get(tenantController.get)
router.route("/tenants").get(tenantController.list)
router.route("/tenants").post(tenantController.add)
router.route("/tenants/:id").put(tenantController.update)
router.route("/tenants/:id").delete(tenantController.remove)

// Facility routes
router.route("/facilities/:id").get(facilityController.get)
router.route("/facilities").get(facilityController.list)
router.route("/facilities").post(facilityController.add)
router.route("/facilities/:id").put(facilityController.update)
router.route("/facilities/basebranch/:id").get(facilityController.isbasebranch)

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

//User routes
router.route("/users/:id").get(userController.get)
router.route("/users").get(userController.list)
router.route("/users").post(userController.add)
router.route("/users/:id").put(userController.update)

//Clients routes
router.route("/clients/:id").get(clientsController.get)
router.route("/clients").get(clientsController.list)
router.route("/clients").post(clientsController.add)


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

// Analyte routes


router.route("/analyte").post(analyteController.add)
router.route("/analyte").get(analyteController.list)
router.route("/analyte/:id").get(analyteController.get)
router.route("/analyterange/:id").get(analyteController.rangeget)

// Instrument Analyte mapping routes

router.route("/instrumentanalyte").get(instrumentanalyteController.list)


// Lookup routes

router.route("/tenantslookup").get(tenantController.lookup)
router.route("/metatypeslookup").get(metatypeController.lookup)
router.route("/instrumenttypelookup").get(instrumentDataController.lookup)
router.route("/facilitylookup").get(facilityController.lookup)
router.route("/servicelookup").get(serviceController.lookup)
router.route("/departmentlookup").get(departmentController.lookup)
router.route("/sampleslookup").get(sampleController.lookup)
router.route("/containerlookup").get(containerController.lookup)
router.route("/methodlookup").get(methodController.lookup)
router.route("/uomlookup").get(uomController.lookup)
router.route("/loniclookup").get(lonicController.lookup)
 // Only Lookups Tabl
router.route("/resultdatatypelookup/:flag").get(genericController.lookupresulttype)
router.route("/inputpatternlookup").get(genericController.lookupinputpattern)
router.route("/refrangelookup").get(genericController.lookuprefrange)
router.route("/getLookupdevice").get(genericController.lookupdevice)

router.route("/getLookupmetadata/:type").get(genericController.lookupmeta)

// Export API routes
export const apiRoutes = router