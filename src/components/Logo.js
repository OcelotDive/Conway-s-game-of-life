import React from "react";
const logo = require('../images/markdown.png');

export class Logo extends React.Component {
    
    render() {
        return(
            <div className="logoHolder">
                <img className="logo" src={logo} alt="markdown logo"/>
            
            </div>
            
        );
    }
    
}