import React from "react";
//import faker from 'faker';

const CommentDetails = props => {
    
    return (
        <div className="comment" style={{ textDecoration:'none',padding:'5px', margin:'2px'}} >
            {/* <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a> */}
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="text">
                        {props.textField}
                    </span>
                    <span className="date">
                        {props.date}
                    </span>
                
                </div>
            </div>
        </div>
    );
}

export default CommentDetails;