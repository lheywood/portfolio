import React, { Component  } from 'react';
import img from './imgs/one.jpeg';

class Resume extends Component {
    render() {
        return(
            <div style="{{width: 100%, margin: 'auto'}}">
            <Grid className="landing-grid">
                <Cell col={12}>
                Landing Page
                <img
                src={img} alt="tester"/>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Resume;