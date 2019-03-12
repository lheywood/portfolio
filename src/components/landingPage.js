import React, { Component } from 'react';
import  ukimg  from '../imgs/uk.png';
import usimg from '../imgs/usa.png';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
           <div className="landingMain">
            <Grid className="landingContent">
                <Cell col={12} style={{ height: '600px' }}>
                
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
                        <a href="https://www.linkedin.com/in/liam-heywood-773361157/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin" aria-hidden="true"/>
                        </a>
                        <a href="https://github.com/lheywood" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github-square"></i>              </a>
                    </div>
                </div>
                </Cell>
            </Grid>
           </div>
            
        )
    }
}

export default LandingPage;