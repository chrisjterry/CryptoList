import { RECEIVE_COMPANY } from '../actions/company_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_COMPANY:
            return action.company.companyCore;
        default:
            return state;
    }
}