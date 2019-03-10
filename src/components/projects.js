import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
}

toggleCategories(){
    if(this.state.activeTab === 0){
        return (
            <div className="projectsGrid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{height: '200px', color: '#000000', background: '#9f9f9f'}}>Finance Tracker</CardTitle>
                    <CardText>
                        This project will be a finance tracker that enables the user to keep track of what and where they spend
                        their money on. Predicted completion date: <br/>May 2019
                    </CardText>
                    <CardActions border>
                        <Button color>GitHub</Button>
                        <Button color>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton style={{background:'#A4B3B6'}} name="share" />
                    </CardMenu>
            </Card>
            </div>
            );                                                                                                                  
    } else if (this.state.activeTab === 1){
        return (
            <div className="projectsGrid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '200px', color: '#000000', background: 'url(./imgs/JS.png)'}}>JavaScript Project 1</CardTitle>
                <CardText>This is my finance tracker application. The app will be written in
                     Java and use a database to store the data. As you can see it is still currently
                    under development. The expected completion date is May 1st. 
                </CardText>
                <CardActions border>
                    <Button color>GitHub</Button>
                    <Button color>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton style={{background:'#A4B3B6'}} name="share" />
                </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '200px', color: '#000000', background: 'url(./imgs/JS.png)'}}>JavaScript Project 2</CardTitle>
                <CardText>This is my finance tracker application. The app will be written in
                     Java and use a database to store the data. As you can see it is still currently
                    under development. The expected completion date is May 1st. 
                </CardText>
                <CardActions border>
                    <Button color>GitHub</Button>
                    <Button color>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton style={{background:'#A4B3B6'}} name="share" />
                </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '200px', color: '#000000', background: 'url(./imgs/JS.png)'}}>JavaScript Project 3</CardTitle>
                <CardText>This is my finance tracker application. The app will be written in
                     Java and use a database to store the data. As you can see it is still currently
                    under development. The expected completion date is May 1st. 
                </CardText>
                <CardActions border>
                    <Button color>GitHub</Button>
                    <Button color>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton style={{background:'#A4B3B6'}} name="share" />
                </CardMenu>
        </Card>
        </div>
        )
    }
    else if (this.state.activeTab === 2){
        return (
        <div>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{height: '200px', color: '#000000', background: 'url(./imgs/JS.png)'}}>Portfolio</CardTitle>
                    <CardText>
                        My personal portfolio page created with React. Here you can find out about myself and my experiences 
                        as well as my resume and how to contact.
                    </CardText>
                    <CardActions border>
                        <Button color>GitHub</Button>
                        <Button color>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton style={{background:'#A4B3B6'}} name="share" />
                    </CardMenu>
        </Card>
    </div>
        )
    }
    else if (this.state.activeTab === 3){
        return (
        <div>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{height: '200px', color: '#000000', background: 'url(./imgs/JS.png)'}}>JavaScript Project 3</CardTitle>
                    <CardText>This is my finance tracker application. The app will be written in
                            Java and use a database to store the data. As you can see it is still currently
                            under development. The expected completion date is May 1st. 
                    </CardText>
                    <CardActions border>
                        <Button color>GitHub</Button>
                        <Button color>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton style={{background:'#A4B3B6'}} name="share" />
                    </CardMenu>
        </Card>
    </div>
        )
    }
}
    render() {
        return(
            <div className="categoryTabs">
                <Tabs activeTab={this.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>JAVA</Tab>
                    <Tab>JAVASCRIPT</Tab>
                    <Tab>React</Tab>
                    <Tab>C#</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                            {this.toggleCategories()}
                               
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default  Projects;