import React, { Component  } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';



class Contact extends Component {
    render() {
        return(
            <div className="contactBody">
            <Grid className="contactGrid">
            <Cell col={12}>
            <h2>Contact Me</h2>
            <p>Please feel free to contact me in any of the following ways</p>
            <div className="contactList">
                <List>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px'}}>
                        <i className="fas fa-at"></i> - 
                        lmcheywood@gmail.com
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px'}}>
                        <i className="fas fa-phone"></i> - 
                        (414) 364 7699
                        </ListItemContent>
                    </ListItem>
                    <a href="/">
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px' }}>
                        <i className="fab fa-linkedin-in"></i> -
                        Available through LinkedIn messenger
                        </ListItemContent>
                    </ListItem>
                    </a>
                </List>
            </div>
            </Cell>
            </Grid>
        
        </div>
            )
    }
}

export default Contact;