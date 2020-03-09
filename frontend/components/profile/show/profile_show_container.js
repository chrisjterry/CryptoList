import { connect } from 'react-redux';
import { fetchProfile } from '../../../actions/profile_actions';
import ProfileShow from './profile_show';

const mapStateToProps = (state, ownProps) => ({
    profile: Object.values(state.entities.profiles)[0],
    experiences: Object.values(state.entities.profileExperiences),
    projects: Object.values(state.entities.profileProjects),
    educations: Object.values(state.entities.profileEducations)
});

const mapDispatchToProps = dispatch => ({
    fetchProfile: userId => dispatch(fetchProfile(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileShow);