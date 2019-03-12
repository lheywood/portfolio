import React from 'react';
import LandingPage from './landingPage';
import { Switch, Route } from 'react-router';
import AboutMe from './aboutMe';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={ LandingPage }/>
        <Route path="/contact" component= { Contact } />
        <Route path="/aboutMe" component={ AboutMe }/>
        <Route path="/Resume" component={ Resume }/>
        <Route path="/projects" component={ Projects }/>
    </Switch>
    
        
    
)

export default Main;