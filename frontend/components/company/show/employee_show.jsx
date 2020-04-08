import React from 'react';
import { Link } from 'react-router-dom';

export default ({ employee }) => {
    const profilePicture = employee.profile_picture_url ? (
        <img src={employee.profile_picture_url} className='uploaded'/>
    ) : (
        <img src='/assets/user_icon.png' className='default'/>
    );

    return (
        <div className='employee-div'>
            <Link className='link' to={`/profiles/${employee.employee_id}/show`}>{employee.name}</Link>
            <div>
                {profilePicture}
            </div>
        </div>
    )
}