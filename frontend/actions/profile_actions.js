import * as ProfileAPI from '../util/profile_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_EXPERIENCES = 'RECEIVE_EXPERIENCES';
export const RECEIVE_EXPERIENCE = 'RECEIVE_EXPERIENCE';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_EDUCATIONS = 'RECEIVE_EDUCATIONS';
export const RECEIVE_EDUCATION = 'RECEIVE_EDUCATION';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';
export const CLEAR_PROFILE_ERRORS = 'CLEAR_PROFILE_ERRORS';

const receiveProfile = profile => ({
    type: RECEIVE_PROFILE,
    profile
});

const receiveExperiences = experiences => ({
    type: RECEIVE_EXPERIENCES,
    experiences
});

const receiveExperience = experience => ({
    type: RECEIVE_EXPERIENCE,
    experience
});

const receiveProjects = projects => ({
    type: RECEIVE_PROJECTS,
    projects
});

const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
});

const receiveEducations = educations => ({
    type: RECEIVE_EDUCATIONS,
    educations
});

const receiveEducation = education => ({
    type: RECEIVE_EDUCATION,
    education
});

const receiveProfileErrors = errors => ({
    type: RECEIVE_PROFILE_ERRORS,
    errors
});

export const fetchProfile = profileId => dispatch => ProfileAPI.fetchProfile(profileId)
    .then(profile => dispatch(receiveProfile(profile)));

export const updateProfile = profile => dispatch => ProfileAPI.updateProfile(profile)
    .then(profile => dispatch(receiveProfile(profile)),
    errors => dispatch(receiveProfileErrors(errors)));

export const createProfileExperience = profileExperience => dispatch => ProfileAPI.createProfileExperience(profileExperience)
    .then(profileExperience => dispatch(receiveExperience(profileExperience)),
    errors => dispatch(receiveProfileErrors(errors)));

export const updateProfileExperience = profileExperience => dispatch => ProfileAPI.updateProfileExperience(profileExperience)
    .then(profileExperience => dispatch(receiveExperience(profileExperience)),
    errors => dispatch(receiveProfileErrors(errors)));

export const deleteProfileExperience = profileExperienceId => dispatch => ProfileAPI.deleteProfileExperience(profileExperienceId)
    .then(profileExperiences => dispatch(receiveExperiences(profileExperiences)),
    errors => dispatch(receiveProfileErrors(errors)));

export const createProfileProject = profileProject => dispatch => ProfileAPI.createProfileProject(profileProject)
    .then(profileProject => dispatch(receiveProject(profileProject)),
    errors => dispatch(receiveProfileErrors(errors)));

export const updateProfileProject = profileProject => dispatch => ProfileAPI.updateProfileProject(profileProject)
    .then(profileProject => dispatch(receiveProject(profileProject)),
    errors => dispatch(receiveProfileErrors(errors)));

export const deleteProfileProject = profileProjectId => dispatch => ProfileAPI.deleteProfileProject(profileProjectId)
    .then(profileProjects => dispatch(receiveProjects(profileProjects)),
    errors => dispatch(receiveProfileErrors(errors)));

export const createProfileEducation = profileEducation => dispatch => ProfileAPI.createProfileEducation(profileEducation)
    .then(profileEducation => dispatch(receiveEducation(profileEducation)),
    errors => dispatch(receiveProfileErrors(errors)));

export const updateProfileEducation = profileEducation => dispatch => ProfileAPI.updateProfileEducation(profileEducation)
    .then(profileEducation => dispatch(receiveEducation(profileEducation)),
    errors => dispatch(receiveProfileErrors(errors)));

export const deleteProfileEducation = profileEducationId => dispatch => ProfileAPI.deleteProfileEducation(profileEducationId)
    .then(profileEducations => dispatch(receiveEducations(profileEducations)),
    errors => dispatch(receiveProfileErrors(errors)));

export const clearProfileErrors = () => ({
        type: CLEAR_PROFILE_ERRORS
    });