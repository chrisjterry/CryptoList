import React from 'react';

export default ({ educations }) => {
    const educationSubComponents = educations.length ? educations.map( education => (
        <div key={education.id} className='show-subprofile'>
            <div>
                <i className="fas fa-graduation-cap"></i>
            </div>
            <div>
                <div>
                    <p>{education.graduation_year}</p>
                    <p>{education.school_name}</p>
                </div>
            </div>
        </div>
    )) : (
        <p className='no-subcomponents'>User has not added any education</p>
    );
    return (
        <div className='subprofile-div'>
            <h2>EDUCATION</h2>
            <div>
                {educationSubComponents}
            </div>
        </div> 
    )
}