import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import InputLabel from "@mui/material/InputLabel";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import axios from "../../../axios/axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

function AddShows() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [cookies] = useCookies([]);
  const [name, setname] = useState();
  const [price, setprice] = useState();
  const [status, setstatus] = useState();
  const [screen, setscreen] = useState([]);
  const [sname, setsname] = useState();
  const [time, setTime] = useState();
  console.log(screen);
  const [values, setValues] = useState(
    [1, 2, 3].map((number) =>
      new DateObject().set({
        day: number,
        hour: number,
        minute: number,
        second: number,
      })
    )
  );
  console.log(values);
  const [startDate, setStartDate] = React.useState(dayjs(new Date()));
  const [endDate, setEndDate] = React.useState(dayjs(new Date()));

  const handleStrateDate = (newValue) => {
    setStartDate(newValue);
  };
  const handleEndDate = (newValue) => {
    setEndDate(newValue);
  };
  const token = cookies.TheaterToken;
  const decoded = jwt_decode(token);
  const id = decoded.id;
  const handleChange = (event) => {
    setname(event.target.value);
  };
  const handlePrice = (event) => {
    setprice(event.target.value);
  };
  const handleStatus = (event) => {
    setstatus(event.target.value);
  };
  const handleScreen = (event) => {
    setsname(event.target.value);
  };
  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get("/api/users/movieInfo")
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`/api/theater/screenInfo/${id}`)
      .then(({ data }) => {
        setscreen(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = async (data) => {
    // const token = cookies.jwt;
    // const decoded = await jwt_decode(token);
    // setCurrentUser(decoded.id);
    console.log("data", data);
    data.theaterId = id;
    data.movieName = name;
    data.price = price;
    data.status = status;
    data.screen = sname;
   let time2 =  time.split(',')
    data.time = time2;

    data.id = id;
    data.startDate = startDate;
    data.endDate = endDate;
    await axios.post("/api/theater/addShow", data);
    navigate("/theater/");
  };

  const today = new Date();

  return (
    <ThemeProvider>
      <Container component="main" maxWidth="xm" color="secondary">
        {/* <CssBaseline /> */}
        <Typography component="h1" variant="h5">
          Add Shows
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box noValidate>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} lg={6}>
                <FormControl variant="filled" color="secondary" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Movie Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={name}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {data.map((moviename) => (
                      <MenuItem value={moviename._id}>
                        {moviename.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} lg={6}>
                <FormControl variant="filled" color="secondary" fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                        minDate={today}
                        label="Date desktop"
                        inputFormat="MM/DD/YYYY"
                        value={startDate}
                        onChange={handleStrateDate}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControl variant="filled" color="secondary" fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                        minDate={today}
                        label="Date desktop"
                        inputFormat="MM/DD/YYYY"
                        value={endDate}
                        onChange={handleEndDate}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <div>
                  <TextField
                    className="focus"
                    variant="filled"
                    label="Mention times in this formate 10:00 AM"
                    color="secondary"
                    fullWidth
                    margin="1"
                    onChange={handleTime}
                  />
                </div>
              </Grid>

              <Grid item xs={12} lg={6}>
                <FormControl variant="filled" color="secondary" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Status
                  </InputLabel>
                  <Select
                    labelId="Status"
                    id="demo-simple-select-filled"
                    value={status}
                    onChange={handleStatus}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"pending"}>Pending</MenuItem>
                    <MenuItem value={"canclled"}>canclled</MenuItem>
                    <MenuItem value={"open"}>Open</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={6}>
                {/* <FormControl variant="filled" color="secondary" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Screen
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={name}
                    onChange={handleScreen}
                  >
                    {screen.map(
                    (time) => (
                      <MenuItem key={`time-${time}`} value={time}>
                        {time.ScreenName}
                      </MenuItem>
                    )
                  )}
                  </Select>
                </FormControl> */}
                <Grid item xs={12} lg={6}>
                  <FormControl variant="filled" color="secondary" fullWidth>
                    <InputLabel id="demo-simple-select-filled-label">
                      Screen Name
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={name}
                      onChange={handleScreen}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {screen?.map((moviename) => {
                        return (
                          <MenuItem value={moviename.screenName}>
                            {moviename.screenName}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControl variant="filled" color="secondary" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Price
                  </InputLabel>
                  <Select
                    labelId="Price"
                    id="demo-simple-select-filled"
                    value={price}
                    onChange={handlePrice}
                  >
                    <MenuItem value=" ">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"120"}>120</MenuItem>

                    <MenuItem value={"140"}>140</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: "red" }}
            >
              Submit
            </Button>
          </Box>
        </form>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
}

export default AddShows;
