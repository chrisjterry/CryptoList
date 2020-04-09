export const fetchCompany = companyId => (
    $.ajax({
        url: `/api/companies/${companyId}`
    })
);

export const createCompany = company => (
    $.ajax({
        url: `/api/companies`,
        method: 'POST',
        data: { company }
    })
);

export const updateCompany = company => (
    $.ajax({
        url: `/api/companies/${company.id}`,
        method: 'POST',
        data: company,
        processData: false,
        contentType: false
    })
);

export const createCompanyEmployee = employeeName => (
    $.ajax({
        url: `/api/company_employees`,
        method: 'POST',
        data: { employee_name: employeeName }
    })
);

export const deleteCompanyEmployee = companyEmployeeId => (
    $.ajax({
        url: `/api/company_employees/${companyEmployeeId}`,
        method: 'DELETE'
    })
);

export const createCompanyPerk = perkDescription => (
    $.ajax({
        url: `/api/company_perks`,
        method: 'POST',
        data: { perk_description: perkDescription }
    })
);

export const deleteCompanyPerk = companyPerkId => (
    $.ajax({
        url: `/api/company_perks/${companyPerkId}`,
        method: 'DELETE'
    })
);

export const createCompanyInvestor = investorName => (
    $.ajax({
        url: `/api/company_investors`,
        method: 'POST',
        data: { investor_name: investorName }
    })
);

export const deleteCompanyInvestor = companyInvestorId => (
    $.ajax({
        url: `/api/company_investors/${companyInvestorId}`,
        method: 'DELETE'
    })
);