import React from 'react';

export default ({ projects }) => {
    const projectSubComponents = projects.map ( project => (
        <div key={project.id} className='show-subprofile'>
            <div>
                <i className="fas fa-cube"></i>
            </div>
            <div>
                <div>
                    <p>{project.project_title}</p>
                    <p>{project.project_link}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className='subprofile-div'>
            <h2>PROJECTS</h2>
            <div>
                {projectSubComponents}
            </div>
        </div> 
    )
}