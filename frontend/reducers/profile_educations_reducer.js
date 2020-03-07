import { RECEIVE_PROFILE, RECEIVE_EDUCATIONS, RECEIVE_EDUCATION } from '../actions/profile_actions';

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_PROFILE:
            if (action.profile.profileEducations) {
                return action.profile.profileEducations;
            } else {
                return {};
            }
        case RECEIVE_EDUCATIONS:
            return action.educations;
        case RECEIVE_EDUCATION:
            return Object.assign({}, state, action.education);
        default:
            return state;
    }
}