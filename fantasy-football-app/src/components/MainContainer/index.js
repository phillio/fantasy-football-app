import React from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

import TeamSelect from '../TeamSelect';
import Header from '../Header';

const apiKey = process.env.REACT_APP_API_TOKEN





class MainContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            activePlayers: [],
            teams:[]
        }
    }

    componentDidMount = () => {
        this.fetchData()
    }

    fetchData = async () => {
        try {
            const url = 
                `https://api.fantasydata.net/api/nfl/fantasy/json/Players?key=${apiKey}`
            const resp = await axios.get(url)
            const allPlayers = resp.data.map(player => {
                let data = {
                    id: player.PlayerID,
                    name: `${player.FirstName} ${player.LastName}`,
                    status: player.Status,
                    position: player.Position,
                    team: player.Team,
                    teamId: player.TeamID,
                    photoUrl: player.PhotoUrl,
                }
                return data
            })
            const inactivePlayers = allPlayers.filter(player => {
                if (player.status === "Inactive") {
                    return player
                }
            })
            const activePlayers = allPlayers.filter(player => {
                if (player.status === "Active") {
                    return player
                }
            })
            // const allTeams = activePlayers.map(player => {
            //     // console.log(player.name)
            //     let teams = {
            //         team: player.team
            //     }
            //     return teams
            // })

            // const uniqueTeams = new Set(allTeams)
            // const backToAllTeams = [...uniqueTeams]

            // console.log(backToAllTeams)
            this.setState({activePlayers})

        } catch (error) {
            console.log('HERE IS YOUR ERROR', error)
            this.setState({ errMessage: error })            
        }
    }

    render() {
        return (
            <div>
                <Header />
                <TeamSelect />
                {/* <Route path="/roster" render={Roster} /> */}
            </div>
        );
    }


}

export default MainContainer



