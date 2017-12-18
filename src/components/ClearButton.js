import React from "react";


export class ClearButton extends React.Component {
    
    render() {
        return(
       <button  className="btn btn-danger clearButton">{this.props.title}</button>


        );
    }
}