import React, { Component  } from 'react';
import { Button, Switch } from 'react-mdl';
import Toggle from '../Toggle';


class Resume extends Component {
    render() {
        return(
            <div className="resumeContent">
             <Toggle> 
            {({ on, toggle }) => (
                <div>
               <div style= {{float: 'right', margin: '5px 15px 0 0'}}>
                    <Switch ripple className="switch" defaultUnchecked onClick={toggle}>s</Switch>
                </div>
                { on && 
                    <div>
                        <div className="pageHeader">
                            <h2>Resume</h2>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'left'}}>
                            <a href="https://docs.google.com/document/d/e/2PACX-1vRfFb2S6j7nzvEhB6yNuzC24D2i_6_VxUYNg6a5sX51qouaBisoBdT_ymKUEjjkPpMwtCPCaSQtpQvo/pub" download target="_blank" rel="noopener noreferrer">
                            <Button className="downloadRes" raised accent ripple>Open</Button>
                            </a>
                            <br/>
                            <br/>
                            <div className="frame">
                                <iframe title="resume" src="https://docs.google.com/document/d/e/2PACX-1vRfFb2S6j7nzvEhB6yNuzC24D2i_6_VxUYNg6a5sX51qouaBisoBdT_ymKUEjjkPpMwtCPCaSQtpQvo/pub?embedded=true" width='500px' height='800px'></iframe>
                            </div>
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

export default Resume;