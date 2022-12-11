
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import "./movie.css";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

const MovieCard = ({ movie }) => {
  return (
    // <Card sx={{ maxWidth: 250}}>
    //     <Box s>
    //         <CardMedia
    //             component="img"
    //             height="300"
    //             image={`https://react-movie-image-upload.s3.ap-northeast-1.amazonaws.com/${movie._id}.jpg`}
    //             alt={movie.title}/>
    //     </Box>

    //     <CardInfo>
    //         <Typography variant="h6" gutterBottom component="div">
    //             {movie.title}
    //         </Typography>

    //         <Typography mb={0} variant="subtitle1" gutterBottom component="div">
    //             {movie.startDate}
    //         </Typography>
    //     </CardInfo>
    // </Card>

    // <div className="section">

    //   <div className="card">
    //     <div className="cardImage" style={{width:'100%' , height:"10px"}}>
    //       <img src={`https://react-movie-image-upload.s3.ap-northeast-1.amazonaws.com/${movie._id}.jpg`} alt="logos" />
    //     </div>
    //     <div className="cardContent">
    //       <p className="title">{movie.title}</p>
    //       <p className="description">{movie._id}</p>
    //       <p className="description">{movie.Genre}</p>
    //     </div>
    //   </div>
    // </div>
    <div style={{ textAlign: "center" }}>
      <img
        className="multi__image"
        src={`https://react-movie-image-upload.s3.ap-northeast-1.amazonaws.com/${movie._id}.jpg`}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "20px", padding: "5px 0" }}>{movie.title}</p>
      <p style={{ fontSize: "16px", padding: "5px 0", color: "green" }}>
        {movie.Genre}
      </p>
  
    </div>
  );
};

// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     releaseDate: PropTypes.string,
//   }).isRequired,
// };

export default MovieCard;
