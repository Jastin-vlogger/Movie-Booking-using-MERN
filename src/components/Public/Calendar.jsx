import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
// import { handleSelectDate } from "../../Redux/booking_details/actions";
import styles from "./styling/Cinemas.module.css";
import "react-multi-carousel/lib/styles.css";
import { handleSelectDate, selectDate } from "../../action/bookingAction";

function Calendar() {
  let currentDate = new Date().getDate();
  let currentDay = new Date().getDay();
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let [selectedDate, setSelectedDate] = useState(0);
  const dispatch = useDispatch();
  const movieInformation = useSelector(state => state.movie)
  console.log(movieInformation)
  const {movie,loading} = movieInformation
  console.log(movie)

  let dates = [];
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (let i = 0; i < 5; i++) {
    if (currentDate > 30) currentDate = 1;
    if (currentDay === 7) currentDay = 0;

    dates.push({
      date: currentDate,
      day: weekdays[currentDay],
      month: currentMonth,
      year: currentYear,
    });
    currentDate++;
    currentDay++;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleDateChange = (index) => {
    setSelectedDate(index);
  };
  return (
    <div style={{ width: 250 }}>
      <Carousel
        className={styles.arrow}
        responsive={responsive}
        removeArrowOnDeviceType={["mobile"]}
      >
        {dates?.map((item, index) => (
          <div
            className={styles.dateItem}
            onClick={() => {
              handleDateChange(index);
              dispatch(
                handleSelectDate(
                  dates[index].date,
                  dates[index].day,
                  movie?._doc?._id
                )
              );
              dispatch(selectDate(dates[index].date, dates[index].day, dates[index].month, dates[index].year));
            }}
            style={
              index === selectedDate
                ? { backgroundColor: "#F84464", color: "white" }
                : { backgroundColor: "transparent" }
            }
            key={item.date}
          >
            <h2
              style={
                index === selectedDate ? { color: "white" } : { color: "black" }
              }
            >
              {item.date}
            </h2>
            <p>{item.day.slice(0, 3)}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Calendar;
