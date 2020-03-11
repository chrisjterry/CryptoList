import React from 'react';

export default ({ perk, deleteCompanyPerk }) => (
    <div>
        <p>{perk.perk_description}</p>
        <button onClick={() => deleteCompanyPerk(perk.id)}>X</button>
    </div>
);