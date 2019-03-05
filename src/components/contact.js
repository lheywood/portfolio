import React, { Component  } from 'react';
import { Grid, Cell, } from 'react-mdl';



class Contact extends Component {
    render() {
        return(
            <div className="contactBody">
            <Grid className="contactGrid">
            <Cell col={12}>
            <h2>Contact Me</h2>
            <p>Please feel free to contact me in any of the following ways</p>
            <div className="contactList">
               <ul>
                    <li>
                        <i className="fas fa-at"></i> - 
                        lmcheywood@gmail.com
                    </li> 
                    <hr/>
                    <li>  
                        <i className="fas fa-phone"></i> - 
                        (414) 364 7699
                    </li>
                    <hr/>
                    <li>
                        <i className="fab fa-linkedin-in"></i> -
                        Available through LinkedIn 
                    </li>
                    <hr/>
                </ul>    
            </div>
            </Cell>
            </Grid>
        
        </div>
            )
    }
}

export default Contact;