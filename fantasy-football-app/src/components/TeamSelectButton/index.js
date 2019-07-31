import React from 'react';
import { Route, Link } from 'react-router-dom';

function TeamSelectButton(props) {
    return(
        <option value={props.teamId}>{props.teamName}</option>
    )
}

export default TeamSelectButton