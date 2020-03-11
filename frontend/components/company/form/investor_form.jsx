import React from 'react';

export default ({ investor, deleteCompanyInvestor }) => (
    <div>
        <p>{investor.investor_name}</p>
        <button onClick={() => deleteCompanyInvestor(investor.id)}>X</button>
    </div>
);