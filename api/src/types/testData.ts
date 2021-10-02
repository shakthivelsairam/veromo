export interface testCode {
    testCode: string
  }
  export interface testData extends testCode {
    testDesc : string,
    active : boolean
  }
  export interface testMaster extends testCode {
    rowid : number,
    testName : string,
    report_name : string,
    tenant_name : string,
    active : boolean
  }
  