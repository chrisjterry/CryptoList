import { connect } from 'react-redux';
import { createProfileEducation, updateProfileEducation, deleteProfileEducation } from '../../../../actions/profile_actions';
import EducationForm from './education_form';

const mapStateToProps = state => ({
    profileId: Object.keys(state.entities.profiles)[0],
    educations: Object.values(state.entities.profileEducations)
})

const mapDispatchToProps = dispatch => ({
    createProfileEducation: education => dispatch(createProfileEducation(education)),
    updateProfileEducation: education => dispatch(updateProfileEducation(education)),
    deleteProfileEducation: educationId => dispatch(deleteProfileEducation(educationId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EducationForm);