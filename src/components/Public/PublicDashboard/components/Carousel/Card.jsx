import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useNavigate } from 'react-router';
import { movieInfo, movieInfoStoreToState } from '../../../../../action/movieAction';
import styles from '../../../styling/Card.module.css';

function Card(movie) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
        const handleChange = (movie) => {
            navigate(`/moviepage/${movie._id}`)
        }
    return (
        <div onClick={()=>handleChange(movie)} className={styles.card}> 
            <img src={movie.posterImage} alt={movie.title} />
            <div className={styles.title}>{ movie.title }</div>
            <div className={styles.genre}>{movie.Genre}</div>
        </div>
    )
}

export default Card
