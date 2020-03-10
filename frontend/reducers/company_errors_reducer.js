import { 
    RECEIVE_COMPANY_ERRORS, 
    CLEAR_COMPANY_ERRORS, 
    RECEIVE_COMPANY,
    RECEIVE_EMPLOYEES,
    RECEIVE_EMPLOYEE,
    RECEIVE_PERKS,
    RECEIVE_PERK,
    RECEIVE_INVESTORS,
    RECEIVE_INVESTOR 
} from '../actions/company_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COMPANY_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_COMPANY_ERRORS:
            return [];
        case RECEIVE_COMPANY:
            return [];
        case RECEIVE_EMPLOYEES:
            return [];
        case RECEIVE_EMPLOYEE:
            return [];
        case RECEIVE_PERKS:
            return [];
        case RECEIVE_PERK:
            return [];
        case RECEIVE_INVESTORS:
            return [];
        case RECEIVE_INVESTOR:
            return [];
        default:
            return state;
    }
}