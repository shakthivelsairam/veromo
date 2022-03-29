import React from "react"
import DepartmentList from "./masters/departments/List"
import Registration from "./Registration"
import MetaData from "./masters/meta/List"
import PriceMaster from "./masters/price/List"
import ClientMaster from "./masters/client/List"
import SampleCollectionList from "./sample-collection/List"
import ResultEntryList from "./result-entry/List"
import TestMasterList from "./masters/test/List"
import InstrumentMaster from "./masters/instrument/List"
import AnalyteMasterList from "./masters/analyte/List"
import InstrumentAnalyteMapping from "./masters/instrument-analyte/List"
import SampleMaster from "./masters/sample/List"
import ContainerMaster from "./masters/container/List"
import MethodMaster from "./masters/method/List"
import TariffMaster from "./masters/tariff/List"
import ClientTariffMapping from "./masters/client-tariff/List"
import UserMaster from "./masters/users/List"
import RoleMaster from "./masters/roles/List"
import TenantList from "./masters/tenant/List"
import FacilityList from "./masters/facility/List"
import Email from "./masters/emailgateway/List"
import Drug from "./masters/drug/List"
import Organism from "./masters/organism/List"
import DeliveryQueue from "./delivery-queue/List"
import SampleEnquiry from "./sample-enquiry/List"

const Home: React.FC = () => {
  return <div>Dashboard</div>
}

const Routes = [
  {
    path: "/",
    sidebarName: "Dashboard",
    component: Home,
  },
  {
    path: "/email",
    sidebarName: "Email Gateway",
    component: Email,
  },
  {
    path: "/drugs",
    sidebarName: "Drug Master",
    component: Drug,
  },
  {
    path: "/organism",
    sidebarName: "Organism Master",
    component: Organism,
  },
  {
    path: "/tenant",
    sidebarName: "Tenants",
    component: TenantList,
  },
  {
    path: "/facility",
    sidebarName: "Facility",
    component: FacilityList,
  },
  {
    path: "/department",
    sidebarName: "Departments",
    component: DepartmentList,
  },
  {
    path: "/sample",
    sidebarName: "Sample Master",
    component: SampleMaster,
  },
  {
    path: "/container",
    sidebarName: "Container Master",
    component: ContainerMaster,
  },
  {
    path: "/method",
    sidebarName: "Method Master",
    component: MethodMaster,
  },
  {
    path: "/metadata",
    sidebarName: "Meta Data",
    component: MetaData,
  },
  {
    path: "/testmaster",
    sidebarName: "Test Master",
    component: TestMasterList,
  },
  {
    path: "/tariff",
    sidebarName: "Tariff Master",
    component: TariffMaster,
  },
  {
    path: "/clienttariff",
    sidebarName: "Client Tariff Mapping",
    component: ClientTariffMapping,
  },
  {
    path: "/price",
    sidebarName: "Price Master",
    component: PriceMaster,
  },
  {
    path: "/clientmaster",
    sidebarName: "Client Master",
    component: ClientMaster,
  },
  {
    path: "/instrumentmaster",
    sidebarName: "Instrument Master",
    component: InstrumentMaster,
  },
  {
    path: "/usermaster",
    sidebarName: "User Master",
    component: UserMaster,
  },
  {
    path: "/rolemaster",
    sidebarName: "Role Master",
    component: RoleMaster,
  },
  {
    path: "/analytemaster",
    sidebarName: "Analyte Master",
    component: AnalyteMasterList,
  },
  {
    path: "/instrumentanalyte",
    sidebarName: "Instrument Analyte Mapping",
    component: InstrumentAnalyteMapping,
  },
  {
    path: "/registration",
    sidebarName: "Registration",
    component: Registration,
  },
  {
    path: "/samplecollection",
    sidebarName: "Sample Collection",
    component: SampleCollectionList,
  },
  {
    path: "/resultentry",
    sidebarName: "Result Entry",
    component: ResultEntryList,
  },
  {
    path: "/deliveryqueue",
    sidebarName: "Delivery Queue",
    component: DeliveryQueue,
  },
  {
    path: "/sampleenquiry",
    sidebarName: "Sample Enquiry",
    component: SampleEnquiry,
  },
]

export default Routes
