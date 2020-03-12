import { connect } from 'react-redux';
import {
    createCompany,
    updateCompany,
    createCompanyEmployee,
    deleteCompanyEmployee,
    createCompanyPerk,
    deleteCompanyPerk,
    createCompanyInvestor,
    deleteCompanyInvestor,
    clearCompanyErrors
} from '../../../actions/company_actions';
import CompanyForm from './company_form';

const mapStateToProps = state => ({
    company: Object.values(state.entities.companies)[0],
    errors: state.errors.company,
    formType: 'Create a Company Profile',
    update: false,
    employees: Object.values(state.entities.companyEmployees),
    perks: Object.values(state.entities.companyPerks),
    investors: Object.values(state.entities.companyInvestors)
});

const mapDispatchToProps = dispatch => ({
    createCompany: company => dispatch(createCompany(company)),
    updateCompany: company => dispatch(updateCompany(company)),
    createCompanyEmployee: employeeName => dispatch(createCompanyEmployee(employeeName)),
    deleteCompanyEmployee: companyEmployeeId => dispatch(deleteCompanyEmployee(companyEmployeeId)),
    createCompanyPerk: perkDescription => dispatch(createCompanyPerk(perkDescription)),
    deleteCompanyPerk: companyPerkId => dispatch(deleteCompanyPerk(companyPerkId)),
    createCompanyInvestor: investorName => dispatch(createCompanyInvestor(investorName)),
    deleteCompanyInvestor: companyInvestorId => dispatch(deleteCompanyInvestor(companyInvestorId)),
    clearCompanyErrors: () => dispatch(clearCompanyErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyForm);