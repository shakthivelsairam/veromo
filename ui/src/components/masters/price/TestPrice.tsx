import React, { useEffect, useState } from "react";
import {
  Route,
  Link,
  Switch,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import {
  TableRow,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Autocomplete,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TestPrice(props: any) {
  const [validityStart, setValidityStart] = React.useState<Date | null>();
  const [validityEnd, setValidityEnd] = React.useState<Date | null>();
  const [price, setPrice] = React.useState<any>("");

  const scheduleDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [selectedScheduleDays, setSelectedScheduleDays] = React.useState<any>(
    new Array(scheduleDays.length).fill(false)
  );
  const [row, setRow] = React.useState<Object>({});
  const [selectedAllDays, setSelectedAllDays] = React.useState<boolean>(false);

  const handlePriceChange = async (price: any) => {
    setPrice(price);
    handleDataChange({ price: parseFloat(price) });
  };
  const handlePriceStartChange = async (start: any) => {
    setValidityStart(start);
    handleDataChange({ start: toTimestamp(start) });
  };
  const handlePriceEndChange = async (end: any) => {
    setValidityEnd(end);
    handleDataChange({ end: toTimestamp(end) });
  };
  const handleDataChange = (data: any) => {
    const priceData = Object.assign(row, data);
    props.handleDataChange(priceData);
  };

  const toTimestamp = (strDate: any) => {
    if (strDate) {
      const dt = strDate.getTime();
      return dt / 1000;
    }
    return strDate;
  };

  const handleAllScheduleDaysChange = () => {
    const updatedCheckedState = new Array(scheduleDays.length).fill(
      !selectedAllDays
    );
    setSelectedScheduleDays(updatedCheckedState);
    const scheduleDay: any = [];
    updatedCheckedState.forEach((item: boolean, index: number) => {
      if (item) {
        scheduleDay.push(scheduleDays[index]);
      }
    });
    handleDataChange({ schedule_days: scheduleDay });
    setSelectedAllDays(!selectedAllDays);
  };

  const handleScheduleDaysChange = (day: any, position: number) => {
    const updatedCheckedState = selectedScheduleDays.map(
      (item: boolean, index: number) => (index === position ? !item : item)
    );
    setSelectedScheduleDays(updatedCheckedState);
    const scheduleDay: any = [];
    let isSelectedAllDays = true;
    updatedCheckedState.forEach((item: boolean, index: number) => {
      if (item) {
        scheduleDay.push(scheduleDays[index]);
      } else {
        isSelectedAllDays = false;
      }
    });
    setSelectedAllDays(isSelectedAllDays);
    handleDataChange({ schedule_days: scheduleDay });
  };

  useEffect(() => {
    console.log("in useEffect");
    const existingPrice = props.row.price ? props.row.price : "";
    setPrice(existingPrice);
    setValidityStart(props.row.start);
    setValidityEnd(props.row.end);
    const finalScheduleDays = new Array(scheduleDays.length).fill(false);
    if (props.row.schedule_days) {
      let schedule_days = JSON.parse(props.row.schedule_days);
      schedule_days.forEach((item: string) => {
        let index = scheduleDays.findIndex((day: any) => day === item);
        finalScheduleDays[index] = true;
      });
    }
    const isSelectedAllDays = finalScheduleDays.filter((day) => day == true);
    if (isSelectedAllDays && isSelectedAllDays.length == 7) {
      setSelectedAllDays(true);
    } else {
      setSelectedAllDays(false);
    }
    setSelectedScheduleDays(finalScheduleDays);
    const rowData = {
      price: existingPrice,
      start: toTimestamp(new Date(props.row.start)),
      end: toTimestamp(new Date(props.row.end)),
      schedule_days: JSON.parse(props.row.schedule_days),
      rowId: props.rowId,
      id: props.row.id,
      identifying_id: props.row.test_id,
    };
    setRow(rowData);
  }, [props]);

  return (
    <React.Fragment>
      <StyledTableRow key={props.rowId}>
        <StyledTableCell>{props.row?.test_code}</StyledTableCell>
        <StyledTableCell>{props.row?.test_name}</StyledTableCell>
        <StyledTableCell>
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            size="small"
            variant="standard"
            style={{ width: 150, marginRight: 15 }}
            value={price}
            onChange={(e) => {
              handlePriceChange(e.target.value);
            }}
          />
        </StyledTableCell>
        <StyledTableCell>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(params) => <TextField {...params} />}
              value={validityStart}
              onChange={(newValue) => {
                handlePriceStartChange(newValue);
              }}
            />
          </LocalizationProvider>
        </StyledTableCell>
        <StyledTableCell>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(params) => <TextField {...params} />}
              value={validityEnd}
              onChange={(newValue) => {
                handlePriceEndChange(newValue);
              }}
            />
          </LocalizationProvider>
        </StyledTableCell>
        <StyledTableCell>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedAllDays}
                onChange={(e) => {
                  handleAllScheduleDaysChange();
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label={"All"}
          />
          {scheduleDays.map((day, index) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedScheduleDays[index]}
                  onChange={(e) => {
                    handleScheduleDaysChange(e.target.value, index);
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label={day}
            />
          ))}
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}
export default withRouter(TestPrice);
