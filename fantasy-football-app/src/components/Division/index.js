import React from 'react';
import './Division.css';
import Team from '../Team';

class Division extends React.Component {
    render() {
        const div = this.props.div
        return (
            <div className="division-container">
                <ul className={`${this.props.confName}-${this.props.divName}`}>{this.props.divName}
                    {
                        div.map((item,index)=>{
                            return(
                                <Team 
                                    key={item.teamId}
                                    teamId={item.teamId}
                                    teamName={item.teamName}
                                    activePlayers={this.props.activePlayers}
                                />
                            )
                        })
                    }
                </ul>
            </div>
    )
    }
}

export default Division