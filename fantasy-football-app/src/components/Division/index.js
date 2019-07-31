import React from 'react';
import './Division.css';
import Team from '../Team';

function Division(props) {
    // console.log(props.confName)
    // console.log(`${props.confName}-${props.name}`)
    // console.log(props.teamIndexChart)

    // const findDivisionalTeam2 = () => {
    //     let teamIndexChart = props.teamIndexChart
    //     const {teamId, teamName, division, conference} = teamIndexChart
    //     console.log(teamId)
    //     console.log(teamName)
    //     console.log(division)
    //     console.log(conference)
    // }
    // findDivisionalTeam2()


    let teamIndexChart = props.teamIndexChart
    return (
        <div className={`${props.conference}-${props.divName}`}>
            <h3>{props.divName}</h3>
            <ul>
                {teamIndexChart.map((item,index)=>{
                    console.log(item)
                        return (
                            <Team 
                            key={item.teamId}
                            divsion={item.divsion}
                            conference={item.conference}
                            // activePlayers={props.activePlayers}
                            // teamIndexChart={item.teamIndexChart}
                        />
                        )
                    }
                )}

                {/* {teamIndexChart.map((item,index)=>{
                    return(
                        <Team 
                            key={index}
                            name={props.name}
                            conference={props.conference}
                            activePlayers={props.activePlayers}
                            teamIndexChart={props.teamIndexChart}
                        />
                    )

                })} */}
            </ul>
        </div>
    )
}

export default Division