import React from 'react';
import { Link, Route } from 'react-router-dom';

function Team(props) {
    // console.log(props.teamId)

    let rosterTeam
    let findRoster = props.activePlayers.filter(player => {
        if (player.teamId === props.teamId) {
            return player
        }
    })
    rosterTeam = findRoster
    // console.log(rosterTeam)
    return (
        <Link 
            to={{pathname:`/${props.teamId}`, 
            state:{
                rosterTeam: rosterTeam,
                teamId: props.teamId,
                teamName: props.teamName,
                activePlayers: props.activePlayers
                }}} 
        ><li>{props.teamName}</li></Link>
    )
}

export default Team