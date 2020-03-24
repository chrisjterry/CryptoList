import { RECEIVE_JOBS, RECEIVE_JOB } from '../actions/job_actions';

export default (state = { all: {}, current: {} }, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_JOBS:
            let newState = Object.assign({}, state);
            newState.all = action.jobs
            return newState;
        case RECEIVE_JOB:
            let newState = Object.assign({}, state);
            newState.current = action.job
            return newState;
        default:
            return state;
    }
}