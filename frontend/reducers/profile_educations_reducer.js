import { RECEIVE_PROFILE, RECEIVE_EDUCATIONS, RECEIVE_EDUCATION } from '../actions/profile_actions';

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_PROFILE:
            return action.profile.profileEducations;
        case RECEIVE_EDUCATIONS:
            return action.educations;
        case RECEIVE_EDUCATION:
            return Object.assign({}, state, action.education);
        default:
            return state;
    }
}