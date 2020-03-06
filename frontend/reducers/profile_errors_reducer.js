import { 
    RECEIVE_PROFILE_ERRORS, 
    CLEAR_PROFILE_ERRORS, 
    RECEIVE_PROFILE,
    RECEIVE_EXPERIENCES,
    RECEIVE_EXPERIENCE,
    RECEIVE_PROJECTS,
    RECEIVE_PROJECT,
    RECEIVE_EDUCATIONS,
    RECEIVE_EDUCATION 
} from '../actions/profile_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROFILE_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_PROFILE_ERRORS:
            return [];
        case RECEIVE_PROFILE:
            return [];
        case RECEIVE_EXPERIENCES:
            return [];
        case RECEIVE_EXPERIENCE:
            return [];
        case RECEIVE_PROJECTS:
            return [];
        case RECEIVE_PROJECT:
            return [];
        case RECEIVE_EDUCATIONS:
            return [];
        case RECEIVE_EDUCATION:
            return [];
        default:
            return state;
    }
}