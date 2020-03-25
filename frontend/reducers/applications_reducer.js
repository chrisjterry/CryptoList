import { RECEIVE_APPLICATION } from '../actions/application_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_APPLICATION:
            return action.application;
        default:
            return state;
    }
}