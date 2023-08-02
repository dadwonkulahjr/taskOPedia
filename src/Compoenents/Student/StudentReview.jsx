import React from "react";

class StudentReview extends React.Component
{
    render(){
        return (
            <div className="py-2">
                <i class="bi bi-hand-thumbs-up-fill text-success p-1 custom_cursor"></i>
                <i class="bi bi-hand-thumbs-down-fill text-danger p-1 custom_cursor"></i>
            </div>
        );
    }
    
}

export default StudentReview;