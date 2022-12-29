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

function AddShows() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [cookies] = useCookies([]);
  const [movie, setmovie] = useState([]);
  const [name, setname] = useState();
  const [price, setprice] = useState();
  const [status, setstatus] = useState();
  const [screen, setscreen] = useState([]);
  const [sname, setsname] = useState();
  const [time, setTime] = useState();
  console.log(screen);
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
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`/api/theater/screenInfo/${id}`)
      .then(({ data }) => {
        console.log(data);
        setscreen(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = async (data) => {
    // const token = cookies.TheaterToken;
    // const decoded = jwt_decode(token);
    console.log("fffaaa", name);
    console.log("fffaaa", price);
    console.log("fffaaa", status);
    console.log("data", data);
    data.movieName = name;
    data.price = price;
    data.status = status;
    data.screen = sname;
    data.time = time;
    data.id = id;

    await axios.post("/api/theater/addShow", data);
    navigate("/theater/");
  };

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
                  <InputLabel id="demo-simple-select-filled-label">
                    Show timing
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={name}
                    onChange={handleTime}
                  >
                    {["10:00 am", "12:00 pm", "02:15 pm", "03:50 pm", " 06:00 pm", "09:00pm"].map(
                    (time) => (
                      <MenuItem key={`time-${time}`} value={time}>
                        {time}
                      </MenuItem>
                    )
                  )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={6} xs={12}>
                <div>
                  <TextField
                    className="focus"
                    variant="filled"
                    label="Busness Days"
                    color="secondary"
                    fullWidth
                    margin="1"
                    {...register("WeeklyDays", {
                      required: true,
                      minLength: 4,
                      maxLength: 20,
                      pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                    })}
                  />
                  <span className="text-danger">
                    {errors.name?.type === "required" && (
                      <span>name is required</span>
                    )}
                    {errors.name?.type === "minLength" && (
                      <span>name must morethan or equal to 4 Character</span>
                    )}
                    {errors.name?.type === "maxLength" && (
                      <span>name must less than 20 Character</span>
                    )}
                    {errors.name?.type === "pattern" && (
                      <span>Should not have spaces</span>
                    )}
                  </span>
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
                <FormControl variant="filled" color="secondary" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Screen
                  </InputLabel>
                  <Select
                    labelId="Screen"
                    id="demo-simple-select-filled"
                    value={sname}
                    onChange={handleScreen}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>

                    {screen.map((data) => (
                      <MenuItem value={data.screenName}>
                        {data.screenName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </form>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
}

export default AddShows;
