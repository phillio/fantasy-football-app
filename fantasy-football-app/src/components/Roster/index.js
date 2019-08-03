import React from 'react';
import Player from '../Player'
import './Roster.css';

function Roster (props) {
    const roster = props.location.state.rosterTeam;
    let posArray = [];
    function getUnique(arr, comp) {
        const unique = arr.map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e=>arr[e]);
        return unique
    }
    getUnique(roster, 'position').forEach(item => {
        posArray.push(item.position)
        return posArray
    })
    const lowerPosArray = []
    posArray.map(e=>{
        if (e!==null) {
            lowerPosArray.push(e.toLowerCase()) 
        }
    })
    return (
        <div className="roster-container">
            <h2>{props.location.state.teamName}</h2>
            <div className="qb-container">
                <div className="position-text-container">
                    <h3>Quarterbacks</h3>
                </div>
                <div className="position-player-container">
                {props.location.state.rosterTeam.map((item, index)=>{
                    if (item.position === 'QB') {
                        return(
                            <Player 
                                key={item.id}
                                rosterTeam={item}
                                name={item.name}
                                number={item.number}
                                status={item.status}
                                positionCategory={item.positionCategory}
                                position={item.position}
                                photoUrl={item.photoUrl}
                                experience={item.experience}
                                college={item.college}
                                height={item.height}
                                weight={item.weight}
                                fantasyDraftRank={item.fantasyDraftRank}
                                injuryStatus={item.injuryStatus}
                            />
                        )
                    }
                })}
                </div>
            </div>
            <div className="rb-container">
                <div className="position-text-container">
                    <h3>Running Backs</h3>
                </div>
                <div className="position-player-container">
                {props.location.state.rosterTeam.map((item, index)=>{
                    if (item.position === 'RB') {
                        return(
                            <Player 
                                rosterTeam={item}
                                name={item.name}
                                number={item.number}
                                status={item.status}
                                positionCategory={item.positionCategory}
                                position={item.position}
                                photoUrl={item.photoUrl}
                                experience={item.experience}
                                college={item.college}
                                height={item.height}
                                weight={item.weight}
                                fantasyDraftRank={item.fantasyDraftRank}
                                injuryStatus={item.injuryStatus}
                            />
                        )
                    }
                })}
                </div>
            </div>
            <div className="wr-container">
                <div className="position-text-container">
                    <h3>Wide Receivers</h3>
                </div>
                <div className="position-player-container">
                {props.location.state.rosterTeam.map((item, index)=>{
                    if (item.position === 'WR') {
                        return(
                            <Player 
                                rosterTeam={item}
                                name={item.name}
                                number={item.number}
                                status={item.status}
                                positionCategory={item.positionCategory}
                                position={item.position}
                                photoUrl={item.photoUrl}
                                experience={item.experience}
                                college={item.college}
                                height={item.height}
                                weight={item.weight}
                                fantasyDraftRank={item.fantasyDraftRank}
                                injuryStatus={item.injuryStatus}
                            />
                        )
                    }
                })}
                </div>
            </div>
            <div className="te-container">
                <div className="position-text-container">
                    <h3>Tight Ends</h3>
                </div>
                <div className="position-player-container">
                {props.location.state.rosterTeam.map((item, index)=>{
                    if (item.position === 'TE') {
                        return(
                            <Player 
                                rosterTeam={item}
                                name={item.name}
                                number={item.number}
                                status={item.status}
                                positionCategory={item.positionCategory}
                                position={item.position}
                                photoUrl={item.photoUrl}
                                experience={item.experience}
                                college={item.college}
                                height={item.height}
                                weight={item.weight}
                                fantasyDraftRank={item.fantasyDraftRank}
                                injuryStatus={item.injuryStatus}
                            />
                        )
                    }
                })}
                </div>
            </div>
            <div className="k-container">
                <div className="position-text-container">
                    <h3>Kickers</h3>
                </div>
                <div className="position-player-container">
                {props.location.state.rosterTeam.map((item, index)=>{
                    if (item.position === 'K') {
                        return(
                            <Player 
                                rosterTeam={item}
                                name={item.name}
                                number={item.number}
                                status={item.status}
                                positionCategory={item.positionCategory}
                                position={item.position}
                                photoUrl={item.photoUrl}
                                experience={item.experience}
                                college={item.college}
                                height={item.height}
                                weight={item.weight}
                                fantasyDraftRank={item.fantasyDraftRank}
                                injuryStatus={item.injuryStatus}
                            />
                        )
                    }
                })}
                </div>
            </div>
        </div>
    )
}

export default Roster