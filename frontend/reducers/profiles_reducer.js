import { RECEIVE_PROFILE } from '../actions/profile_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_PROFILE:
            return action.profile.profileCore;
        default:
            return state;
    }
}