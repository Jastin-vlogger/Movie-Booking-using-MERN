import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTheaterScreen } from "../../../action/theaterAction";
import Loading from "../../../components/Loading/Loading";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";

function AddScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theaterScreen = useSelector((state) => state.theaterScreenAdd);
  const { loading, screenAdded, error } = theaterScreen;
  const [cookies] = useCookies([]);
  // useEffect(() => {
  //   if (screenAdded) {
  //     navigate("/theater");
  //   }
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("helooooo", data);
    const token = cookies.TheaterToken;
    const decoded = await jwt_decode(token);
    data.theaterId = decoded.id;
    console.log(data);
     dispatch(addTheaterScreen(data))
    navigate("/theater");
  };
  return (
    <>
      {loading ? <Loading /> : []}
      
        <div className="wrapper rounded bg-white">
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
                    {...register("ScreenName", {
                      required: true,
                    })}
                  />
                  <span className="text-danger">
                    {errors.title?.type === "required" && (
                      <span>name is required</span>
                    )}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label>Genre</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Row"
                    {...register("Row", {
                      required: true,
                    })}
                  />
                  <span className="text-danger">
                    {errors.Genre?.type === "required" && (
                      <span>city is required</span>
                    )}
                  </span>
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label>Director</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Column"
                    {...register("Column", {
                      required: true,
                    })}
                  />
                  <span className="text-danger">
                    {errors.director?.type === "required" && (
                      <span>state is required</span>
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

export default AddScreen;
