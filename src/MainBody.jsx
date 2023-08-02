import React from 'react';
import Student from './Compoenents/Student/Student';
import StudentReview from './Compoenents/Student/StudentReview';

class MainBody extends React.Component
{
    render()
    {
        const whatWeWillLearn = 'REACT JS';
        const totalLecture = 3;
    return(
        <div style={{minHeight:"70vh"}}>
            <p>In this course, we will learn {whatWeWillLearn} by building TaskOPedia
            <br/>
            Total Lecture - {totalLecture}
            </p>
            
            <ul>
                <li>Basic Foundation</li>
                <li>Functional & Class Components</li>
            </ul>
            <div className="container row">Students Enrolled</div>
            <Student name='Bob Wilson' experience={3}>
                <StudentReview/>
            </Student>

            <Student name='James Henry' experience={5}>
                <StudentReview/>
            </Student>
            <Student name='Lisa Benson' experience={7}/>
        </div>
        );
    }
}

export default MainBody;

