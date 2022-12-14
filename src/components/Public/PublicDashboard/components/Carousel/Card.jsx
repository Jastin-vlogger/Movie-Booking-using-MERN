import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useNavigate } from 'react-router';
import { movieInfo } from '../../../../../action/movieAction';
import styles from '../../../styling/Card.module.css';

function Card(movie) {
    console.log(movie)
    const dispatch = useDispatch()
    const navigate = useNavigate()
        const handleChange = (movie) => {
            console.log(movie)
            dispatch(movieInfo(movie))
            navigate(`/moviepage/${movie._id}`)
        }
    return (
        <div onClick={()=>handleChange(movie)} className={styles.card}> 
            <img src={`http://localhost:3008/movies/${movie._id}.jpg`} alt={movie.title} />
            <div className={styles.title}>{ movie.title }</div>
            <div className={styles.genre}>{movie.Genre}</div>
        </div>
    )
}

export default Card
