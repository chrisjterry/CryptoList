import * as JobAPI from '../util/job_api_util';

export const RECEIVE_JOBS =  'RECEIVE_JOBS';
export const RECEIVE_JOB =  'RECEIVE_JOB';
export const RECEIVE_JOB_ERRORS =  'RECEIVE_JOB_ERRORS';
export const CLEAR_JOB_ERRORS =  'CLEAR_JOB_ERRORS';

const receiveJobs = jobs => ({
    type: RECEIVE_JOBS,
    jobs
});

const receiveJob = job => ({
    type: RECEIVE_JOB,
    job
});

const receiveJobErrors = errors => ({
    type: RECEIVE_JOB_ERRORS,
    errors
});

export const fetchJobs = () => dispatch => JobAPI.fetchJobs()
    .then(jobs => dispatch(receiveJobs(jobs)));

export const fetchJob = jobId => dispatch => JobAPI.fetchJob(jobId)
    .then(job => dispatch(receiveJob(job)));

export const createJob = job => dispatch => JobAPI.createJob(job)
    .then(job => dispatch(receiveJob(job)),
    errors => dispatch(receiveJobErrors(errors)));

export const clearJobErrors = () => ({
    type: CLEAR_JOB_ERRORS
});