import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./styling/ShowReview.css";
import { Pagination } from "swiper";
import StarIcon from "@mui/icons-material/Star";
import { useSelector } from "react-redux";

function ShowReview({Review}) {
  return (
    <div className="mt-5">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiperr "
        >
          {Review?.map((item, index) => (
            <SwiperSlide className="bg-white">
              <div className="flex flex-col w-full">
                <div className="head flex justify-between text-black text-gray-800 w-full px-5">
                  <div className="user font-bold">User</div>
                  <div className="rating font-bold">
                    <StarIcon style={{ color: "red" }} />
                    <span className="ml-1">{item.rating}/100</span>
                  </div>
                </div>
                <div className=" px-5 mt-5 ">
                  <p className="text-black text-left">
                    {item.message}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}

export default ShowReview
