import React from 'react';

export default ({ employee, deleteCompanyEmployee }) => (
    <div>
        <p>{employee.name}</p>
        <button onClick={() => deleteCompanyEmployee(employee.id)}>X</button>
    </div>
);