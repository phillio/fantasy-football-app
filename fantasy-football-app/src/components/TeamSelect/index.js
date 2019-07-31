import React from 'react';
import './TeamSelect.css';
import Conference from '../Conference';

const teamsObjects = [
    {teamId: 1, teamName: 'Arizona Cardinals', divsion: 'west', conference: 'nfc'},
    {teamId: 2, teamName: 'Atlana Falcons', divsion: 'south', conference: 'nfc'},
    {teamId: 3, teamName: 'Baltimore Ravens', divsion: 'north', conference: 'afc'},
    {teamId: 4, teamName: 'Buffalo Bills', divsion: 'east', conference: 'afc'},
    {teamId: 5, teamName: 'Carolina Panthers', divsion: 'south', conference: 'nfc'},
    {teamId: 6, teamName: 'Chicago Bears', divsion: 'north', conference: 'nfc'},
    {teamId: 7, teamName: 'Cincinnati Bengals', divsion: 'north', conference: 'afc'},
    {teamId: 8, teamName: 'Cleveland Browns', divsion: 'north', conference: 'afc'},
    {teamId: 9, teamName: 'Dallas Cowboys', divsion: 'east', conference: 'nfc'},
    {teamId: 10, teamName: 'Denver Broncos', divsion: 'west', conference: 'afc'},
    {teamId: 11, teamName: 'Detroit Lions', divsion: 'north', conference: 'nfc'},
    {teamId: 12, teamName: 'Green Bay Packers', divsion: 'north', conference: 'nfc'},
    {teamId: 13, teamName: 'Houston Texans', divsion: 'south', conference: 'afc'},
    {teamId: 14, teamName: 'Indianapolis Colts', divsion: 'south', conference: 'afc'},
    {teamId: 15, teamName: 'Jacksonville Jaguars', divsion: 'south', conference: 'afc'},
    {teamId: 16, teamName: 'Kansas City Chiefs', divsion: 'west', conference: 'nfc'},
    {teamId: 19, teamName: 'Miami Dolphins', divsion: 'east', conference: 'afc'},
    {teamId: 20, teamName: 'Minnesota Vikings', divsion: 'north', conference: 'nfc'},
    {teamId: 21, teamName: 'New England Patriots', divsion: 'east', conference: 'afc'},
    {teamId: 22, teamName: 'New Orleans Saints', divsion: 'south', conference: 'nfc'},
    {teamId: 23, teamName: 'New York Giants', divsion: 'east', conference: 'nfc'},
    {teamId: 24, teamName: 'New York Jets', divsion: 'east', conference: 'afc'},
    {teamId: 25, teamName: 'Oakland Raiders', divsion: 'west', conference: 'afc'},
    {teamId: 26, teamName: 'Philadelphia Eagles', divsion: 'east', conference: 'nfc'},
    {teamId: 28, teamName: 'Pittsburg Steelers', divsion: 'north', conference: 'afc'},
    {teamId: 29, teamName: 'Los Angeles Chargers', divsion: 'west', conference: 'afc'},
    {teamId: 30, teamName: 'Seattle Seahawks', divsion: 'west', conference: 'nfc'},
    {teamId: 31, teamName: 'San Francisco 49ers', divsion: 'west', conference: 'nfc'},
    {teamId: 32, teamName: 'Los Angeles Rams', divsion: 'west', conference: 'nfc'},
    {teamId: 33, teamName: 'Tampa Bay Buccaneers', divsion: 'south', conference: 'nfc'},
    {teamId: 34, teamName: 'Tennessee Titans', divsion: 'south', conference: 'afc'},
    {teamId: 35, teamName: 'Washington Redskins', divsion: 'east', conference: 'nfc'},
]

class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      conference: [
        {name:"nfc"},
        {name:"afc"}
      ],
      teamIndexChart: teamsObjects,
      activePlayers: props.activePlayers
    };
  }

  filterNFC = () => {
    if (this.state.teamIndexChart.)
  }

  render() {
    return(
      <div>
        {this.state.conference.map((item, index) => {
          return(
            <Conference 
              key={index}
              teamIndexChart={this.state.teamIndexChart}
              activePlayers={this.state.activePlayers}
              conference={item.name}
              division={this.state.division}
            />
          )
        })}
      </div>
    )
  }
}

export default TeamSelect



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
        