import React from "react";


const ApprovalCard = () => {
    return(
        <div className="ui card">
            <div className="content">Confirm to Proceed? </div>
            
            <div className="extra buttons">
                <div className="ui two buttons"> 
                    <div className="ui basic green button">Approve </div>
                    <div className="ui basic danger button">Cancel</div>
                </div>

            </div>

        </div>

    );

};

export default ApprovalCard;