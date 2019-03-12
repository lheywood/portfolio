import React, { Component  } from 'react';
import { Grid, Cell, Switch } from 'react-mdl';
import profilePhoto from '../imgs/profilePhoto.png'; 
import Toggle from '../Toggle';


class AboutMe extends Component {

    render() {
        return(
            
            <div className="aboutContent">
            <Toggle> 
            {({ on, toggle }) => (
            <div>
                <div style= {{float: 'right', margin: '5px 15px 0 0'}}>
                    <Switch ripple className="switch" defaultUnchecked onClick={toggle}>s</Switch>
                </div>
            { on && 
            <div>     
                <div className="pageHeader">
                    <h2>About Me</h2>
                </div>
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
                    
                    <p>I was raised near Newcastle, England before moving to Milwaukee
                        to study when I was 18. I have played football since the age of 5
                        and have represented Sunderland A.F.C, Durham County and Cardinal Stritch University.
                        At school I have made the Dean's List five times and was named on the all academic team three times.
                        <br/>
                        I currently also coach at F.C Wisconsin which involves developing and executing training sessions 
                        and managing on matchdays.
                    </p>
                    <hr/>
                    <h1>Goals</h1>
                    <p><span style={{fontWeight:'bold'}}>
                        Short term:</span> My goal is to secure position as a developer to prove my exsisting skills 
                        and continue to learn new technologies and practices working with an experienced mentor.<br/>
                        <span style={{fontWeight:'bold'}}>Long Term:</span> My goal is to become an experienced
                        and established developer in multiple languages and technologies. In the future, I would like
                        to lead a development team for a company </p>
                    <hr></hr>
                    <h1>Athletic Achievments</h1>
                    <ul>
                    <li>Captain of Cardinal Stritch 2017, 2018</li>
                    <li>Conference Champion 2017, 2018</li>
                    <li>Conference Tournament Champion 2017, 2018</li>
                    <li>Conference Player of the Year 2017, 2018</li>
                        <li>NAIA Honorable Mention 2016</li>
                        <li>NAIA All-Tournament Team 2018</li>
                        <li>NAIA team of the Year 2018</li>
                    </ul>
                    </Cell>
                </Grid>
                <br/>
                <br/>
                </div>
            }
             </div>
         )}
            </Toggle>
            </div>
        )
    }
}

export default AboutMe;