import React, { Component } from 'react';
import './App.scss';
import  { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';


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
                <a href="Contact">Contact Us</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="AboutMe">About Me</a>
                <a href="Resume">Resume</a>
                <a href="Projects">Projects</a>
                <a href="Contact">Contact Us</a>
            </Navigation>
        </Drawer>
        <Content>
           <div >  
            <Main />
              
            </div>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
