import { connect } from 'react-redux';
import { createProfileExperience, updateProfileExperience, deleteProfileExperience } from '../../../../actions/profile_actions';
import ExperienceForm from './experience_form';

const mapStateToProps = state => ({
    profileId: Object.keys(state.entities.profiles)[0],
    experiences: Object.values(state.entities.profileExperiences)
})

const mapDispatchToProps = dispatch => ({
    createProfileExperience: experience => dispatch(createProfileExperience(experience)),
    updateProfileExperience: experience => dispatch(updateProfileExperience(experience)),
    deleteProfileExperience: experienceId => dispatch(deleteProfileExperience(experienceId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExperienceForm);