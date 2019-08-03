import React from 'react';
import './Player.css';

function Player (props) {
    const imgSrc = `${props.photoUrl}`

    return (
        <div className="player-container">
            <img id="player-img" src={imgSrc} alt={`${props.name}`} />
            <h6>#{props.number}  {props.name}</h6>
        </div>
    )
}

export default Player