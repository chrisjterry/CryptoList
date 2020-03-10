import { RECEIVE_COMPANY, RECEIVE_PERKS, RECEIVE_PERK } from '../actions/company_actions';

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_COMPANY:
            if (action.company.companyPerks) {
                return action.company.companyPerks;
            } else {
                return {};
            }
        case RECEIVE_PERKS:
            return action.perks;
        case RECEIVE_PERK:
            return Object.assign({}, state, action.perk);
        default:
            return state;
    }
}