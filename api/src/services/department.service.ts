import { BaseDepartment, Department } from "../models/department.interface";
import { Departments } from "../models/departments.interface";

export const create = async (newItem: BaseDepartment): Promise<Department> => {
    const department = {id:1,name:"",code:"",sequence:1,print_separately:true};
    return department;
  };

  export const findAll = async (): Promise<Departments> => {
    const departments = [{id:1,name:"",code:"",sequence:1,print_separately:true}];
    return {depts: departments};
  };

  export const find = async (id: number): Promise<Department> => {
    const department = {id:1,name:"",code:"",sequence:1,print_separately:true};
    return department;
  };