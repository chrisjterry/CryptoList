import { RECEIVE_PROFILE, RECEIVE_EXPERIENCES, RECEIVE_EXPERIENCE } from '../actions/profile_actions';

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_PROFILE:
            return action.profile.profileExperiences;
        case RECEIVE_EXPERIENCES:
            return action.experiences;
        case RECEIVE_EXPERIENCE:
            return Object.assign({}, state, action.experience);
        default:
            return state;
    }
}