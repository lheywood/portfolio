import React, { Component } from 'react';
import './App.scss';
import  { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
    <Layout>
        <Header className="header-color" title={<span>Liam Heywood /<strong>Online Portfolio</strong></span>}>
            <Navigation>
                <a href="aboutMe">About Me</a>
                <a href="resume">Resume</a>
                <a href="projects">Projects</a>
                <a href="contactUs">Contact Us</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="aboutMe">About Me</a>
                <a href="resume">Resume</a>
                <a href="projects">Projects</a>
                <a href="contactUs">Contact Us</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
    );
  }
}

export default App;
