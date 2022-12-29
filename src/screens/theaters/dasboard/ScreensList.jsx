import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getScreenList } from "../../../action/theaterAction";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import { Button } from "../../../components/Public/PublicDashboard/components/Buttton/Button";
import { Link } from "react-router-dom";

function ScreensList() {
  const dispatch = useDispatch();
  const [cookies] = useCookies([]);
  const screns = useSelector((state) => state.screenList);
  const { loading, error, screens } = screns;
  useEffect(() => {
    fetchscreens();
  }, []);

  function fetchscreens() {
    const token = cookies.TheaterToken;
    const decoded = jwt_decode(token);
    dispatch(getScreenList(decoded.id));
  }

  return (
    <div>

      <Button>
        <Link to={"/theater/addShows"}> Add shows </Link>
      </Button>
      {screens?.map((val) => {
        return <p>{val.screenName}</p>;
      })}
    </div>
  );
}

export default ScreensList;
