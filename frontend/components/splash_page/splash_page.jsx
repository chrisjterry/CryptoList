import React from 'react';
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div className='splash-div'>
            <div className='logo-div'>
                <img src='/assets/hand_logo.png'/>
                <h2>CrypoList</h2>
            </div>
            <h1>Join the world’s only crypto job board</h1>
            <h4>Experience the crypto economy — pay and get paid in crypto while working with top companies and coders.</h4>
            <div className='products-div'>
                <div>
                    <div>
                        <h3>CyrptoList Job Hunt</h3>
                        <img src='/assets/crypto_icon.png'/>
                    </div>
                    <p>Apply to dozens of tech and startup jobs with one application. See real-time salary trends.</p>
                    <Link className='product-button' to='/jobs'>Find crypto jobs</Link>
                </div>  
                <div>
                    <div>
                        <h3>CyrptoList Recruiting</h3>
                        <img src='/assets/magnifying_glass_icon.png'/>
                    </div>
                    <p>Recruit from a pool of highly talented job-seekers. Fill short-term and long-term jobs. </p>
                    <Link className='product-button second' to='/jobs/new'>Find your next employee</Link>
                </div>
            </div>
        </div>
    )
};