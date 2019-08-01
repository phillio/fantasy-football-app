import React from 'react';
import Division from '../Division';
import './Conference.css';

class Conference extends React.Component {
    render () {
        let nfc = this.props.nfc
        let afc = this.props.afc
        const divisions = ['north', 'east', 'west', 'south']

        const nfcNorth = this.props.nfc.filter(div => {
            if(div.division=== 'north'){
              return div
            }
          })
        const nfcEast = this.props.nfc.filter(div => {
        if(div.division=== 'east'){
            return div
        }
        })
        const nfcWest = this.props.nfc.filter(div => {
        if(div.division=== 'west'){
            return div
        }
        })
        const nfcSouth = this.props.nfc.filter(div => {
        if(div.division=== 'south'){
            return div
        }
        })
        const afcNorth = this.props.afc.filter(div => {
            if(div.division=== 'north'){
            return div
            }
        })
        const afcEast = this.props.afc.filter(div => {
            if(div.division=== 'east'){
            return div
            }
        })
        const afcWest = this.props.afc.filter(div => {
            if(div.division=== 'west'){
            return div
            }
        })
        const afcSouth = this.props.afc.filter(div => {
            if(div.division=== 'south'){
            return div
            }
        })

        // this.setState({nfcNorth, nfcEast, nfcWest, nfcSouth, afcNorth, afcEast, afcWest, afcSouth})
        // console.log(nfcNorth, nfcEast, nfcWest, nfcSouth, afcNorth, afcEast, afcWest, afcSouth)


        return (
        <div className="conference-container">
            <div className="nfc-container">
                <h1>NFC</h1>
                <div className="division-holder">
                    {divisions.map((item, index) => {
                        if (item === 'north') {
                            return(
                                <Division 
                                    key={item}
                                    divName={item}
                                    confName={this.props.nfcName}
                                    div={nfcNorth}
                                    activePlayers={this.props.activePlayers}
                                />
                            )
                        } else if (item === 'east') {
                            return(
                                <Division 
                                    key={item}
                                    divName={item}
                                    confName={this.props.nfcName}
                                    div={nfcEast}
                                    activePlayers={this.props.activePlayers}
                                />
                            )
                        } else if (item === 'west') {
                            return(
                                <Division 
                                    key={item}
                                    divName={item}
                                    confName={this.props.nfcName}
                                    div={nfcWest}
                                    activePlayers={this.props.activePlayers}
                                />
                            )
                        } else if (item === 'south') {
                            return(
                                <Division 
                                    key={item}
                                    divName={item}
                                    confName={this.props.nfcName}
                                    div={nfcSouth}
                                    activePlayers={this.props.activePlayers}
                                />
                            )
                        }
                    })}
                </div>
            </div>
            <div className="afc-container">
                <h1>AFC</h1>
                <div className="division-holder">
                    {divisions.map((item, index) => {
                        if (item === 'north') {
                            return(
                                <Division 
                                    key={item}
                                    divName={item}
                                    confName={this.props.afcName}
                                    div={afcNorth}
                                    activePlayers={this.props.activePlayers}
                                />
                            )
                        } else if (item === 'east') {
                            return(
                                <Division 
                                    key={item}
                                    divName={item}
                                    confName={this.props.afcName}
                                    div={afcEast}
                                    activePlayers={this.props.activePlayers}
                                />
                            )
                        } else if (item === 'west') {
                            return(
                                <Division 
                                    key={item}
                                    divName={item}
                                    confName={this.props.afcName}
                                    div={afcWest}
                                    activePlayers={this.props.activePlayers}
                                />
                            )
                        } else if (item === 'south') {
                            return(
                                <Division 
                                    key={item}
                                    divName={item}
                                    confName={this.props.afcName}
                                    div={afcSouth}
                                    activePlayers={this.props.activePlayers}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </div>
        )
    }
}

export default Conference








































// import React from 'react';
// import Division from '../Division';
// import './Conference.css';

// function Conference(props) {
//     const divisions = ['North', 'East', 'West', 'South']

//     const nfcFilterByDivision = () => {
//         const north = props.nfc.filter(division => {
//           if(division.division=== 'north'){
//             return division
//           }
//         })
//         const afc = this.state.teamIndexChart.filter(conference => {
//           if(conference.conference=== 'afc'){
//             return conference
//           }
//         })
//       }


//     return (
//         <div className="conference-container">
//             <div className="nfc-container">
//                 <h1>NFC</h1>
//                 <div className="division-holder">
//                     {divisions.map(item => {
//                         return (
//                             <Division 
//                                 nfcName={props.nfcName}
//                                 nfc={props.nfc} 
//                                 afcName={props.afcName}
//                                 afc={props.afc} 
//                                 activePlayers={props.activePlayers}
//                             />
//                         )
//                     })}
//                 </div>
//             </div>
//             <div className="afc-container">
//                 <h1>AFC</h1>
//                 <div className="division-holder">
//                     {divisions.map(item => {
//                         return (
//                             <Division 
//                                 nfcName={props.nfcName}
//                                 nfc={props.nfc} 
//                                 afcName={props.afcName}
//                                 afc={props.afc} 
//                                 activePlayers={props.activePlayers}
//                             />
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
        
            
//     )
// }

// export default Conference




















// import React from 'react';
// import Division from '../Division';
// import './Conference.css';

// const divisions = ['North', 'East', 'West', 'South']
// class Conference extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             // nfcName: this.props.nfcName,
//             // nfc: this.props.nfc,
//             nfcNorth: [],
//             nfcEast: [],
//             nfcWest: [],
//             nfcSouth: [],
//             // afcName: this.props.afcName,
//             // afc: this.props.afc,
//             afcNorth: [],
//             afcEast: [],
//             afcWest: [],
//             afcSouth: [],
//             // activePlayers: this.props.activePlayers
//         }
//     }

//     componentDidMount = () => {
//         this.filterByDivision()
//     }

//     filterByDivision = async () => {
//         // const nfc = this.props.nfc
//         console.log(this.props.nfc)

//         console.log(this.state.nfc)

//         await this.props.nfc.filter(div => {
//             if(div.division=== 'north') {
//               this.setState({nfcNorth: [...this.state.nfcNorth, div]})
//               return div
//             } else if (div.division=== 'east') {
//                 this.setState({nfcEast: [...this.state.nfcEast, div]})
//                 return div
//             }else if (div.division=== 'west') {
//                 this.setState({nfcWest: [...this.state.nfcWest, div]})
//                 return div
//             }else if (div.division=== 'south') {
//                 this.setState({nfcSouth: [...this.state.nfcSouth, div]})
//                 return div
//             }
//             console.log("HELP")
//             // console.log(this.state.nfcNorth)
//           })
        
//         await this.props.afc.filter(div => {
//             if(div.division=== 'north') {
//               this.setState({afcNorth: [...this.state.afcNorth, div]})
//               return div
//             } else if (div.division=== 'east') {
//                 this.setState({afcEast: [...this.state.afcEast, div]})
//                 return div
//             }else if (div.division=== 'west') {
//                 this.setState({afcWest: [...this.state.afcWest, div]})
//                 return div
//             }else if (div.division=== 'south') {
//                 this.setState({afcSouth: [...this.state.afcSouth, div]})
//                 return div
//             }
//           })
//       }





//     render () {
//         console.log(this.props.nfc, this.props.afc)
//         return (
//         <div className="conference-container">
//             <div className="nfc-container">
//                 <h1>NFC</h1>
//                 <div className="division-holder">
//                     {divisions.map((item, index) => {
//                         return (
//                             <Division 
//                                 key={index}
//                                 nfcName={this.props.nfcName}
//                                 nfc={this.props.nfc} 
//                                 activePlayers={this.props.activePlayers}
//                             />
//                         )
//                     })}
//                 </div>
//             </div>
//             <div className="afc-container">
//                 <h1>AFC</h1>
//                 <div className="division-holder">
//                     {divisions.map((item, index) => {
//                         return (
//                             <Division 
//                                 key={index}
//                                 afcName={this.props.afcName}
//                                 afc={this.props.afc} 
//                                 activePlayers={this.props.activePlayers}
//                             />
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//         )
//     }
// }

// export default Conference





// const nfcNorth = await this.props.nfc.filter(div => {
//     if(div.division=== 'north'){
//       return div
//     }
//   })
//   const nfcEast = await this.props.nfc.filter(div => {
//     if(div.division=== 'east'){
//       return div
//     }
//   })
//   const nfcWest = await this.props.nfc.filter(div => {
//     if(div.division=== 'west'){
//       return div
//     }
//   })
//   const nfcSouth = await this.props.nfc.filter(div => {
//     if(div.division=== 'south'){
//       return div
//     }
//   })
//   const afcNorth = await this.props.afc.filter(div => {
//       if(div.division=== 'north'){
//         return div
//       }
//     })
//     const afcEast = await this.props.afc.filter(div => {
//       if(div.division=== 'east'){
//         return div
//       }
//     })
//     const afcWest = await this.props.afc.filter(div => {
//       if(div.division=== 'west'){
//         return div
//       }
//     })
//     const afcSouth = await this.props.afc.filter(div => {
//       if(div.division=== 'south'){
//         return div
//       }
//     })
//   this.setState({nfcNorth, nfcEast, nfcWest, nfcSouth, afcNorth, afcEast, afcWest, afcSouth,})
  // console.log(this.state.nfcNorth)
  // console.log(this.state.nfcEast)
  // console.log(this.state.nfcWest)
  // console.log(this.state.nfcSouth)
  // console.log(this.state.afcNorth)
  // console.log(this.state.afcEast)
  // console.log(this.state.afcWest)
  // console.log(this.state.afcSouth)
















// import React from 'react';
// import Division from '../Division';
// import './Conference.css';

// const divisions = ['North', 'East', 'West', 'South']
// function Conference(props) {
//     console.log(props.nfc)
//     return(
//         <div>
//             <p>afs</p>
//         </div>
//     )
// }

// export default Conference