import * as db from "../db"

export async function add(anlyt) {
    const dbPool = await db.getPool()
    try {
      console.log("Master row ID  "+anlyt.rowid);
      if (anlyt.rowid>0)
      {
        const sqlQuery = 'UPDATE departments set name=?,code=?,active=?,short_code=?,mnemonicCode=?,sequence_no=?,tenant_id=?,isprintable=? WHERE id=?'
        const sqlResult = await dbPool.query(sqlQuery, [depts.ddeptname,depts.ddeptcode,depts.dactive,depts.dshortcode,depts.dmnemonic,depts.dseqNo,depts.dtenantid,depts.dprintSep,depts.drowid])
        console.log("db.departments.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
      else if (anlyt.rowid===0)
      {
        //const sqlQuery = 'INSERT INTO departments (name,code,active,short_code,mnemonicCode,sequence_no,tenant_id,isprintable,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?)'
        //const sqlResult = await dbPool.query(sqlQuery, [depts.ddeptname,depts.ddeptcode,depts.dactive,depts.dshortcode,depts.dmnemonic,depts.dseqNo,depts.dtenantid,depts.dprintSep, "system", "system"])
        const sqlQuery = 'INSERT INTO analytes (code,name,report_name,depart_id,sample_id,container_id,method_id,uom_id,loinc_id,lonic_code,lonic_desc,input_pattern,result_type,decimal_digit,active,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        const sqlResult = await dbPool.query(sqlQuery, [anlyt.analytecode,anlyt.orderName,anlyt.reportName,anlyt.sltdepartment,anlyt.sltsample,anlyt.sltcontainer,anlyt.sltmethod,anlyt.sltuom,anlyt.sltlonic,anlyt.lonicshort,anlyt.lonicdesc,anlyt.sltinputpattern,anlyt.sltresulttype,anlyt.decimaldigits,anlyt.active,"system", "system"])
        const lastinsertid=sqlResult.insertId
        //console.log("LAST INSERTED ID============================"+lastinsertid)
        /// Reference range store
        anlyt.rangedata.forEach(ele => {
          //console.log(element.sltagerange);
            const sqlQueryrange = 'INSERT INTO analyte_referance_range (analyte_id,referencerange,gender,agetype,agerange,valuetype,valuerange,valuerangevalue,printablerange,deviceid,method,uom,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
            const sqlrangeResult = dbPool.query(sqlQueryrange, [lastinsertid,ele.sltrefrange,ele.sltgender,ele.sltagetype,ele.sltagerange,ele.sltvaluetype,ele.sltvaluerange,ele.valrangeval,ele.printval,ele.sltdevice,ele.method1,ele.uom1,"system", "system"])
        });
        // analyte_assay_mapping
        const sqlQueryassay = 'INSERT INTO analyte_assay_mapping (analyte_id,equipment_id,assay_code,tenant_id,branch_id,method,uom,uploadable,downlodable,active,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?)'
        const sqlassaymapResult = await dbPool.query(sqlQueryassay, [lastinsertid,anlyt.dmdeviceid,anlyt.dmassaycode,anlyt.dmtenantid,anlyt.dmfacility,anlyt.dmmethod,anlyt.dmuom,anlyt.dmupload,anlyt.dmdownload,1,"system", "system"])
        console.log("db.Analyte.add sqlResult = " + JSON.stringify(sqlassaymapResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.departments.add error = ",err)
      return "Error Occured during departments insert"+JSON.stringify(err)
    }
    return null
}
export async function list() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT a.id as id,a.code as code,a.name as name,a.report_name as report_name,d.name as depart_name,a.active as active FROM analytes a,departments d where a.depart_id=d.id`
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("containers details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.containers.list error = ", JSON.stringify(err))
  }
  return null
}
export async function get(analyteid) {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT ayt.code as code,ayt.name as name,ayt.report_name as report_name,ayt.depart_id as depart_id,ayt.sample_id as sample_id,ayt.container_id as container_id,ayt.method_id as method_id,ayt.uom_id as uom_id,ayt.	loinc_id as loinc_id,ayt.lonic_code as lonic_code,ayt.lonic_desc as lonic_desc,ayt.input_pattern as input_pattern,ayt.result_type as result_type,ayt.decimal_digit as decimal_digit,ayt.active as active,asy.equipment_id as dmequipment,asy.assay_code as dmassaycode,asy.tenant_id as dmtenant,asy.branch_id as dmfacility,asy.method as dmmethod,asy.uom as dmuom,asy.uploadable as dmuploadable,asy.downlodable as dmdownlodable FROM analytes ayt,analyte_assay_mapping asy WHERE ayt.id=?`
    const sqlResult = await dbPool.query(sqlQuery, [analyteid])
    if (sqlResult && sqlResult.length > 0) {
      console.log("containers details = " + JSON.stringify(sqlResult))
      return sqlResult[0]
    }
  } catch (err) {
    console.error("db.containers.get error = ", JSON.stringify(err))
  }
  return null
}
export async function rangeget(analyteid) {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT * from analyte_referance_range WHERE analyte_id=?`
    const sqlResult = await dbPool.query(sqlQuery, [analyteid])
    if (sqlResult && sqlResult.length > 0) {
      console.log("rangeget************************************ details = " + JSON.stringify(sqlResult))
      return sqlResult[0]
    }
  } catch (err) {
    console.error("db.rangeget.get error = ", JSON.stringify(err))
  }
  return null
}
