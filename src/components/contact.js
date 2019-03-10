import React, { Component  } from 'react';
import { Grid, Cell, } from 'react-mdl';



class Contact extends Component {
    render() {
        return(
            <div className="contactContent">
            <div className="pageHeader">
                <h2>Contact</h2>
            </div>
               
                    
               
            
            <Grid className="contactGrid">


            <Cell col={12}>
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
                    
                </ul>    
            </div>
            </Cell>
            </Grid>
            <br/>
            <br/>
        </div>
            )
    }
}

export default Contact;