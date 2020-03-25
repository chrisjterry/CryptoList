import { connect } from 'react-redux';
import { fetchJobs } from '../../../actions/job_actions';
import JobIndex from './jobs_index';

const mapStateToProps = state => ({
    jobs: Object.values(state.entities.jobs.all),
});

const mapDispatchToProps = dispatch => ({
    fetchJobs: () => dispatch(fetchJobs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobIndex);