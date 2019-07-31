import React from 'react';
import Division from '../Division';
import './Conference.css';

function Conference(props) {
    const division = [
      {divName:"north"},
      {divName:"east"},
      {divName:"west"},
      {divName:"south"}
    ]
    return (
        <div className={props.conference}>
            <h1>{props.conference}</h1>
            {division.map((item, index)=>{
                return(
                    <Division 
                        key={index}
                        divName={item.divName}
                        conference={props.conference}
                        activePlayers={props.activePlayers}
                        teamIndexChart={props.teamIndexChart}
                        />
                )
            })}
        </div>
    )
}

export default Conference