import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./modal.css";
import Modal from "@mui/material/Modal";
import { Button } from "../../PublicDashboard/components/Buttton/Button";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../../../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import { otpValidate, registration } from "../../../../action/userAction";
import { useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Modals() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [otp, setOtp] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userInformation);
  console.log(userLogin);
  useEffect(() => {
    if (userLogin?.userInfo) {
      handleClose();
      setState(false);
      navigate("/");
    } else {
      setError("Check your otp");
    }
  }, [navigate, userLogin?.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const google = () => {
  //   window.open("http://localhost:3008/auth/google", "_self");
  // };

  const onSubmit = async (data) => {
    setEmail(data);
    setState(true);
    dispatch(registration(data));
  };

  const handleclosex = () => {
    handleClose();
  };

  const otpSubmit = () => {
    const data = {
      otp,
      email,
    };
    dispatch(otpValidate(data));
  };

  return (
    <div>
      <Button buttonStyle="btn--outline" onClick={handleOpen}>
        Sign Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="crossx">
            <i className="fa-solid fa-xmark fa-xl" onClick={handleclosex} />
          </div>
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Sign up</h1>
              <div className="ui divider"></div>
              <div className="ui form">
                <div className="field">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                    })}
                  />
                  <span className="text-danger">
                    {errors.email?.type === "required" && (
                      <span>Email is required</span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span>Email must be properly fomatted</span>
                    )}
                  </span>
                </div>
                <button className="fluid ui button red" type="submit">
                  Submit
                </button>
              </div>
            </form>
            {/* <hr></hr>
            <div className="fluid ui button blue" onClick={google}>
              Google
            </div> */}
          </div>
        </Box>
      </Modal>

      <Dialog
        aria-labelledby="customized-dialog-title"
        open={state}
        TransitionComponent={Transition}
      >
        <DialogContent dividers>
          <div
            style={{
              textAlign: "center",
              color: "white",
              background: "white",
              padding: "50px 40px",
              borderRadius: "10px",
            }}
          >
            <h1 style={{ color: "black" }}>Enter your OTP</h1>
            <TextField
              id="filled-basic"
              label="OTP"
              variant="filled"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          {error && <span style={{ color: "red" }}>{error}</span>}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            variant="contained"
            color="secondary"
            onClick={otpSubmit}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer />
    </div>
  );
}

export default Modals;
