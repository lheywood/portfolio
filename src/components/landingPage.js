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
                <img  src={usimg} alt="uk" className="homeImg"/>

                <div className="bannerText">
                <h1>
                    Graduate of Computer Science & Mathematics minor
                </h1>
                <br/>
                <p>Experience with:</p>
                <p>Java | JavaScript | NodeJS | React | HTML/CSS | C# </p>
                </div>
                
                </Cell>
            </Grid>


           </div>
            
        )
    }
}

export default LandingPage;