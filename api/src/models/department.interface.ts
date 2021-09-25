export interface BaseDepartment {
    name: string;
    code: string;
    sequence: number;
    print_separately: boolean;
  }
  
  export interface Department extends BaseDepartment {
    id: number;
  }