import React from 'react';
import './TeamSelect.css';

import TeamSelectButton from '../TeamSelectButton';

const teamsObjects = [
    {teamId: 1, teamName: 'Arizona Cardinals'},
    {teamId: 2, teamName: 'Atlana Falcons'},
    {teamId: 3, teamName: 'Baltimore Ravens'},
    {teamId: 4, teamName: 'Buffalo Bills'},
    {teamId: 5, teamName: 'Carolina Panthers'},
    {teamId: 6, teamName: 'Chicago Bears'},
    {teamId: 7, teamName: 'Cincinnati Bengals'},
    {teamId: 8, teamName: 'Cleveland Browns'},
    {teamId: 9, teamName: 'Dallas Cowboys'},
    {teamId: 10, teamName: 'Denver Broncos'},
    {teamId: 11, teamName: 'Detroit Lions'},
    {teamId: 12, teamName: 'Green Bay Packers'},
    {teamId: 13, teamName: 'Houston Texans'},
    {teamId: 14, teamName: 'Indianapolis Colts'},
    {teamId: 15, teamName: 'Jacksonville Jaguars'},
    {teamId: 16, teamName: 'Kansas City Chiefs'},
    {teamId: 19, teamName: 'Miami Dolphins'},
    {teamId: 20, teamName: 'Minnesota Vikings'},
    {teamId: 21, teamName: 'New England Patriots'},
    {teamId: 22, teamName: 'New Orleans Saints'},
    {teamId: 23, teamName: 'New York Giants'},
    {teamId: 24, teamName: 'New York Jets'},
    {teamId: 25, teamName: 'Oakland Raiders'},
    {teamId: 26, teamName: 'Philadelphia Eagles'},
    {teamId: 28, teamName: 'Pittsburg Steelers'},
    {teamId: 29, teamName: 'Los Angeles Chargers'},
    {teamId: 30, teamName: 'Seattle Seahawks'},
    {teamId: 31, teamName: 'San Francisco 49ers'},
    {teamId: 32, teamName: 'Los Angeles Rams'},
    {teamId: 33, teamName: 'Tampa Bay Buccaneers'},
    {teamId: 34, teamName: 'Tennessee Titans'},
    {teamId: 35, teamName: 'Washington Redskins'},
]

class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      teamName: '',
      teamNames: [],
      teamIndexChart: teamsObjects,
      activePlayers: props.activePlayers
    };
  }

  componentDidMount() {
    // this.renderTeamList()
    // this.renderTeamId()
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
        teamName: e.target.teamName,
    });
  }

  handleSubmit = e => {
    alert(this.state.value)
    e.preventDefault();
  }

  // renderTeamList = () => {
  //   const uniqueTeams = this.state.teamIndexChart.forEach(team => {
  //     return ({
  //       teamId, teamName
  //     } = uniqueTeams)
  //   })
  // }

  // renderTeamId = () => {
  //   let teams = this.state.teamIndexChart;
  //     return (
  //       <TeamSelectButton teamId={team.teamId} teamName={team.teamName} />
  //     )
  // }
  

  render() {
    return (
      <div className="team-select-wrap">
        <form onSubmit={this.handleSubmit}>
            <label>
                Team:
                <select value={this.state.teamName} onChange={this.handleChange}>
                {/* {this.renderTeamId()} */}
                {teamsObjects.map(team => {
                  return  <TeamSelectButton teamName={team.teamName} />
                })}
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
      </div>
        
    );
  }
}

export default TeamSelect;






// import React from 'react';
// import './TeamSelect.css';

// class TeamSelect extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       showTeams: false,
//     };
//   }
  
//   showTeams = e => {
//     e.preventDefault();
    
//     this.setState({ showTeams: true }, () => {
//       document.addEventListener('click', this.hideTeams);
//     });
//   }
  
//   hideTeams = e => {
    
//     if (!this.teamList.contains(e.target)) {
      
//       this.setState({ showTeams: false }, () => {
//         document.removeEventListener('click', this.hideTeams);
//       });  
      
//     }
//   }

//   render() {
//     return (
//       <div className="team-select-wrap">
//         <button onClick={this.showTeams}>
//           All NFL Teams
//         </button>
        
//         {
//           this.state.showTeams
//             ? (
//               <div
//                 className="teams-list"
//                 ref={(element) => {
//                   this.teamList = element;
//                 }}
//               >
//                 <button>Arizona Cardinals</button>
//                 <button>Atlanta Falcons</button>
//               </div>
//             )
//             : (
//               null
//             )
//         }
//       </div>
//     );
//   }
// }

// export default TeamSelect;