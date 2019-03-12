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
        <Header className="headerColor" title={<span><Link id="homeLink" to="/">Liam Heywood /<strong> Online Portfolio</strong></Link></span>}>
            <Navigation>
                <Link className="link" to="AboutMe">About Me</Link>
                <Link className="link" to="Resume">Resume</Link>
                <Link className="link" to="Projects">Projects</Link>
                <Link className="link" to="Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Heywood Portfolio" className="drawer">
            <Navigation>
                <Link to="AboutMe">About Me</Link>
                <Link to="Resume">Resume</Link>
                <Link to="Projects">Projects</Link>
                <Link to="Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content className="mainPage">
            <Main />
        </Content>
        
    </Layout>
    
</div>
    );
  }
}

export default App;
