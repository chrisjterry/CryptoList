import { 
    RECEIVE_JOB_ERRORS, 
    CLEAR_JOB_ERRORS, 
    RECEIVE_JOBS,
    RECEIVE_JOB,
} from '../actions/job_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_JOB_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_JOB_ERRORS:
            return [];
        case RECEIVE_JOBS:
            return [];
        case RECEIVE_JOB:
            return [];
        default:
            return state;
    }
}