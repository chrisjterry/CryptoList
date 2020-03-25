import * as ApplicationAPI from '../util/application_api_util';

export const RECEIVE_APPLICATION =  'RECEIVE_APPLICATION';
export const RECEIVE_APPLICATION_ERRORS =  'RECEIVE_APPLICATION_ERRORS';
export const CLEAR_APPLICATION_ERRORS =  'CLEAR_APPLICATION_ERRORS';

const receiveApplication = application => ({
    type: RECEIVE_APPLICATION,
    application
});

const receiveApplicationErrors = errors => ({
    type: RECEIVE_APPLICATION_ERRORS,
    errors
});

export const fetchApplication = jobId => dispatch => JobAPI.fetchApplication(jobId)
    .then(app => dispatch(receiveApplication(app)));

export const createApplication = app => dispatch => JobAPI.createApplication(app)
    .then(app => dispatch(receiveApplication(app)),
    errors => dispatch(receiveApplicationErrors(errors)));

export const clearApplicationErrors = () => ({
    type: CLEAR_APPLICATION_ERRORS
});