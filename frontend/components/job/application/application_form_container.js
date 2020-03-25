import { connect } from 'react-redux';
import { fetchApplication, createApplication, clearApplicationErrors } from '../../../actions/application_actions';
import ApplicationForm from './application_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.application,
    existingApp: state.entities.applications
});

const mapDispatchToProps = dispatch => ({
    fetchApplication: jobId => dispatch(fetchApplication(jobId)),
    createApplication: app => dispatch(createApplication(app)),
    clearApplicationErrors: () => dispatch(clearApplicationErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplicationForm)