import React, { Component  } from 'react';
import { Grid, Cell, Switch } from 'react-mdl';
import Toggle from '../Toggle';


class Contact extends Component {
    render() {
        return(
            <div className="contactContent">
                <Toggle> 
                {({ on, toggle }) => (
                    <div>
                    <div style= {{float: 'right', margin: '5px 15px 0 0'}}>
                    <Switch ripple className="switch" defaultUnchecked onClick={toggle}>s</Switch>
                </div>
                    { on &&
                        <div>
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
                                            <a  style= {{textDecoration: 'none', color: 'black', cursor: 'pointer' }} href="https://www.linkedin.com/in/liam-heywood-773361157/">
                                            <i className="fab fa-linkedin-in"></i> -
                                            Available through LinkedIn </a>
                                        </li>
                                            
                                        </ul>    
                                    </div>
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

export default Contact;