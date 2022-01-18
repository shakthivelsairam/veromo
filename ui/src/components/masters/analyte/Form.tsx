import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Tabs, Tab, Box, Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete,Table,TableBody,TableContainer,TableHead,TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import custstyle  from  "../../style.module.css";
import * as api from "../../../utils/api"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function AnalyteMasterForm(props: any){
  const [dept, setDept] = React.useState('0');
  const [value, setValue] = React.useState(0);
  const [ageType, setAgeType] = React.useState(0);
  const [ageRange, setAgeRange] = React.useState(0);
    const [valueType, setValueType] = React.useState(0);


  // New changes starts
  const [rowid,setRowid] = useState(0);	
    // Look ups data
    
  const [ optdepart, setOptdepart ] = React.useState([{label:"",value:0}]);
  const [ optsample, setOptsample ] = React.useState([{label:"",value:0}]);
  const [ optcontainer, setOptcontainer ] = React.useState([{label:"",value:0}]);
  const [ optmethod, setOptmethod ] = React.useState([{label:"",value:0}]);
  const [ optuom, setOptuom ] = React.useState([{label:"",value:0}]);
  const [ optlonic, setOptlonic ] = React.useState([{label:"",value:0}]);
  const [ optinputpattern, setOptinputpattern ] = React.useState([{label:"",value:0}]);
  const [ optresulttype, setOptresulttype ] = React.useState([{label:"",value:0}]);

  const [ optrefrange, setOptrefrange ] = React.useState([{label:"",value:0}]);
  const [ optgender, setOptgender ] = React.useState([{label:"",value:0}]);
  const [ optAgeType, setOptAgeType ] = React.useState([{label:"",value:0}]);
  const [ optagerange, setOptagerange ] = React.useState([{label:"",value:0}]);
  const [ optvaluetype, setOptvaluetype ] = React.useState([{label:"",value:0}]);
  const [ optvaluerange, setOptvaluerange ] = React.useState([{label:"",value:0}]);
  const [ optdevice, setOptdevice ] = React.useState([{label:"",value:0}]);
  const [ optdevice1, setOptdevice1 ] = React.useState([{label:"",value:0}]);
  const [ opttenant, setOpttenant ] = React.useState([{label:"",value:0}]);
  const [ optfacility, setOptfacility ] = React.useState([{label:"",value:0}]);
  // General code
  const [analytecode, setAnalytecode] = React.useState('');
  const [orderName, setOrderName] = React.useState('');
  const [reportName, setReportName] = React.useState('');
  const [department,setDepartment] = useState({label:"",value:0});
  const [sltdepartment, setSltdepartment] = React.useState();
  const [sample,setSample] = useState({label:"",value:0});
  const [sltsample,setSltSample] = React.useState();
  const [container,setContainer] = useState({label:"",value:0});
  const [sltcontainer,setSltcontainer] = React.useState();
  const [method,setMethod] = useState({label:"",value:0});
  const [sltmethod,setSltmethod] = React.useState();
  const [uom,setUom] = useState({label:"",value:0});
  const [sltuom,setSltuom] = React.useState();
  const [lonic,setLonic] = useState({label:"",value:0});
  const [sltlonic,setSltlonic] = React.useState();
  const [lonicshort, setLonicshort] = React.useState('');
  const [lonicdesc, setLonicdesc] = React.useState('');

  const [inputpattern,setInputpattern] = useState({label:"",value:0});
  const [sltinputpattern,setSltinputpattern] = React.useState();
  const [resulttype,setResulttype] = useState({label:"",value:0});
  const [sltresulttype,setSltresulttype] = React.useState();
  const [active,setActive] = useState(true);	
  const [decimaldigits,setDecimaldigits]=useState('');

  // Tab 2 intialliation
  const [sltrefrange,setSltrefrange] = React.useState();
  const [refrange,setRefrange] = useState({label:"",value:0});
  const [gender,setGender] = useState({label:"",value:0});
  const [sltgender,setSltgender] = React.useState();
  const [agetype,setAgetype] = useState({label:"",value:0});
  const [sltagetype,setSltagetype] = React.useState();
  const [agerange,setAgerange] = useState({label:"",value:0});
  const [sltagerange,setSltagerange] = React.useState();
  const [valuetype,setValuetype] = useState({label:"",value:0});
  const [sltvaluetype,setSltvaluetype] = React.useState();
  const [valuerange,setValuerange] = useState({label:"",value:0});
  const [sltvaluerange,setSltvaluerange] = React.useState();
  const [val,setVal] = React.useState('');
  const [printval,setPrintval] = React.useState('');
  const [method1,setMethod1] = React.useState('');
  const [uom1,setUom1] = React.useState('');

  const [device,setDevice] = useState({label:"",value:0});
  const [sltdevice,setSltdevice] = React.useState();

   // Tab 3
  const [device1,setDevice1] = useState({label:"",value:0});
  const [sltdevice1,setSltdevice1] = React.useState();
  const [method2,setMethod2] = React.useState('');
  const [uom2,setUom2] = React.useState('');

  const [tenant,setTenant] = useState({label:"",value:0});
  const [slttenant,setSlttenant] = React.useState();
  const [facility,setFacility] = useState({label:"",value:0});
  const [sltfacility,setSltfacility] = React.useState();

  const [assaycode,setAssaycode] = useState('');	
  const [uploadflg,setUploadflg] = useState(false);	
  const [downloadflg,setDownloadflg] = useState(false);	
  
  

  const [data, setData] = useState([] as any)
  


  const [reftable,setReftable] = React.useState(0);
  const [rowcount,setRowcount] = React.useState(0);

  const handleSubmit = async(event:any ) => {
    
    event.preventDefault();

    
    var sampledata = {
      'rowid':rowid,
      'analytecode':analytecode,		
      'orderName':orderName,	
      'reportName':reportName,	
      'sltdepartment':sltdepartment,	
      'sltsample':sltsample,
      'sltcontainer':sltcontainer,	
      'sltmethod':sltmethod,		
      'sltuom':sltuom,
      'sltlonic':sltlonic,		
      'lonicshort':lonicshort,		
      'lonicdesc':lonicdesc,		
      'sltinputpattern':sltinputpattern,	
      'sltresulttype':sltresulttype,	
      'active':active,
      'decimaldigits':decimaldigits,
      'rangedata':data,
      'dmdeviceid':sltdevice1,
      'dmassaycode':assaycode,
      'dmtenantid':slttenant,
      'dmfacility':sltfacility,
      'dmmethod':method2,
      'dmuom':uom2,
      'dmupload':uploadflg,
      'dmdownload':downloadflg
    }
    const saveres = await api.setAnalyte(sampledata)
    console.log("API Response");
    console.log(saveres);
    // console.log("API Response Nds here");
    // if (sample.status===200)
    // {
    //   clearInputs(0)
    //   props.togglePage()
    // }
    clearInputs(0)
    props.togglePage()
  }
  const clearInputs = (flag) => {
    
  }
 
  const AddRefTable = () => {
  


    setRowcount(rowcount+1);
        const onerow = [{
          id:rowcount,
          'sltrefrange':sltrefrange,
          'refrange':refrange,		
          'gender':gender,		
          'sltgender':sltgender,		
          'agetype':agetype,			
          'sltagetype':sltagetype,		
          'agerange':agerange,		
          'sltagerange':sltagerange,		
          'valuetype':valuetype,		
          'sltvaluetype':sltvaluetype,	
          'valuerange':valuerange,		
          'sltvaluerange':sltvaluerange,	
          'valrangeval':val,
          'printval':printval,
          'device':device,			
          'sltdevice':sltdevice,
          'method1':method1,
          'uom1':uom1
        }]
        console.log("**********************************")
        console.log(onerow)
        console.log("**********************************")
       let newdata = data.concat(onerow)
       setData(newdata)
       setReftable(reftable+1);
       clearafteraddrow()
  }
  const clearafteraddrow = () => {
    setRefrange({label:"",value:0})			
    setGender({label:"",value:0})				
    setAgetype({label:"",value:0})				
    setAgerange({label:"",value:0})
    setValuetype({label:"",value:0})
    setValuerange({label:"",value:0})
    setDevice({label:"",value:0})
    setVal('')		
    setPrintval('')
    setMethod1('')
    setUom1('')						
  }
  useEffect(() => {
    (async () => {
      setData(data)      
    })()
  }, [reftable]) // Refresh the table as soon as we add data
  // New changes ends here
  const rangeTypeList = [
    { label: 'Reference Range', value: "1" },
    { label: 'Domain Range', value: "2" },
  ];
  const genderList = [
    { label: 'Male', value: "1" },
    { label: 'Female', value: "2" },
  ];
  
  
  const [associatedTestData, setAssociatedTestData] = useState([] as any)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    (async () => {
      clearInputs(true)
      await LoadLookups()
      console.log("loaded lookups")
      await LoadSingleAnalyte(props.editrow)
    })()
  }, [props.showForm])

  const LoadSingleAnalyte = async (rowid: number) => {
   
      if (rowid!==0)
      {
        setRowid(rowid);
        const anaytdta = await api.getSingleAnalyte(rowid)
        console.log(anaytdta);
        // //setData(facilitydata)
        setAnalytecode(anaytdta.code)			
        setOrderName(anaytdta.name)			
        setReportName(anaytdta.report_name)	
        setSltdepartment(anaytdta.depart_id)
        const sltDept = optdepart.find(v => v.value===anaytdta.depart_id)
        if (sltDept) 
        {
          setDepartment(sltDept)
        }		
        setSltSample(anaytdta.sample_id)
        const sample = optsample.find(v => v.value===anaytdta.sample_id)
        if (sample) 
        {
          setSample(sample)
        }	
        setSltcontainer(anaytdta.sample_id)
        const containerval = optcontainer.find(v => v.value===anaytdta.container_id)
        if (containerval) 
        {
          setContainer(containerval)
        }		
        setSltmethod(anaytdta.sample_id)
        const methodval = optmethod.find(v => v.value===anaytdta.method_id)
        if (methodval) 
        {
          setMethod(methodval)
        }	

        setSltuom(anaytdta.uom_id)
        const uomval = optuom.find(v => v.value===anaytdta.uom_id)
        if (uomval) 
        {
          setUom(uomval)
        }	
        setSltlonic(anaytdta.loinc_id)
        const loincval = optlonic.find(v => v.value===anaytdta.loinc_id)
        if (loincval) 
        {
          setLonic(loincval)
        }	
        setLonicshort(anaytdta.lonic_code)
        setLonicdesc(anaytdta.lonic_desc)

        setSltinputpattern(anaytdta.input_pattern)
        const inputpatternval = optinputpattern.find(v => v.value===anaytdta.input_pattern)
        if (inputpatternval) 
        {
          setInputpattern(inputpatternval)
        }
        setSltresulttype(anaytdta.result_type)
        const resulttypeval = optresulttype.find(v => v.value===anaytdta.result_type)
        if (resulttypeval) 
        {
          setResulttype(resulttypeval)
        }
        setDecimaldigits(anaytdta.decimal_digit)
        setActive(anaytdta.active)
         /// Tab 2 vaues
        setSltdevice1(anaytdta.dmequipment)
        const deviceid1 = optdevice1.find(v => v.value===anaytdta.dmequipment)
        if (deviceid1) 
        {
          setDevice1(deviceid1)
        }
        setAssaycode(anaytdta.dmassaycode)
        setSlttenant(anaytdta.dmtenant)
        const tenantval = opttenant.find(v => v.value===anaytdta.dmtenant)
        if (tenantval) 
        {
          setTenant(tenantval)
        }

        setSltfacility(anaytdta.dmfacility)
        const facilityval = optfacility.find(v => v.value===anaytdta.dmfacility)
        if (facilityval) 
        {
          setFacility(facilityval)
        }
        
        setMethod2(anaytdta.dmmethod);
        setUom2(anaytdta.dmuom);
        setUploadflg(anaytdta.dmuploadable);
        setDownloadflg(anaytdta.dmdownlodable);
       
      
        const refrangedata = await api.getAnalyteRefRangeData(rowid)
        console.log("**********************************************************");
        console.log("row id = "+rowid);
        console.log(refrangedata);
        console.log("**********************************************************");
        //setData(refrangedata)


       /// Yet to populate rage table
        //setData(refrangedata)
        /*
        refrangedata.forEach(element => {
          
          const onerow = [{
            id:rowid,
            'sltrefrange':element.referencerange,
            'refrange':element.referencerange,		
            'gender':element.referencerange,		
            'sltgender':element.referencerange,
            'agetype':element.referencerange,
            'sltagetype':element.referencerange,
            'agerange':element.referencerange,
            'sltagerange':element.referencerange,
            'valuetype':element.referencerange,
            'sltvaluetype':element.referencerange,
            'valuerange':element.referencerange,
            'sltvaluerange':element.referencerange,
            'valrangeval':element.referencerange,
            'printval':element.referencerange,
            'device':element.referencerange,
            'sltdevice':element.referencerange,
            'method1':element.referencerange,
            'uom1':element.referencerange
          }]
       
        let newdata = data.concat(onerow)
        setData(newdata)
      });
      */
        setReftable(reftable+1);

      }
     
  }

  const LoadLookups = async () => {
   
        // tenants
        const departs = await api.getLookupDepartment()
        setOptdepart(departs)
        // sample
        const samples = await api.getLookupSample()
        setOptsample(samples)
        
          // Container
          const containerlk = await api.getLookupContainer()
          setOptcontainer(containerlk)

           // Method
           const methodlk = await api.getLookupMethod()
           setOptmethod(methodlk)
          
           // UOM
           const uomlk = await api.getLookupUom()
           setOptuom(uomlk)
          
          // Lonic
          const loniclk = await api.getLookupLonicCode()
          setOptlonic(loniclk)
        
           // Input Patterns
           const inpptrnlk = await api.getLookupInputPatter()
           setOptinputpattern(inpptrnlk)

          // Result Data type
          const resuldtypelk = await api.getLookupResultDataTypes()
          setOptresulttype(resuldtypelk)

          // setOptrefrange
          const refrangelk = await api.getLookupRefRange()
          setOptrefrange(refrangelk)

          const genderlk = await api.getLookupMetaData('gender')
          setOptgender(genderlk)

          const agetypelk = await api.getLookupMetaData('AgeType')
          setOptAgeType(agetypelk)

          const agerangelk = await api.getLookupMetaData('Range')
          setOptagerange(agerangelk)
                  
           // Result Data type
           const valuetypelk = await api.getLookupResultDataTypes()
           setOptvaluetype(valuetypelk)

            // Result Data type
            const valueangelk = await api.getLookupMetaData('Range')
            setOptvaluerange(valueangelk)
            
            // device lookup
            const devicelk = await api.getLookupDevice()
           
            setOptdevice(devicelk)
            const devicelkref = await api.getLookupDevice()
           
            setOptdevice1(devicelkref)

            const tenants = await api.getLookupTenant()
            setOpttenant(tenants)

            const facilitylk = await api.getLookupFacility()
            setOptfacility(facilitylk)

            

         // Add any rows which is added previously
         //setRowcount(rowcount+1); // Set this number with number of existing rows
        const rows = [];
        setData(rows)
        const associatedTestRows = [
          {id:1, test_code: "T001", billing_name: 'CBC', report_name: "CBC", status: "Active" },
        ];
        setAssociatedTestData(associatedTestRows)
      
  }
  const handleDeptFormChangeAuto = (event:any, values:any) => {
    setDepartment({label:"",value:0})
    if (values!=null)
    {
      setSltdepartment(values.value)
      setDepartment(values);
    }
   }
   const handleSampleFormChangeAuto = (event:any, values:any) => {
    setSample({label:"",value:0})
    if (values!=null)
    {
      setSltSample(values.value)
      setSample(values);
    }
   }
   const handleContainerFormChangeAuto = (event:any, values:any) => {
    setContainer({label:"",value:0})
    if (values!=null)
    {
      setSltcontainer(values.value)
      setContainer(values);
    }
   }
   const handleMethodFormChangeAuto = (event:any, values:any) => {
    setMethod({label:"",value:0})
    if (values!=null)
    {
      setSltmethod(values.value)
      setMethod(values);
    }
   }
   const handleUomFormChangeAuto = (event:any, values:any) => {
    setUom({label:"",value:0})
    if (values!=null)
    {
      setSltuom(values.value)
      setUom(values);
    }
   }
   const handleLonicFormChangeAuto = (event:any, values:any) => {
    setLonic({label:"",value:0})
    setLonicshort('')
    setLonicdesc('')
    if (values!=null)
    {
      setSltlonic(values.value)
      setLonicshort(values.shortcode)
      setLonicdesc(values.longdesc)
      setLonic(values);
    }
   }
   const handleResultTypeFormChangeAuto = (event:any, values:any) => {
    setResulttype({label:"",value:0})
    if (values!=null)
    {
      setSltresulttype(values.value)
      setResulttype(values);
    }
   }
   const handleInputPatternFormChangeAuto = (event:any, values:any) => {
    setInputpattern({label:"",value:0})
    if (values!=null)
    {
      setSltinputpattern(values.value)
      setInputpattern(values);
    }
   }
   const handleRefRangeFormChangeAuto = (event:any, values:any) => {
    setRefrange({label:"",value:0})
    if (values!=null)
    {
      setSltrefrange(values.value)
      setRefrange(values);
    }
   }
   const handleGenderFormChangeAuto = (event:any, values:any) => {
    setGender({label:"",value:0})
    if (values!=null)
    {
      setSltgender(values.value)
      setGender(values);
    }
   }
   const handleAgeTypeFormChangeAuto = (event:any, values:any) => {
    setAgetype({label:"",value:0})
    if (values!=null)
    {
      setSltagetype(values.value)
      setAgetype(values);
    }
   }
   
   const handleAgeRangeFormChangeAuto = (event:any, values:any) => {
    setAgerange({label:"",value:0})
    if (values!=null)
    {
      setSltagerange(values.value)
      setAgerange(values);
    }
   }

   const handleValueTypeFormChangeAuto = (event:any, values:any) => {
    setValuetype({label:"",value:0})
    if (values!=null)
    {
      setSltvaluetype(values.value)
      setValuetype(values);
    }
   }

   const handleValueRangeFormChangeAuto = (event:any, values:any) => {
    setValuerange({label:"",value:0})
    if (values!=null)
    {
      setSltvaluerange(values.value)
      setValuerange(values);
    }
   }
   const handleDeviceFormChangeAuto = (event:any, values:any) => {
    setDevice({label:"",value:0})
    if (values!=null)
    {
      setSltdevice(values.value)
      setDevice(values);
    }
   }
   
   const handleDevice1FormChangeAuto = (event:any, values:any) => {
    setDevice1({label:"",value:0})
    if (values!=null)
    {
      setSltdevice1(values.value)
      setDevice1(values);
    }
   }
   const handleTenantFormChangeAuto = (event:any, values:any) => {
    setTenant({label:"",value:0})
    if (values!=null)
    {
      setSlttenant(values.value)
      setTenant(values);
    }
   }
   
   
   const handleFacilityFormChangeAuto = (event:any, values:any) => {
    setFacility({label:"",value:0})
    if (values!=null)
    {
      setSltfacility(values.value)
      setFacility(values);
    }
   }
   
   
   
   
   
   
   
   
  
    return(
        <React.Fragment>
        <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
              <DialogTitle className={custstyle.addeditmenu}>{props.editForm ? "Edit" : "Add"} Analyte</DialogTitle>
              <DialogContent dividers className={custstyle.popupheight}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Reference Range" {...a11yProps(1)} />
          <Tab label="Device Mapping" {...a11yProps(2)} />
          <Tab label="Associated Tests" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="analyteCode"
                  name="analyteCode"
                  label="Analyte Code"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setAnalytecode(e.target.value);  }}
                  value={analytecode}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="ordername"
                  name="ordername"
                  label="Order Name"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setOrderName(e.target.value);  }}
                  value={orderName}
                />
          </Grid>
          <Grid item xs={3}>
             <TextField
                  required
                  id="reportName"
                  name="reportName"
                  label="Report Name"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setReportName(e.target.value);  }}
                  value={reportName}
                />
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
               id="departmentid"
              options={optdepart}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Department" variant="standard" />}
              onChange={handleDeptFormChangeAuto}
              value={department}
              
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop:5}}>
          <Grid item xs={3}>
          <Autocomplete
               id="sampleid"
              options={optsample}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Sample" variant="standard" />}
              onChange={handleSampleFormChangeAuto}
              value={sample}
              
            />
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
               id="containerid"
              options={optcontainer}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Container" variant="standard" />}
              onChange={handleContainerFormChangeAuto}
              value={container}
              
            />
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
               id="methodid"
              options={optmethod}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Method" variant="standard" />}
              onChange={handleMethodFormChangeAuto}
              value={method}
              
            />
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="status" id="status" />}
              label="Active" checked={active}
              onClick={(e) => {setActive(!active); }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop:5}}>
          <Grid item xs={3}>
          <Autocomplete
               id="uomid"
              options={optuom}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="UOM" variant="standard" />}
              onChange={handleUomFormChangeAuto}
              value={uom}
              
            />
              
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
               id="lonicid"
              options={optlonic}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Lonic" variant="standard" />}
              onChange={handleLonicFormChangeAuto}
              value={lonic}
              
            />
              
          </Grid>
          <Grid item xs={3}>
          <TextField
                  id="nemonicShortCode"
                  name="nemonicShortCode"
                  label="Loinc Short Code"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setLonicshort(e.target.value);  }}
                  value={lonicshort}
                />
                
          </Grid>
          <Grid item xs={3}>
          <TextField
                  id="nemonicShortDesc"
                  name="nemonicShortDesc"
                  label="Loinc Short Description"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setLonicdesc(e.target.value);  }}
                  value={lonicdesc}
                />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop:5}}>
          <Grid item xs={3}>
         
               <Autocomplete
               id="inputpattern"
              options={optinputpattern}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Input Pattern" variant="standard" />}
              onChange={handleInputPatternFormChangeAuto}
              value={inputpattern}
              
            />
              
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
               id="resultdatatype"
              options={optresulttype}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Result data type" variant="standard" />}
              onChange={handleResultTypeFormChangeAuto}
              value={resulttype}
              
            />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  type={"number"}
                  id="decimalDigit"
                  name="deciamlDigit"
                  label="Decimal Digits"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setDecimaldigits(e.target.value);  }}
                  value={decimaldigits}
                />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={2}>
          <Grid item xs={3}>
          <Autocomplete
               id="referencerange"
              options={optrefrange}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Reference Range" variant="standard" />}
              onChange={handleRefRangeFormChangeAuto}
              value={refrange}
              
            />
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
               id="genderid"
              options={optgender}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Gender" variant="standard" />}
              onChange={handleGenderFormChangeAuto}
              value={gender}
              
            />
          </Grid>
          <Grid item xs={3}>
          
          <Autocomplete
               id="agetype"
              options={optAgeType}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Age Type" variant="standard" />}
              onChange={handleAgeTypeFormChangeAuto}
              value={agetype}
              
            />
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
               id="agerange"
              options={optagerange}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Age Range" variant="standard" />}
              onChange={handleAgeRangeFormChangeAuto}
              value={agerange}
              
            />
         
          </Grid>
          </Grid>
          <Grid container spacing={2} style={{marginTop: 5}}>
          <Grid item xs={3}>
          <Autocomplete
               id="valuetype"
              options={optvaluetype}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Value Type" variant="standard" />}
              onChange={handleValueTypeFormChangeAuto}
              value={valuetype}
              
            />
         
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
               id="valuerange"
              options={optvaluerange}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Value range" variant="standard" />}
              onChange={handleValueRangeFormChangeAuto}
              value={valuerange}
              
            />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="rangeValue"
                  name="rangeValue"
                  label="Value"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setVal(e.target.value);  }}
                  value={val}
                />
            </Grid>
            <Grid item xs={3}>
          <TextField
                  id="rangeValue"
                  name="rangeValue"
                  label="Printable Range"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setPrintval(e.target.value);  }}
                  value={printval}
                />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{marginTop: 5}}>
          <Grid item xs={3}>
          <Autocomplete
               id="deviceid"
              options={optdevice}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Device Id" variant="standard" />}
              onChange={handleDeviceFormChangeAuto}
              value={device}
              
            />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  id="method"
                  name="method"
                  label="Method"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setMethod1(e.target.value);  }}
                  value={method1}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  id="uom"
                  name="uom"
                  label="UOM"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setUom1(e.target.value);  }}
                  value={uom1}
                />
          </Grid>
          </Grid>
          <Grid container spacing={3} style={{marginTop: 5}}>
        <Grid item xs={5} style={{textAlign:"right"}}>
            <Button variant="contained" color="success" onClick={AddRefTable}>Add</Button>
          </Grid>
          <Grid item xs={5} style={{textAlign:"left"}}>
            <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}}>Cancel</Button>
          </Grid>
        </Grid>
          <Grid container spacing={2} style={{marginTop:5}}>
          <Grid item xs={12} style={{alignItems:"center"}}>
          <div style={{ width: '100%', marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Range</StyledTableCell>
                  <StyledTableCell>Gender</StyledTableCell>
                  <StyledTableCell>Age Type</StyledTableCell>
                  <StyledTableCell>Age Range</StyledTableCell>
                  <StyledTableCell>Value Type</StyledTableCell>
                  <StyledTableCell>Value Range</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {data?data.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>{row.refrange.label}</StyledTableCell>
                    <StyledTableCell>{row.gender.label}</StyledTableCell>
                    <StyledTableCell>{row.agetype.label}</StyledTableCell>
                    <StyledTableCell>{row.agerange.label}</StyledTableCell>
                    <StyledTableCell>{row.valuetype.label}</StyledTableCell>
                    <StyledTableCell>{row.valuerange.label}</StyledTableCell>
                    <StyledTableCell align="center"><Button size="small"><DeleteIcon fontSize="small"></DeleteIcon></Button></StyledTableCell>
                  </StyledTableRow>
                )) : "No records found!!!"}
              </TableBody>
            </Table>
          </div>
          </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container spacing={3} style={{marginTop:5}}>
          <Grid item xs={3}>
          <Autocomplete
               id="deviceid"
              options={optdevice1}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Device Id" variant="standard" />}
              onChange={handleDevice1FormChangeAuto}
              value={device1}
              
            />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="assaycode"
                  name="assaycode"
                  label="Assay Code"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setAssaycode(e.target.value);  }}
                  value={assaycode}
                />
            </Grid>
          <Grid item xs={3}>
            
          <Autocomplete
               id="tenantid"
              options={opttenant}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Tenant Id" variant="standard" />}
              onChange={handleTenantFormChangeAuto}
              value={tenant}
              
            />
            </Grid>
            <Grid item xs={3}>
            <Autocomplete
               id="facility"
              options={optfacility}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Facility" variant="standard" />}
              onChange={handleFacilityFormChangeAuto}
              value={facility}
              
            />
            </Grid>
            </Grid>
            <Grid container spacing={3} style={{marginTop:5}}>
            
            <Grid item xs={3}>
            <TextField
                  required
                  id="method2"
                  name="method2"
                  label="Method"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setMethod2(e.target.value);  }}
                  value={method2}
                />
                 </Grid>
                 <Grid item xs={3}>
            <TextField
                  required
                  id="uom2"
                  name="uom"
                  label="UOM"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                  onChange={(e) => {setUom2(e.target.value);  }}
                  value={uom2}
                />
                 </Grid>
                 <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="status" id="status" />}
              label="Uplodable ?" checked={uploadflg}
              onClick={(e) => {setUploadflg(!uploadflg); }}
            />
            </Grid>
            <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="status" id="status" />}
              label="Downlodable ?" checked={downloadflg}
              onClick={(e) => {setDownloadflg(!downloadflg); }}
            />
            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div style={{ width: '100%', marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Test Code</StyledTableCell>
                  <StyledTableCell>Order Name</StyledTableCell>
                  <StyledTableCell>Report Name</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {associatedTestData.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>
                      {row.test_code}
                    </StyledTableCell>
                    <StyledTableCell>{row.billing_name}</StyledTableCell>
                    <StyledTableCell>{row.report_name}</StyledTableCell>
                    <StyledTableCell>{row.status}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
      </TabPanel>
      </DialogContent>
              <DialogActions>
              <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={handleSubmit}>{props.editForm ? "Update" : "Save"}</Button>
              </DialogActions>
            </Dialog>
      </React.Fragment>
    )
}
export default withRouter(AnalyteMasterForm)