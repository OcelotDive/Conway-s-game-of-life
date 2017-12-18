import React from "react";


export class ThemeButton extends React.Component {
    
    render() {
        return(
       <button  className="btn btn-default themeButton">{this.props.title}</button>


        );
    }
}