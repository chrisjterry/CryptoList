import { RECEIVE_COMPANY, RECEIVE_INVESTORS, RECEIVE_INVESTOR } from '../actions/company_actions';

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_COMPANY:
            if (action.company.companyInvestors) {
                return action.company.companyInvestors;
            } else {
                return {};
            }
        case RECEIVE_INVESTORS:
            return action.investors;
        case RECEIVE_INVESTOR:
            return Object.assign({}, state, action.investor);
        default:
            return state;
    }
}