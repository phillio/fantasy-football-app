import React from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';

import TeamSelect from '../TeamSelect';
import Header from '../Header';
import Roster from '../Roster';
import Song from '../Song';

import './MainContainer.css';

const apiKey = process.env.REACT_APP_API_TOKEN

class MainContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            activePlayers: [],
            teams:[],
            clickValue: []
        }
    }

    componentDidMount = () => {
        this.fetchData()
    }

    handleClick = (e) => {
        let clickValue = e.target.value
        this.setState({clickValue})
        alert(clickValue)
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
                    number: player.Number,
                    status: player.Status,
                    positionCategory: player.PositionCategory,
                    position: player.Position,
                    team: player.Team,
                    teamId: player.TeamID,
                    photoUrl: player.PhotoUrl,
                    experience: player.Experience,
                    college: player.College,
                    height: player.Height,
                    weight: player.Weight,
                    fantasyDraftRank: player.AverageDraftPosition,
                    injuryStatus: player.InjuryStatus

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
            this.setState({activePlayers})

        } catch (error) {
            console.log('HERE IS YOUR ERROR', error)
            this.setState({ errMessage: error })            
        }
    }

    render() {
        return (
            <div className="main-container">
                <div className="header-container">
                    <Header />
                </div>
                <div className="pic-container">
                    <TeamSelect 
                        activePlayers={this.state.activePlayers}
                    />
                    <div className="roster-song-path-holder">
                        <Switch>
                            <Route exact path="/" component={Song}/>
                            <Route path="/:roster" render={Roster} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }


}

export default MainContainer



