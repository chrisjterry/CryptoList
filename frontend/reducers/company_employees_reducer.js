import { RECEIVE_COMPANY, RECEIVE_EMPLOYEES, RECEIVE_EMPLOYEE } from '../actions/company_actions';

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_COMPANY:
            if (action.company.companyEmployees) {
                return action.company.companyEmployees;
            } else {
                return {};
            }
        case RECEIVE_EMPLOYEES:
            return action.employees;
        case RECEIVE_EMPLOYEE:
            return Object.assign({}, state, action.employee);
        default:
            return state;
    }
}