export interface testCode {
    testCode: string
  }
  export interface testData extends testCode {
    testDesc : string,
    active : boolean
  }
  export interface testMaster extends testCode {
    testName : string,
    report_name : string,
    tenant_id : number,
    active : boolean
  }
  