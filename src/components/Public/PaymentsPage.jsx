import React from "react";
// import { makeStyles } from '@mui/material/styles';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import FirstSection from "./PaymentsPage/FirstSection";
import styles from "./styling/PaymentsPage.module.css";
import SecondSection from "./PaymentsPage/SecondSection";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Link, useNavigate } from "react-router-dom";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { postBookingDetails } from "../../action/bookingAction";
// import { getBookingDetails, postBookingDetails } from '../Redux/booking/action';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Counter = () => (
  <CountdownCircleTimer
    isPlaying
    duration={600}
    colors={[
      ["#004777", 0.33],
      ["#F7B801", 0.33],
      ["#A30000", 0.33],
    ]}
  >
    {({ remainingTime }) =>
      Math.floor(remainingTime / 60) + " : " + (remainingTime % 60) + " Minutes"
    }
  </CountdownCircleTimer>
);

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     position: "relative",
//     background: "#1F2533",
//   },
//   title: {
//     marginLeft: theme.spacing(2),
//     flex: 1,
//   },
// }));

function PaymentsPage({ proceed }) {
  // const classes = useStyles();
  const [state, setState] = React.useState(false);
  // const city = useSelector((state) => state.app.city);
  // const booking_details = useSelector((state) => state.booking_details);
  const dispatch = useDispatch();

  const [counter, setCounter] = React.useState(true);
  const navigate = useNavigate();
  const booking_details = useSelector((state) => state.dateInformationSelected);
  const movieInfo = useSelector((state) => state.movieInfo);
  const user = useSelector((state) => state.userLogin);
  const selectDate = useSelector((state) => state.date);
  const { date } = selectDate;
  const { userInfo } = user;
  const { dateInfo, silver } = booking_details;
  const { movieInformation } = movieInfo;
  const handleClose = () => {
    setState(false);
  };

  const handlePayment = () => {
    setState(true);
    const dates = new Date();
    dates.setFullYear(date.year);
    dates.setMonth(date.month); // 0 represents January
    dates.setDate(date.date);

    const isoString = dates.toISOString();
    const dateOnly = isoString.substring(0, 10);
    const data = {
      cinemaId: dateInfo.theaterId,
      cinemaScreen: dateInfo.screen,
      startAt: dateInfo.time,
      ticketPrice: "120",
      seats: silver,
      total: booking_details.price,
      movieId: movieInformation._id,
      phone: userInfo.phone,
      showDate: dateOnly,
      bookedDate: new Date(),
    };
    dispatch(postBookingDetails(data)).then((res) => {
      if (res) {
        console.log("POSTED");
        // dispatch(getBookingDetails());
      }
    });
    setTimeout(() => {
      setCounter(false);
    }, 2000);
  };
  const handleMove = () => {
    navigate("/");
  };

  console.log(state);
  return (
    <div>
      <Dialog
        fullScreen
        open={proceed}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar style={{ position: "relative", background: "#1F2533" }}>
          <Toolbar>
            <Typography variant="h6" style={{ flex: 1 }}>
              <svg height="40" width="150">
                <Link to="/"></Link>
              </svg>
            </Typography>
          </Toolbar>
        </AppBar>

        <div className={styles.page}>
          <div className={styles.firstSection}>
            <FirstSection handlePayment={handlePayment} />
          </div>
          <div className={styles.secondSection}>
            <SecondSection />
            <div
              style={{
                width: "80px",
                margin: "20px auto",
                fontSize: "20px",
                wordBreak: "break-word",
              }}
            >
              <Counter />
            </div>
          </div>
        </div>
      </Dialog>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={state}
        TransitionComponent={Transition}
      >
        {counter && (
          <DialogTitle
            id="customized-dialog-title"
            style={{ background: "#F84464", color: "white" }}
            onClose={handleClose}
          >
            Please hold tight we are getting your tickets ready.
          </DialogTitle>
        )}
        <DialogContent dividers>
          {/* <img style={{width:'100%'}} src="https://cdn.dribbble.com/users/108183/screenshots/8286157/media/4b152d30e3d9ae5c87e019e448582495.gif" alt=""/> */}
          {counter ? (
            <img
              style={{ width: "70%", margin: "0 15%" }}
              src="https://cdn.dribbble.com/users/801336/screenshots/10037782/media/d7f28f902699655bba0b75e34dd9eb44.gif"
              alt=""
            />
          ) : (
            <div
              style={{
                textAlign: "center",
                color: "white",
                background: "#F84464",
                padding: "100px 50px",
                borderRadius: "5px",
              }}
            >
              <h1>Congratulations!</h1>
              <div style={{ fontSize: "20px" }}>We have got your tickets</div>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleMove}
            variant="contained"
            color="secondary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PaymentsPage;
