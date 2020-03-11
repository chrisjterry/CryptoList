import * as CompanyAPI from '../util/company_api_util';

export const RECEIVE_COMPANY =  'RECEIVE_COMPANY';
export const RECEIVE_EMPLOYEES =  'RECEIVE_EMPLOYEES';
export const RECEIVE_EMPLOYEE =  'RECEIVE_EMPLOYEE';
export const RECEIVE_PERKS =  'RECEIVE_PERKS';
export const RECEIVE_PERK =  'RECEIVE_PERK';
export const RECEIVE_INVESTORS =  'RECEIVE_INVESTORS';
export const RECEIVE_INVESTOR =  'RECEIVE_INVESTOR';
export const RECEIVE_COMPANY_ERRORS =  'RECEIVE_COMPANY_ERRORS';
export const CLEAR_COMPANY_ERRORS =  'CLEAR_COMPANY_ERRORS';

const receiveCompany = company => ({
    type: RECEIVE_COMPANY,
    company
});

const receiveEmployees = employees => ({
    type: RECEIVE_EMPLOYEES,
    employees
});

const receiveEmployee = employee => ({
    type: RECEIVE_EMPLOYEE,
    employee
});

const receivePerks = perks => ({
    type: RECEIVE_PERKS,
    perks
});

const receivePerk = perk => ({
    type: RECEIVE_PERK,
    perk
});

const receiveInvestors = investors => ({
    type: RECEIVE_INVESTORS,
    investors
});

const receiveInvestor = investor => ({
    type: RECEIVE_INVESTOR,
    investor
});

const receiveCompanyErrors = errors => ({
    type: RECEIVE_COMPANY_ERRORS,
    errors
});

export const fetchCompany = companyId => dispatch => CompanyAPI.fetchCompany(companyId)
    .then(company => dispatch(receiveCompany(company)));

export const createCompany = company => dispatch => CompanyAPI.createCompany(company)
    .then(company => dispatch(receiveCompany(company)),
    errors => dispatch(receiveCompanyErrors(errors)));

export const updateCompany = company => dispatch => CompanyAPI.updateCompany(company)
    .then(company => dispatch(receiveCompany(company)),
    errors => dispatch(receiveCompanyErrors(errors)));

export const createCompanyEmployee = employeeName => dispatch => CompanyAPI.createCompanyEmployee(employeeName)
    .then(employee => dispatch(receiveEmployee(employee)),
    errors => dispatch(receiveCompanyErrors(errors)));

export const deleteCompanyEmployee = companyEmployeeId => dispatch => CompanyAPI.deleteCompanyEmployee(companyEmployeeId)
    .then(employees => dispatch(receiveEmployees(employees)),
    errors => dispatch(receiveCompanyErrors(errors)));

export const createCompanyPerk = perkDescription => dispatch => CompanyAPI.createCompanyPerk(perkDescription)
    .then(perk => dispatch(receivePerk(perk)),
    errors => dispatch(receiveCompanyErrors(errors)));

export const deleteCompanyPerk = companyPerkId => dispatch => CompanyAPI.deleteCompanyPerk(companyPerkId)
    .then(perks => dispatch(receivePerks(perks)),
    errors => dispatch(receiveCompanyErrors(errors)));

export const createCompanyInvestor = investorName => dispatch => CompanyAPI.createCompanyInvestor(investorName)
    .then(investor => dispatch(receiveInvestor(investor)),
    errors => dispatch(receiveCompanyErrors(errors)));

export const deleteCompanyInvestor = companyInvestorId => dispatch => CompanyAPI.deleteCompanyInvestor(companyInvestorId)
    .then(investors => dispatch(receiveInvestors(investors)),
    errors => dispatch(receiveCompanyErrors(errors)));

export const clearCompanyErrors = () => ({
    type: CLEAR_COMPANY_ERRORS
});