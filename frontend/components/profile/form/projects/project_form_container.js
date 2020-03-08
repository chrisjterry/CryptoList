import { connect } from 'react-redux';
import { createProfileProject, updateProfileProject, deleteProfileProject } from '../../../../actions/profile_actions';
import ProjectForm from './project_form';

const mapStateToProps = state => ({
    profileId: Object.keys(state.entities.profiles)[0],
    projects: Object.values(state.entities.profileProjects)
})

const mapDispatchToProps = dispatch => ({
    createProfileProject: project => dispatch(createProfileProject(project)),
    updateProfileProject: project => dispatch(updateProfileProject(project)),
    deleteProfileProject: projectId => dispatch(deleteProfileProject(projectId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectForm);