import React, { Component  } from 'react';
import { Button } from 'react-mdl';



class Resume extends Component {
    render() {
        return(
            <div className="resumeContent">
            <div className="pageHeader">
                <h2>Resume</h2>
            </div>
            <a href="https://docs.google.com/document/d/e/2PACX-1vRfFb2S6j7nzvEhB6yNuzC24D2i_6_VxUYNg6a5sX51qouaBisoBdT_ymKUEjjkPpMwtCPCaSQtpQvo/pub" download target="/blank">
            <Button className="downloadRes" raised accent ripple>Open in New Tab</Button>
            </a>
            <br/>
            <br/>
            <iframe title="resume" src="https://docs.google.com/document/d/e/2PACX-1vRfFb2S6j7nzvEhB6yNuzC24D2i_6_VxUYNg6a5sX51qouaBisoBdT_ymKUEjjkPpMwtCPCaSQtpQvo/pub?embedded=true" width='500px' height='800px'></iframe>
            <br/>
            <br/>
            </div>
        )
    }
}

export default Resume;