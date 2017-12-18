import React from "react";


export class TextAreaRight extends React.Component {
    render() {
        return(
            <form  id="usrformright" className="form-group">
        <textarea className="rightTextArea" rows="30" cols="100" name="markdownArea" form="usrformright"></textarea>
</form>


        );
    }
}