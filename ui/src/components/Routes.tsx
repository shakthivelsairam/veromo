import React from 'react';
import Departments from "./departments/index"
import Registration from './Registration'
import MetaData from './MetaData'
import PriceMaster from './masters/PriceForm'
import ClientMaster from './masters/clientForm'

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
    path: '/registration',
    sidebarName: 'Registration',
    component: Registration
  },
  {
    path: '/metadata',
    sidebarName: 'Meta Data',
    component: MetaData
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
  
  
];

export default Routes;