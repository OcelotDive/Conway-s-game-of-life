import React from "react";
const marked = require('marked');

export class TextAreaLeft extends React.Component {
    
  
    render() {
     
        return(
            <form  id="usrformleft" className="form-group">
                <ul className="nav navbar-nav buttonGroup">
                            <li><a  href="#" ref="theme">Theme</a></li>
                            <li><a href="#">Clear</a></li>
                            <li><a href="#">Reset</a></li>
                
                        </ul>
        <textarea id="content" className="leftTextArea" rows="30" cols="100" name="markdownArea" form="usrformleft" spellCheck="false">
            
            {this.props.heading + "\n" + "\n" + this.props.headingTwo + "\n" +  "\n" + this.props.italics + "\n" + "\n" + this.props.bold + "\n" + "\n" + this.props.strike}
         
            
            
            
            </textarea>
            
     
</form>


        );
    }
}


