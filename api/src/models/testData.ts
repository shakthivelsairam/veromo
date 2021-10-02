import {testCode,testData,testMaster} from "../types/testData";
import {db} from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
import exp from "constants";


// Fetch all test codes
export const fetchAllTests = (callback:Function) => {
  const queryString = 'SELECT ts.id,ts.name,ts.code,ts.report_name,tn.name FROM tests ts,tenants tn where ts.active=1 and ts.tenant_id=tn.id'
  db.query(queryString, (err, result) => {
    if (err) {callback(err)}

    const rows = <RowDataPacket[]> result;
    const testMasters: testMaster[] = [];

    rows.forEach(row => {
      const testMaster: testMaster =  {
        rowid : row.id,
        testName : row.name,
        testCode : row.code,
        report_name : row.report_name,
        tenant_name : row.name,
        active : row.active
      }
      testMasters.push(testMaster);
    });
    callback(null, testMasters);
  });
}

// Fetch single test codes
export const fetchData = (testCode: string,callback: Function) => {
    const queryString = 'SELECT name,code,report_name,tenant_id FROM tests where code=? and active=1'
    db.query(queryString, testCode, (err, result) => {
        if (err) {callback(err)}
    
        const rows = <RowDataPacket[]> result;
        const testCodes: testCode[] = [];
    
        rows.forEach(row => {
          const testCode: testData =  {
            testDesc: row.testcode,
            testCode: row.testdesc,
            active:row.active
          }
          testCodes.push(testCode);
        });
        callback(null, testCodes);
      });
}
 