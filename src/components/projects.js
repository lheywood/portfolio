import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import js from './imgs/JS.png';
import '../App.scss';



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
                <CardTitle style={{height: '200px', color: '#ffffff', background: 'url(./imgs/JS.png)'}}>JavaScript Project 1</CardTitle>
                    <CardText>This is my portfolio project, or the site you are currently on.  
                    It was create using HTML/SCSS/JavaScript as well as NODE.JS and React.
                    </CardText>
                    <CardActions border>
                        <Button color>GitHub</Button>
                        <Button color>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
            </Card>
            </div>
            );                                                                                                                  
    } else if (this.state.activeTab === 1){
        return (
            <div className="projectsGrid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '200px', color: '#ffffff', background: 'url(./imgs/JS.png)'}}>JAVA Project 1</CardTitle>
                <CardText>This is my finance tracker application. The app will be written in
                     Java and use a database to store the data. As you can see it is still currently
                    under development. The expected completion date is May 1st. 
                </CardText>
                <CardActions border>
                    <Button color>GitHub</Button>
                    <Button color>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '200px', color: '#ffffff', background: 'url(./imgs/JS.png)'}}>JAVA Project 2</CardTitle>
                <CardText>This is my finance tracker application. The app will be written in
                     Java and use a database to store the data. As you can see it is still currently
                    under development. The expected completion date is May 1st. 
                </CardText>
                <CardActions border>
                    <Button color>GitHub</Button>
                    <Button color>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '200px', color: '#ffffff', background: 'url(./imgs/JS.png)'}}>JAVA Project 3</CardTitle>
                <CardText>This is my finance tracker application. The app will be written in
                     Java and use a database to store the data. As you can see it is still currently
                    under development. The expected completion date is May 1st. 
                </CardText>
                <CardActions border>
                    <Button color>GitHub</Button>
                    <Button color>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
        </Card>
        </div>
        )
    }
    else if (this.state.activeTab === 2){
        return (
        <div>this is C#</div>
        )
    }
}



    render() {
        return(
            <div className="categoryTabs">
                <Tabs activeTab={this.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>JAVASCRIPT</Tab>
                    <Tab>JAVA</Tab>
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