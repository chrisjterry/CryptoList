import { RECEIVE_JOBS, RECEIVE_JOB } from '../actions/job_actions';

export default (state = { all: {}, current: {} }, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_JOBS:
            let newJobsState = Object.assign({}, state);
            newJobsState.all = action.jobs
            return newJobsState;
        case RECEIVE_JOB:
            let newJobState = Object.assign({}, state);
            newJobState.current = action.job
            return newJobState;
        default:
            return state;
    }
}