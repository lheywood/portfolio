import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton, Switch } from 'react-mdl';
import Toggle from '../Toggle';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
}

toggleCategories(){
    if(this.state.activeTab === 0){
        return (
            <div className="projectsGrid">
            <Card shadow={5} className="card">
                <CardTitle className="cardTitle">Finance Tracker</CardTitle>
                    <CardText className="cardText">
                        This project will be a finance tracker that enables the user to keep track of what and where they spend
                        their money on. Predicted completion date: May 2019gf gbfgthgbfgrg  thgbfvr  tygrftyhtgrf tyhtgrtyhtgrtyhtgrtytgr
                    </CardText>
                    <CardActions border>
                        <Button color>GitHub</Button>
                        <Button color>Live Demo</Button>
                    </CardActions>
                    <CardMenu>
                        <IconButton style={{background:'#A4B3B6'}} name="share" />
                    </CardMenu>
            </Card>
            </div>
            );                                                                                                                  
    } else if (this.state.activeTab === 1){
        return (
            <div className="projectsGrid">
            <Card shadow={5} className="card">
            <CardTitle className="cardTitle">Funky Name Generator</CardTitle>
                <CardText className="cardText">This is my finance tracker application. The app will be written in
                     Java and use a database to store the data. As you can see it is still currently
                    under development. The expected completion date is May 1st. 
                </CardText>
                <CardActions border>
                    <Button color>GitHub</Button>
                    <Button color>Live Demo</Button>
                </CardActions>
                <CardMenu>
                    <IconButton style={{background:'#A4B3B6'}} name="share" />
                </CardMenu>
        </Card>
        <Card shadow={5} className="card">
            <CardTitle className="cardTitle">Find Longest Substring</CardTitle>
                <CardText className="cardText">
                    This simple application finds the longest common substring when given two strings.
                </CardText>
                <CardActions border>
                    <Button color>GitHub</Button>
                    <Button color>Live Demo</Button>
                </CardActions>
                <CardMenu>
                    <IconButton style={{background:'#A4B3B6'}} name="share" />
                </CardMenu>
        </Card>
        <Card shadow={5} className="card">
            <CardTitle className="cardTitle">JavaScript Project 3</CardTitle>
                <CardText className="cardText">This is my finance tracker application. The app will be written in
                     Java and use a database to store the data. As you can see it is still currently
                    under development. The expected completion date is May 1st. 
                </CardText>
                <CardActions border>
                    <Button color>GitHub</Button>
                    <Button color>Live Demo</Button>
                </CardActions>
                <CardMenu>
                    <IconButton style={{background:'#A4B3B6'}} name="share" />
                </CardMenu>
        </Card>
        </div>
        );
    }
    else if (this.state.activeTab === 2){
        return (

        <div className="projectsGrid">
            <Card shadow={5} className="card">
                <CardTitle className="cardTitle">Portfolio</CardTitle>
                    <CardText className="cardText">
                        My personal portfolio page created with React. Here you can find out about myself and my experiences 
                        as well as my resume and how to contact.
                    </CardText>
                    <CardActions border>
                        <Button color>GitHub</Button>
                        <Button color>Live Demo</Button>
                    </CardActions>
                    <CardMenu>
                        <IconButton style={{background:'#A4B3B6'}} name="share" />
                    </CardMenu>
        </Card>
    </div>
        )
    }
    else if (this.state.activeTab === 3){
        return (
        <div className="projectsGrid">
            <Card shadow={10} className="card">
                <CardTitle className="cardTitle">Projects Coming Soon</CardTitle>
                    <CardText className="cardText"> 
                    </CardText>
                    <CardActions border>
                        <Button>GitHub</Button>
                        <Button>Live Demo</Button>
                    </CardActions>
                    <CardMenu>
                        <IconButton style={{background:'#A4B3B6'}} name="share" />
                    </CardMenu>
        </Card>
    </div>
        );
    }
}
    render() {
        return(
            <div className="projectContent">
            <Toggle> 
            {({ on, toggle }) => (
            <div>
           <div style= {{float: 'right', margin: '5px 15px 0 0'}}>
                    <Switch ripple className="switch" defaultUnchecked onClick={toggle}>s</Switch>
                </div>
            { on && 
            <div>
                <div className="pageHeader">
                <h2>Projects</h2>
            </div>
            <div className="tabsContent">
                <Tabs className="tabBar" activeTab={this.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab className="tab">JAVA</Tab>
                    <Tab className="tab">JAVASCRIPT</Tab>
                    <Tab className="tab">React</Tab>
                    <Tab className="tab">C#</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div >
                            {this.toggleCategories()}
                               
                            </div>
                        </Cell>
                    </Grid>
                </div>
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

export default  Projects;