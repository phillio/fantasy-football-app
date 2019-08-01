import React from 'react';
import './Player.css';

function Player (props) {
    // console.log(props)
    const imgSrc = `${props.photoUrl}`
    // console.log(imgSrc)

    return (
        <div className="player-container">
            <img src={imgSrc} alt={`${props.name}`} />
            <h6>#{props.number}  {props.name}</h6>
        </div>
    )
}

export default Player