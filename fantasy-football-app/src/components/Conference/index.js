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
        return (
        <div className="conference-container">
            <div className="nfc-container">
                <h1 id="nfc">NFC</h1>
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
                <h1 id="afc">AFC</h1>
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