import { 
    RECEIVE_APPLICATION_ERRORS, 
    CLEAR_APPLICATION_ERRORS, 
    RECEIVE_APPLICATION,
} from '../actions/application_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_APPLICATION_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_APPLICATION_ERRORS:
            return [];
        case RECEIVE_APPLICATION:
            return [];
        default:
            return state;
    }
}