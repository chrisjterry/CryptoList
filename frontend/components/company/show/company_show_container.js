import { connect } from 'react-redux';
import { fetchCompany } from '../../../actions/company_actions';
import CompanyShow from './company_show';

const mapStateToProps = (state, ownProps) => ({
    company: Object.values(state.entities.companies)[0],
    employees: Object.values(state.entities.companyEmployees),
    perks: Object.values(state.entities.companyPerks),
    investors: Object.values(state.entities.companyInvestors)
});

const mapDispatchToProps = dispatch => ({
    fetchCompany: companyId => dispatch(fetchCompany(companyId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyShow);