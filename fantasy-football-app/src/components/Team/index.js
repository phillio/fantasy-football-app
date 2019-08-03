import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

function Team(props) {
    let rosterTeam
    let findRoster = props.activePlayers.filter(player => {
        if (player.teamId === props.teamId) {
            return player
        }
    })
    rosterTeam = findRoster
    return (
        <Link 
            to={{pathname:`/${props.teamId}`, 
            state:{
                rosterTeam: rosterTeam,
                teamId: props.teamId,
                teamName: props.teamName,
                activePlayers: props.activePlayers
                }}} 
                >
        <li className="team-list">{props.teamName}</li></Link>
    )
}

export default Team