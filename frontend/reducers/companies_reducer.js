import { RECEIVE_COMPANY } from '../actions/company_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_COMPANY:
            return action.company.companyCore;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}