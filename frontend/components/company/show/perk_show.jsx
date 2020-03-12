import React from 'react';

export default ({ perk }) => {
    return (
        <div className='perk-div'>
            <div>
                <i className="far fa-star"></i>
            </div>
            <p>{perk.perk_description}</p>
        </div>
    )
}