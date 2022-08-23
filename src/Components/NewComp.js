import React, {Component} from "react";

class NewComp extends Component{
    constructor(props){
        super(props)
        this.state ={
            message: "Click below button to change the text",
            sub: "Subscribe"
        };

    }
    styles = {
        fontStyle: "Bold",
        color: "teal"

    };
    buttonChange = () =>{
        this.setState({message: " Click on the icon to know more", sub:"Button Clicked"});
    }
    render(){
        return(
            <div>
                <p/>
                <div style={this.styles}>
                    {this.state.message}
                </div>
                <button onClick={this.buttonChange}> {this.state.sub}</button>
            </div>
        );
    }
}

export default NewComp;