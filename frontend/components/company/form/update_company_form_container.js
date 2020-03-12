import { connect } from 'react-redux';
import {
    fetchCompany,
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

const mapStateToProps = (state, ownProps) => ({
    company: Object.values(state.entities.companies)[0],
    errors: state.errors.company,
    formType: 'Update Your Company Profile',
    update: true,
    employees: Object.values(state.entities.companyEmployees),
    perks: Object.values(state.entities.companyPerks),
    investors: Object.values(state.entities.companyInvestors)
});

const mapDispatchToProps = dispatch => ({
    updateCompany: company => dispatch(updateCompany(company)),
    fetchCompany: companyId => dispatch(fetchCompany(companyId)),
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