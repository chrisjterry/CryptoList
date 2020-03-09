import React from 'react';

export default ({ experiences }) => {
    const experienceSubComponents = experiences.map( experience => (
        <div key={experience.id} className='show-subprofile'>
            <div>
                <i className="fas fa-building"></i>
            </div>
            <div>
                <div>
                    <p>{experience.company_name}</p>
                    <p>{experience.employee_title}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className='subprofile-div'>
            <h2>EXPERIENCE</h2>
            <div>
                {experienceSubComponents}
            </div>
        </div> 
    )
}