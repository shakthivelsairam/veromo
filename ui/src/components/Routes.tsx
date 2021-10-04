import React from 'react';
import Departments from "./departments/index"
import Registration from './Registration'

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
];

export default Routes;