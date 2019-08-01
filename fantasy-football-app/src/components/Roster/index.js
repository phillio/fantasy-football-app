import React from 'react';
import Player from '../Player'
import './Roster.css';

function Roster (props) {

    // console.log(props.activePlayers)
    // if(props.location.state){
        // console.log(props.location.state.activePlayers)
        // console.log(roster)
    // }
    const roster = props.location.state.rosterTeam;
    let posArray = [];
    function getUnique(arr, comp) {
        const unique = arr.map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e=>arr[e]);
        return unique
    }
    // https://reactgo.com/removeduplicateobjects/
    // console.log(getUnique(roster, 'position'))
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
    // console.log(roster)
    // console.log(props.location.state.rosterTeam) 
    return (
        <div className="roster-container">
            <h2>{props.location.state.teamName}</h2>
            <div className="qb-container"><h3>Quarterbacks</h3>
                {props.location.state.rosterTeam.map((item, index)=>{
                    if (item.position === 'QB') {
                        return(
                            <Player 
                                key={item.id}
                                rosterTeam={item}
                                // activePlayers={this.props.location.state.activePlayers}
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
            <div className="rb-container"><h3>Running Backs</h3>
                {props.location.state.rosterTeam.map((item, index)=>{
                    if (item.position === 'RB') {
                        return(
                            <Player 
                                rosterTeam={item}
                                // activePlayers={this.props.location.state.activePlayers}
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
            <div className="wr-container"><h3>Wide Receivers</h3>
                {props.location.state.rosterTeam.map((item, index)=>{
                    if (item.position === 'WR') {
                        return(
                            <Player 
                                rosterTeam={item}
                                // activePlayers={this.props.location.state.activePlayers}
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
            <div className="te-container"><h3>Tight Ends</h3>
                {props.location.state.rosterTeam.map((item, index)=>{
                    if (item.position === 'TE') {
                        return(
                            <Player 
                                rosterTeam={item}
                                // activePlayers={this.props.location.state.activePlayers}
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
            <div className="k-container"><h3>Kickers</h3>
                {props.location.state.rosterTeam.map((item, index)=>{
                    if (item.position === 'K') {
                        return(
                            <Player 
                                rosterTeam={item}
                                // activePlayers={this.props.location.state.activePlayers}
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
    )
}

export default Roster



// find unique positions listed by the API

// function getUnique(arr, comp) {
//     const unique = arr.map(e => e[comp])
//     .map((e, i, final) => final.indexOf(e) === i && i)
//     .filter(e => arr[e]).map(e=>arr[e]);
//     return unique
// }
// // https://reactgo.com/removeduplicateobjects/
// console.log(getUnique(array, 'position'))





// // failed return
// <div className="roster-container">
//             <h3>{props.location.state.teamName}</h3>
//             <div className="qb-container">
//                 {/* {roster.filter(player => {
//                     if (player.position === 'QB') {
//                         return (
//                             <Player 
//                                 key={player.id}
//                                 name={player.name}
//                                 position={player.position}
//                             />
//                         )
//                     }
//                 })
//                 }
//                 {
//                         div.map((item,index)=>{
//                             return(
//                                 <Team 
//                                     key={item.teamId}
//                                     teamId={item.teamId}
//                                     teamName={item.teamName}
//                                     activePlayers={this.props.activePlayers}
//                                 />
//                             )
//                         }) */}
//                     }
//             </div>
//             <div className="rb-container">
//                 {}
//             </div>
//             <div className="wr-container">
//                 {}
//             </div>
//         </div>
