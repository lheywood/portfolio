import React, { Component } from 'react';
import './App.scss';
import  { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className="mainPage">
    <Layout>
        <Header className="header-color" title={<span><a id="homeLink" href="landingPage">Liam Heywood /<strong> Online Portfolio</strong></a></span>}>
            <Navigation>
                <Link to="AboutMe">About Me</Link>
                <Link to="Resume">Resume</Link>
                <Link to="Projects">Projects</Link>
                <Link to="Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="AboutMe">About Me</Link>
                <Link to="Resume">Resume</Link>
                <Link to="Projects">Projects</Link>
                <Link to="Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
       
           <div className="landingGrid">  
           
           <Main />
         
            </div>
            
        </Content>
        
    </Layout>
    
</div>
    );
  }
}

export default App;
