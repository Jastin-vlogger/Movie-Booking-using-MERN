import React from "react";
import "./addmovies.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import useMutation from "../../../../hooks/useMutation";
import axios from "../../../../axios/axios";

const ErrorText = ({ children, ...props }) => (
  <Typography sx={{ color: "error.main" }} {...props}>
    {children}
  </Typography>
);

const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
const URL = "/api/admin/movieImage/upload";

function AddMoviess() {
  const [error, setError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    mutate: uploadImage,
    isLoading: uploading,
    error: uploadError,
  } = useMutation({ url: URL });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.file[0]);
    axios
      .post("/api/admin/movieinfo", data)
      .then(async(response) => {
        console.log(response.data._id);
        let id = response.data._id
        await axios.post(`/api/admin/movieImage/upload/${id}`,formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then(({data})=>{
          console.log(data)
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleUpload = async (e,id) => {
  //   if (!isSubmit) return;
  //   else {
  //     console.log("heelo im onchagne");
  //     const file = e.target.files[0];
  //     console.log(file);
  //     if (!validFileTypes.find((type) => type === file.type)) {
  //       setError("File must be in JPG/PNG format");
  //       return;
  //     }

  //     const form = new FormData();
  //     form.append("image", file);
  //     await uploadImage(form);
  //   }
  // };

  return (
    <>
      <div className="wrapper rounded bg-white">
        <div className="h3">Registration Form</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          enctype="multipart/form-data"
          id="form"
        >
          <div className="form">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  {...register("title", {
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
              <div className="col-md-6 mt-md-0 mt-3">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  {...register("description", {
                    required: true,
                    minLength: 4,
                    maxLength: 50,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}
                />
                <span className="text-danger">
                  {errors.address?.type === "required" && (
                    <span>address is required</span>
                  )}
                  {errors.address?.type === "minLength" && (
                    <span>address must morethan or equal to 4 Character</span>
                  )}
                  {errors.address?.type === "maxLength" && (
                    <span>address must less than 50 Character</span>
                  )}
                  {errors.address?.type === "pattern" && (
                    <span>Should not have spaces</span>
                  )}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <label>Genre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Genre"
                  {...register("Genre", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}
                />
                <span className="text-danger">
                  {errors.city?.type === "required" && (
                    <span>city is required</span>
                  )}
                  {errors.city?.type === "minLength" && (
                    <span>city must morethan or equal to 4 Character</span>
                  )}
                  {errors.city?.type === "maxLength" && (
                    <span>city must less than 20 Character</span>
                  )}
                  {errors.city?.type === "pattern" && (
                    <span>Should not have spaces</span>
                  )}
                </span>
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <label>Director</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Director"
                  {...register("director", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}
                />
                <span className="text-danger">
                  {errors.state?.type === "required" && (
                    <span>state is required</span>
                  )}
                  {errors.state?.type === "minLength" && (
                    <span>state must morethan or equal to 4 Character</span>
                  )}
                  {errors.state?.type === "maxLength" && (
                    <span>state must less than 20 Character</span>
                  )}
                  {errors.state?.type === "pattern" && (
                    <span>Should not have spaces</span>
                  )}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <label>Duration</label>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Duration"
                  {...register("Duration", {
                    required: true,
                  })}
                />
                <p className="text-danger">
                  {errors.email?.type === "required" && (
                    <span>Duration is required</span>
                  )}
                </p>
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <label>Start date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Start date"
                  {...register("startDate", {
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
            </div>
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <input
                  type="file"
                  className="form-control"
                  {...register("file")}
                />
                <span className="text-danger"></span>
                {/* <input
                  id="imageInput"
                  type="file"
                  hidden
                  onChange={handleUpload}
                />
                <Button
                  as="label"
                  htmlFor="imageInput"
                  colorScheme="blue"
                  variant="contained"
                  cursor="pointer"
                  isLoading={uploading}
                >
                  Upload
                </Button> */}
                {error && <ErrorText>{error}</ErrorText>}
                {uploadError && <ErrorText>{uploadError}</ErrorText>}
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <label>youtube link</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Youtube trailer Link"
                  {...register("YoutubeLink", {
                    required: true,
                    minLength: 4,
                    maxLength: 50,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}
                />
                <span className="text-danger">
                  {errors.address?.type === "required" && (
                    <span>address is required</span>
                  )}
                  {errors.address?.type === "minLength" && (
                    <span>address must morethan or equal to 4 Character</span>
                  )}
                  {errors.address?.type === "maxLength" && (
                    <span>address must less than 50 Character</span>
                  )}
                  {errors.address?.type === "pattern" && (
                    <span>Should not have spaces</span>
                  )}
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-center pt-4">
              <button className="btn btn-success" style={{ width: "80px" }}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddMoviess;
