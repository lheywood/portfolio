import React, { Component  } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePhoto from '../imgs/profilePhoto.png'; 

class AboutMe extends Component {
    render() {
        return(
            <div className="contentBody">
                <Grid className="contentGrid">
                <Cell col={6}>
                <h2>Liam Heywood</h2>
                <img src={profilePhoto} alt='ProfilePic' style={{borderRadius: '50%'}} />
                <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                I am a graduate of Computer Science with a minor in Mathematics. 
                My passions include problem solving, learning new, efficient technologies
                 and creating useful applications. I began by learning the tools of programming
                  in Java at school. Since then I have also began teaching myself C# and
                   web technologies including HTML/CSS/JavaScript/React. 
                </p>
                </Cell>
                <Cell col={6}>
                <h1>Personal Life</h1>
                
                <p>I grew up near Newcastle, England before moving to Milwaukee
                     to study when I was 18. I have played football since I was a child
                     and have represented Sunderland A.F.C, Durham County and Cardinal Stritch University.
                     At school I have made the Dean's List five times and was named on the all academic team three times.
                     <br/>
                     I currently also coach at F.C Wisconsin which involves developing and executing training session 
                     and managing on matchdays.
                </p>
                <hr/>
                <h1>Goals</h1>
                <p><span style={{fontWeight:'bold'}}>Short term:</span> My goal is to get a job as a junior developer to prove my exsisting skills
                     and continue to learn new technologies and practices under an top, experienced mentor.<br/>
                     <span style={{fontWeight:'bold'}}>Long Term:</span> My goal is to become an experienced
                      and established developer in multiple languages and technologies. One day I would love
                       to lead a development team for a company </p>
                <hr></hr>
                <h1>Athletic Achievments</h1>
                <ul>
                   <li>Captain of Cardinal Stritch 2017, 2018</li>
                   <li>Conference Champion 2017, 2018</li>
                   <li>Conference Tournement Champion 2017, 2018</li>
                   <li>Conference Player of the Year 2017, 2018</li>
                    <li>NAIA Honorable Mention 2016</li>
                    <li>NAIA All-Tournement Team 2018</li>
                    <li>NAIA team of the Year 2018</li>
                </ul>

                </Cell>
                </Grid>
            
            </div>
        )
    }
}

export default AboutMe;