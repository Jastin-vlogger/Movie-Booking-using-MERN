import React, { useState } from "react";
import "./addmovies.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "../../../../axios/axios";
import UploadWidget from "./UploadWidget";

function AddMoviess() {
  const navigate = useNavigate();
  const [url, updateUrl] = useState();
  const [error, updateError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = async (data) => {
    console.log(data);
    data.posterImage = url;
    axios
      .post("/api/admin/movieinfo", data)
      .then(async (response) => {
        console.log(response.data._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleOnUpload(error, result, widget) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    console.log("result................", result);
    updateUrl(result?.info?.secure_url);
  }

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
                  {errors.title?.type === "required" && (
                    <span>name is required</span>
                  )}
                  {errors.title?.type === "minLength" && (
                    <span>name must morethan or equal to 4 Character</span>
                  )}
                  {errors.title?.type === "maxLength" && (
                    <span>name must less than 20 Character</span>
                  )}
                  {errors.title?.type === "pattern" && (
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
                  {errors.description?.type === "required" && (
                    <span>address is required</span>
                  )}
                  {errors.description?.type === "minLength" && (
                    <span>address must morethan or equal to 4 Character</span>
                  )}
                  {errors.description?.type === "maxLength" && (
                    <span>address must less than 50 Character</span>
                  )}
                  {errors.description?.type === "pattern" && (
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
                  {errors.Genre?.type === "required" && (
                    <span>city is required</span>
                  )}
                  {errors.Genre?.type === "minLength" && (
                    <span>city must morethan or equal to 4 Character</span>
                  )}
                  {errors.Genre?.type === "maxLength" && (
                    <span>city must less than 20 Character</span>
                  )}
                  {errors.Genre?.type === "pattern" && (
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
                  {errors.director?.type === "required" && (
                    <span>state is required</span>
                  )}
                  {errors.director?.type === "minLength" && (
                    <span>state must morethan or equal to 4 Character</span>
                  )}
                  {errors.director?.type === "maxLength" && (
                    <span>state must less than 20 Character</span>
                  )}
                  {errors.director?.type === "pattern" && (
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
                  {errors.Duration?.type === "required" && (
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
                    // valueAsNumber:[true,'helooooooo']
                  })}
                />
                <span className="text-danger">
                  {errors.startDate?.type === "required" && (
                    <span>Date Number is required</span>
                  )}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <UploadWidget onUpload={handleOnUpload}>
                  {({ open }) => {
                    function handleOnClick(e) {
                      console.log("clicked");
                      e.preventDefault();
                      open();
                    }
                    return (
                      <button onClick={handleOnClick}>Upload an Image</button>
                    );
                  }}
                </UploadWidget>

                {error && <p>{error}</p>}
                  
                {/* <div className={{ width: "50px", height: "10px" }}>
                  {url && <img src={url} alt="Uploadedimage" />}
                </div> */}
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
                  {errors.YoutubeLink?.type === "required" && (
                    <span>Youtube Link is required</span>
                  )}
                  {errors.YoutubeLink?.type === "minLength" && (
                    <span>
                      Youtube Link must morethan or equal to 4 Character
                    </span>
                  )}
                  {errors.YoutubeLink?.type === "maxLength" && (
                    <span>Youtube Link must less than 50 Character</span>
                  )}
                  {errors.YoutubeLink?.type === "pattern" && (
                    <span>Youtube Link not have spaces</span>
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
