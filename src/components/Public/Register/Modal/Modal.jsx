import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./modal.css";
import Modal from "@mui/material/Modal";
import { Button } from "../../PublicDashboard/components/Buttton/Button";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../../../../axios/axios";

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

function Modals() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCallbackResponse =(response)=>{
    console.log('encoded jwt' + response.credential)
  }



  const google = () => {
    window.open("http://localhost:3008/auth/google", "_self");
  };

  const onSubmit = async (data) => {
    console.log(data);
    axios.post("/api/users/signup", data).then((response) => {
      console.log(response.data);
      if (response.data.status) {
        handleClose();
        navigate("/");
      }
    });
  };

  const handleclosex = () => {
    handleClose();
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
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone number"
                    {...register("phone", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                      // valueAsNumber:[true,'helooooooo']
                    })}
                  />
                  <span className="text-danger">
                    {errors.phone?.type === "required" && (
                      <span>Phone Number is required</span>
                    )}
                    {errors.phone?.type === "minLength" && (
                      <span>Phone Number must have 10 digits</span>
                    )}
                    {errors.phone?.type === "maxLength" && (
                      <span>Phone Number must have 10 digits</span>
                    )}
                  </span>
                </div>
                <button className="fluid ui button red">Submit</button>
              </div>
            </form>
            <hr></hr>
            <div className="fluid ui button blue" onClick={google}> 
              Google
            </div>
            <ToastContainer></ToastContainer>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Modals;
