import { connect } from 'react-redux';
import { createJob, clearJobErrors } from '../../../actions/job_actions';
import JobForm from './job_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.job,
    companyName: state.entities.users[state.session.id].company_name,
    currentJob: Object.values(state.entities.jobs.current)[0]
});

const mapDispatchToProps = dispatch => ({
    createJob: job => dispatch(createJob(job)),
    clearJobErrors: () => dispatch(clearJobErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobForm);