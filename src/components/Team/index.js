import React, {Component} from 'react';
import imageTeam from "../../assets/img/Team2.png"
import './styles.css';

class Team extends Component {
    render() 
    {
        return(
            <div className="team" id="team">
                <h2>NOSSO TIME</h2>
                <div className="team-image">
                    <img src={imageTeam}  alt="Time" ></img>
                </div>
                
            </div>
        );
    } 
}

export default Team;