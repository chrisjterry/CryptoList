import { connect } from 'react-redux';
import { fetchJob } from '../../../actions/job_actions';
import JobShow from './job_show';

const mapStateToProps = (state, ownProps) => ({
    job: Object.values(state.entities.jobs.current)[0],
});

const mapDispatchToProps = dispatch => ({
    fetchJob: jobId => dispatch(fetchJob(jobId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobShow);