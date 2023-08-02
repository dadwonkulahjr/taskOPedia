import { faker } from '@faker-js/faker';
import React from 'react';

class Student extends React.Component
{
    // const fullName = 'Dad S. Wonkulah Jr';
    // const experience = 5;
    render()
    {
    return (
        <div className="col-sm-6 col-md-5 py-1">
            <div className="row border">
                <div className="col-2">
                    <img src={faker.image.avatar()} className="img-fluid py-2" alt="dad.jpg"></img>
                </div>
                <div className="col-8">
                    {this.props.name}<br/>
                    Coding Experience {this.props.experience} years
                </div>
                <div className="col-2">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
    }
}

export default Student;