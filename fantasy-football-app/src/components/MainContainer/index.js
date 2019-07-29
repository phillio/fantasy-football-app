// import React from 'react';
// import axios from 'axios';
// // import convert from 'xml-js';
// // import { fetchData } from '../../services/apiService';

// import Team from '../Team'

// // const apiKey = process.env.REACT_APP_API_TOKEN

// class MainContainer extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             teams: [
//                 "arizona_cardinals",
//                 "atlanta_falcons",
//                 "baltimore_ravens",
//                 "buffalo_bills",
//                 "carolina_panthers",
//                 "chicago_bears",
//                 "cincinnati_bengals",
//                 "cleveland_browns",
//                 "dallas_cowboys",
//                 "denver_broncos",
//                 "detroit_lions",
//                 "green_bay_packers",
//                 "houston_texans",
//                 "indianapolis_colts",
//                 "jacksonville_jaguars",
//                 "kansas_city_chiefs",
//                 "los_angeles_chargers",
//                 "los_angeles_rams",
//                 "miami_dolphins",
//                 "minnesota_vikings",
//                 "new_england_patriots",
//                 "new_orleans_saints",
//                 "new_york_giants",
//                 "new_york_jets",
//                 "oakland_raiders",
//                 "philadelphia_eagles",
//                 "pittsburgh_steelers",
//                 "san_francisco_49ers",
//                 "seattle_seahawks",
//                 "tampa_bay_buccaneers",
//                 "tennessee_titans",
//                 "washington_redskins"
//             ],
//             teamData: [],
//             name: '',


//         }
//     }

//     componentDidMount = async () => {
//         await this.fetchData()
//     }

//     fetchData = () => {
//       this.state.teams.map(async (team) =>  {
//             try {
//                 const url = 
//                     `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${team}`
//                 const data = await axios.get(url)
//                 console.log(data)
                // const {data: {player}} = data
                // this.setState({
                //     teamData: [...player],
                // })
//                 // console.log(this.state.teamData)
//             } catch (error) {
//                 this.setState({ errMessage: error })            
//             }
//             }
//         )



        
//     }
    
//     // render() {
//     //     // const teams = this.state.teams.map((team) => (
//     //     //     <Team
//     //     //         key={team}
//     //     //         team={team}
//     //     // ))
//     //     return (
//     //         <div><Team /></div>
//     //     )
//     // }

//     render() {
        
//         return (
//             <div>
//                 <h1>All Teams</h1>
//                 <p>{this.state.team}</p>
//             </div>
//         );
//     }


// }

// export default MainContainer














import React from 'react';
import axios from 'axios';
// import convert from 'xml-js';
// import { fetchData } from '../../services/apiService';

import Team from '../Team'

const apiKey = process.env.REACT_APP_API_TOKEN

class MainContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activePlayers: []
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
            const findTeam = activePlayers.filter(player => {
                if (player.teamId === 35)
                console.log(player.teamId, player.team)
            })

            // const teamId = {
            //     1: 'Arizona Cardinals',
            //     2: 'Atlana Falcons',
            //     3: 'Baltimore Ravens',
            //     4: 'Buffalo Bills',
            //     5: 'Carolina Panthers',
            //     6: 'Chicago Bears',
            //     7: 'Cincinnati Bengals',
            //     8: 'Cleveland Browns',
            //     9: 'Dallas Cowboys',
            //     10: 'Denver Broncos',
            //     11: 'Detroit Lions',
            //     12: 'Green Bay Packers',
            //     13: 'Houston Texans',
            //     14: 'Indianapolis Colts',
            //     15: 'Jacksonville Jaguars',
            //     16: 'Kansas City Chiefs',
            //     17: ,
            //     18: ,
            //     19: 'Miami Dolphins',
            //     20: 'Minnesota Vikings',
            //     21: 'New England Patriots',
            //     22: 'New Orleans Saints',
            //     23: 'New York Giants',
            //     24: 'New York Jets',
            //     25: 'Oakland Raiders',
            //     26: 'Philadelphia Eagles',
            //     27: ,
            //     28: 'Pittsburg Steelers',
            //     29: 'Los Angeles Chargers',
            //     30: 'Seattle Seahawks',
            //     31: 'San Francisco 49ers',
            //     32: 'Los Angeles Rams',
            //     33: 'Tampa Bay Buccaneers',
            //     34: 'Tennessee Titans',
            //     35: 'Washington Redskins',

            // 




            // }

            this.setState({activePlayers})
            // console.log(this.state.playerName)

            // console.log(data)
            //     this.setState({
            //         playerName: [...data],
            //     })
            // console.log(data)

        } catch (error) {
            console.log('YO ERROR DUDE')
            this.setState({ errMessage: error })            
        }
    }
    
    // render() {
    //     // const teams = this.state.teams.map((team) => (
    //     //     <Team
    //     //         key={team}
    //     //         team={team}
    //     // ))
    //     return (
    //         <div><Team /></div>
    //     )
    // }

    render() {
        
        return (
            <div>
                <h3>All Teams</h3>
                <p></p>
            </div>
        );
    }


}

export default MainContainer

