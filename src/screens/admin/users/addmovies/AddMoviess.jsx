import React from 'react'
import './addmovies.css'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddMoviess() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
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
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  {...register("name", {
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
                <label>Addess</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("address", {
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
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  {...register("city", {
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
                <label>State</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  {...register("state", {
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
                <p className="text-danger">
                  {errors.email?.type === "required" && (
                    <span>Email is required</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span>Enter valied Email</span>
                  )}
                </p>
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <label>Phone No</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone No"
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
                  {/* {errors.name?.type === 'pattern' && (
                    <span>Should not have spaces</span>
                  )} */}
                  {/* {errors.phone?.type === "valueAsNumber" && (
                        <span>Enter Only Number</span>
                      )} */}
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
  )
}

export default AddMoviess
