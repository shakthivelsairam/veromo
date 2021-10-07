import React from 'react';
import Departments from "./departments/index"
import Registration from './Registration'
import MetaData from './masters/metaIndex'
import PriceMaster from './masters/priceIndex'
import ClientMaster from './masters/clientIndex'
import SampleCollectionList from "./sample-collection/List"
import ResultEntryList from "./result-entry/List"
import TestMasterList from "./masters/test/List"

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
    component: Departments
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
    path: '/pricemaster',
    sidebarName: 'Price Master',
    component: PriceMaster
  },
  {
    path: '/clientmaster',
    sidebarName: 'Client Master',
    component: ClientMaster
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