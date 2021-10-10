import React from 'react';
import DepartmentList from "./departments/List"
import Registration from './Registration'
import MetaData from './masters/metaIndex'
import PriceMaster from './masters/price/List'
import ClientMaster from './masters/clientIndex'
import SampleCollectionList from "./sample-collection/List"
import ResultEntryList from "./result-entry/List"
import TestMasterList from "./masters/test/List"
import InstrumentMaster from "./masters/instrumentIndex"
import AnalyteMasterList from "./masters/analyte/List"
import InstrumentAnalyteMapping from "./masters/instrument-analyte/List"
import SampleMaster from "./masters/sample/List"
import ContainerMaster from './masters/container/List';
import TariffMaster from './masters/tariff/List';
import ClientTariffMapping from './masters/client-tariff/List';
import UserMaster from './masters/users/List';
import RoleMaster from './masters/roles/List';

const Home: React.FC = () => {
  return (
      <div>
    Home</div>
  );
};

const Standings: React.FC = () => {
  return (
    <h1>Standings</h1>
  );
};

const Teams: React.FC = () => {
  return (
      <div>
    Teams</div>
  );
};

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/department',
    sidebarName: 'Departments',
    component: DepartmentList
  },
  {
    path: '/sample',
    sidebarName: 'Sample Master',
    component: SampleMaster
  },
  {
    path: '/container',
    sidebarName: 'Container Master',
    component: ContainerMaster
  },
  {
    path: '/metadata',
    sidebarName: 'Meta Data',
    component: MetaData
  },
  {
    path: '/testmaster',
    sidebarName: 'Test Master',
    component: TestMasterList
  },
  {
    path: '/tariff',
    sidebarName: 'Tariff Master',
    component: TariffMaster
  },
  {
    path: '/clienttariff',
    sidebarName: 'Client Tariff Mapping',
    component: ClientTariffMapping
  },
  {
    path: '/price',
    sidebarName: 'Price Master',
    component: PriceMaster
  },
  {
    path: '/clientmaster',
    sidebarName: 'Client Master',
    component: ClientMaster
  },
  {
    path: '/instrumentmaster',
    sidebarName: 'Instrument Master',
    component: InstrumentMaster
  },
  {
    path: '/usermaster',
    sidebarName: 'User Master',
    component: UserMaster
  },
  {
    path: '/rolemaster',
    sidebarName: 'Role Master',
    component: RoleMaster
  },
  {
    path: '/analytemaster',
    sidebarName: 'Analyte Master',
    component: AnalyteMasterList
  },
  {
    path: '/instrumentanalyte',
    sidebarName: 'Instrument Analyte Mapping',
    component: InstrumentAnalyteMapping
  },
  {
    path: '/registration',
    sidebarName: 'Registration',
    component: Registration
  },
  {
    path: '/samplecollection',
    sidebarName: 'Sample Collection',
    component: SampleCollectionList
  },
  {
    path: '/resultentry',
    sidebarName: 'Result Entry',
    component: ResultEntryList
  },
];

export default Routes;