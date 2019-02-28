import React, { Component } from 'react';
import './App.scss';
import  { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
//import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class App extends Component {
  render() {
    return (
      <div className="navContent" style={{height: '300px', position: 'relative'}}>
    <Layout>
        <Header className="header-color" title={<span><a id="homeLink" href="landingPage">Liam Heywood /<strong>Online Portfolio</strong></a></span>}>
            <Navigation>
                <a href="AboutMe">About Me</a>
                <a href="Resume">Resume</a>
                <a href="Projects">Projects</a>
                <a href="ContactUs">Contact Us</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="AboutMe">About Me</a>
                <a href="Resume">Resume</a>
                <a href="Projects">Projects</a>
                <a href="ContactUs">Contact Us</a>
            </Navigation>
        </Drawer>
        <Content style={{background: '#D5D5D5'}}>
           <div className="mainContent">
           
            <Main />
            </div>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
