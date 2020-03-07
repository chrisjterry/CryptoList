import { RECEIVE_PROFILE, RECEIVE_PROJECTS, RECEIVE_PROJECT } from '../actions/profile_actions';

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_PROFILE:
            if (action.profile.profileProjects) {
                return action.profile.profileProjects;
            } else {
                return {};
            }
        case RECEIVE_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.project);
        default:
            return state;
    }
}