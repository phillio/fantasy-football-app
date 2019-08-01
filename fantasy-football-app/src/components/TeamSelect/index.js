import React from 'react';
import './TeamSelect.css';
import Conference from '../Conference';

const teamsObjects = [
    {teamId: 1, teamName: 'Arizona Cardinals', division: 'west', conference: 'nfc'},
    {teamId: 2, teamName: 'Atlana Falcons', division: 'south', conference: 'nfc'},
    {teamId: 3, teamName: 'Baltimore Ravens', division: 'north', conference: 'afc'},
    {teamId: 4, teamName: 'Buffalo Bills', division: 'east', conference: 'afc'},
    
    {teamId: 5, teamName: 'Carolina Panthers', division: 'south', conference: 'nfc'},
    {teamId: 6, teamName: 'Chicago Bears', division: 'north', conference: 'nfc'},
    {teamId: 7, teamName: 'Cincinnati Bengals', division: 'north', conference: 'afc'},
    {teamId: 8, teamName: 'Cleveland Browns', division: 'north', conference: 'afc'},

    {teamId: 9, teamName: 'Dallas Cowboys', division: 'east', conference: 'nfc'},
    {teamId: 10, teamName: 'Denver Broncos', division: 'west', conference: 'afc'},
    {teamId: 11, teamName: 'Detroit Lions', division: 'north', conference: 'nfc'},
    {teamId: 12, teamName: 'Green Bay Packers', division: 'north', conference: 'nfc'},

    {teamId: 13, teamName: 'Houston Texans', division: 'south', conference: 'afc'},
    {teamId: 14, teamName: 'Indianapolis Colts', division: 'south', conference: 'afc'},
    {teamId: 15, teamName: 'Jacksonville Jaguars', division: 'south', conference: 'afc'},
    {teamId: 16, teamName: 'Kansas City Chiefs', division: 'west', conference: 'afc'},

    
    {teamId: 19, teamName: 'Miami Dolphins', division: 'east', conference: 'afc'},
    {teamId: 20, teamName: 'Minnesota Vikings', division: 'north', conference: 'nfc'},
    {teamId: 21, teamName: 'New England Patriots', division: 'east', conference: 'afc'},
    {teamId: 22, teamName: 'New Orleans Saints', division: 'south', conference: 'nfc'},
    
    {teamId: 23, teamName: 'New York Giants', division: 'east', conference: 'nfc'},
    {teamId: 24, teamName: 'New York Jets', division: 'east', conference: 'afc'},
    {teamId: 25, teamName: 'Oakland Raiders', division: 'west', conference: 'afc'},
    {teamId: 26, teamName: 'Philadelphia Eagles', division: 'east', conference: 'nfc'},

    {teamId: 28, teamName: 'Pittsburg Steelers', division: 'north', conference: 'afc'},
    {teamId: 29, teamName: 'Los Angeles Chargers', division: 'west', conference: 'afc'},
    {teamId: 30, teamName: 'Seattle Seahawks', division: 'west', conference: 'nfc'},
    {teamId: 31, teamName: 'San Francisco 49ers', division: 'west', conference: 'nfc'},

    {teamId: 32, teamName: 'Los Angeles Rams', division: 'west', conference: 'nfc'},
    {teamId: 33, teamName: 'Tampa Bay Buccaneers', division: 'south', conference: 'nfc'},
    {teamId: 34, teamName: 'Tennessee Titans', division: 'south', conference: 'afc'},
    {teamId: 35, teamName: 'Washington Redskins', division: 'east', conference: 'nfc'},
]

class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      nfc: [],
      afc: [],
      nfcName: ['nfc'],
      afcName: ['afc'],
      teamIndexChart: teamsObjects,
    };
  }

  componentDidMount = () => {
    this.filterByConference()
  }

  filterByConference = async () => {
    const nfc = await this.state.teamIndexChart.filter(conference => {
      if(conference.conference=== 'nfc'){
        return conference
      }
    })
    const afc = await this.state.teamIndexChart.filter(conference => {
      if(conference.conference=== 'afc'){
        return conference
      }
    })
    this.setState({nfc, afc})
    // this.setState({nfc: nfc, afc: afc})
  }

  render() {
    // console.log(this.state.nfc)

    // console.log(this.state.afc)
    // console.log(this.props.activePlayers)
    return(
      <div className="conference-holder">
        <Conference 
          nfcName={this.state.nfcName}
          nfc={this.state.nfc} 
          afcName={this.state.afcName}
          afc={this.state.afc} 
          activePlayers={this.props.activePlayers}
          />
      </div>
    )
  }
}

export default TeamSelect


{/* <div className="nfc-container">
          {this.state.nfcName.map(item => {
            return(
              <Conference 
                key={item.teamId}
                name={this.state.nfcName}
                teamIndexChart={this.state.teamIndexChart}
                activePlayers={this.state.activePlayers}
                division={item.division}
              />
            )
          })}
        </div>
        <div className="nfc-container">
          {this.state.afcName.map(item => {
            return(
              <Conference 
                key={item.teamId}
                name={this.state.afcName}
                teamIndexChart={this.state.teamIndexChart}
                activePlayers={this.state.activePlayers}
                division={item.division}
              />
            )
          })}
        </div> */}


// <div className="conference-container">
//         <div className="nfc-container">
//           <ul className="nfc-north">nfc-north
//             <li>team1</li>
//             <li>team2</li>
//             <li>team3</li>
//             <li>team4</li>
//           </ul>
//           <ul className="nfc-east">nfc-east
//             <li>team1</li>
//             <li>team2</li>
//             <li>team3</li>
//             <li>team4</li>
//           </ul>
//           <ul className="nfc-west">nfc-west
//             <li>team1</li>
//             <li>team2</li>
//             <li>team3</li>
//             <li>team4</li>
//           </ul>
//           <ul className="nfc-south">nfc-south
//             <li>team1</li>
//             <li>team2</li>
//             <li>team3</li>
//             <li>team4</li>
//           </ul>
//         </div>
//         <div className="afc-container">
//           <ul className="afc-north">afc-north
//             <li>team1</li>
//             <li>team2</li>
//             <li>team3</li>
//             <li>team4</li>
//           </ul>
//           <ul className="afc-east">afc-east
//             <li>team1</li>
//             <li>team2</li>
//             <li>team3</li>
//             <li>team4</li>
//           </ul>
//           <ul className="afc-west">afc-west
//             <li>team1</li>
//             <li>team2</li>
//             <li>team3</li>
//             <li>team4</li>
//           </ul>
//           <ul className="afc-south">afc-south
//             <li>team1</li>
//             <li>team2</li>
//             <li>team3</li>
//             <li>team4</li>
//           </ul>
//         </div>
//       </div>
        