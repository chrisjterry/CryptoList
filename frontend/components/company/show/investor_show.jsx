import React from 'react';

export default ({ investor }) => {
    return (
        <div className='investor-div'>
            <p>{investor.investor_name}</p>
            <div>
                <i className="fas fa-user-friends"></i>
            </div>
        </div>
    )
}