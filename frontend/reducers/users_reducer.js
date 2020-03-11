import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_COMPANY } from '../actions/company_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_COMPANY:
            return Object.assign({}, state, { [action.company.user.id]: action.company.user })
        default:
            return state;
    }
}