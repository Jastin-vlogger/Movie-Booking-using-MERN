import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

function Trailer() {
  const videoRef = useRef(null);
  const movieInfo = useSelector((state) => state.movieInfo);
  const { movieInformation } = movieInfo;

  useEffect(() => {
    console.log(movieInformation.YoutubeLink);
    const videoId = movieInformation.YoutubeLink.split("v=")[1];
    console.log(videoId);
    videoRef.current.src = `https://www.youtube.com/embed/${videoId}`;
  }, []);

  return (
    <div style={{marginTop:'100px',display:'flex',justifyContent:'center'}}>
      <iframe
        ref={videoRef}
        width="70%"
        height="515"
        margin="30px"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      ></iframe>
    </div>
  );
}

export default Trailer;
