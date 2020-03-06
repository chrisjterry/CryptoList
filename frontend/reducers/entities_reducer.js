import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import profilesReducer from './profiles_reducer';
import profileExperiencesReducer from './profile_experiences_reducer'
import profileProjectsReducer from './profile_projects_reducer'
import profileEducationsReducer from './profile_educations_reducer'

export default combineReducers({
    users: usersReducer,
    profiles: profilesReducer,
    profileExperiences: profileExperiencesReducer,
    profileProjects: profileProjectsReducer,
    profileEducations: profileEducationsReducer
});