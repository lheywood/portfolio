import React, { Component } from 'react';
import  ukimg  from './imgs/uk.png';
import usimg from './imgs/usa.png';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
    render() {
        return(
           <div style={{width: '100%', margin:'auto'}}>
           <Grid className="landingGrid">
                <Cell col={12}>
                
                <img src={ukimg} alt="uk" className="homeImg"/>
                <img  src={usimg} alt="usa" className="homeImg"/>

                <div className="bannerText">
                <h1>
                    Bachelor's Computer Science & Mathematics minor
                </h1>
                <hr/>
                <p>Experience in:</p>
                <p>Java | JavaScript | NodeJS | React | HTML/CSS | C# </p>
                

                <div className="socialLinks">
                
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true"/>
                </a>

                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-github-square"></i>              </a>
                </div>
                
                </div>
                
                </Cell>
            </Grid>


           </div>
            
        )
    }
}

export default LandingPage;