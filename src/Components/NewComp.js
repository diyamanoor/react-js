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
            <div style={{ textDecoration:'none',padding:'5px', margin:'2px'}}>
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