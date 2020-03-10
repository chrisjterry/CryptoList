export const fetchProfile = userId => (
    $.ajax({
        url: `/api/profiles/${userId}`
    })
);

export const updateProfile = profile => (
    $.ajax({
        url: `/api/profiles/${profile.id}`,
        method: 'POST',
        data: profile,
        processData: false,
        contentType: false
    })
);

export const createProfileExperience = profile_experience => (
    $.ajax({
        url: `/api/profile_experiences`,
        method: 'POST',
        data: { profile_experience }
    })
);

export const updateProfileExperience = profile_experience => (
    $.ajax({
        url: `/api/profile_experiences/${profile_experience.id}`,
        method: 'PATCH',
        data: { profile_experience }
    })
);

export const deleteProfileExperience = profileExperienceId => (
    $.ajax({
        url: `/api/profile_experiences/${profileExperienceId}`,
        method: 'DELETE'
    })
);

export const createProfileProject = profile_project => (
    $.ajax({
        url: `/api/profile_projects`,
        method: 'POST',
        data: { profile_project }
    })
);

export const updateProfileProject = profile_project => (
    $.ajax({
        url: `/api/profile_projects/${profile_project.id}`,
        method: 'PATCH',
        data: { profile_project }
    })
);

export const deleteProfileProject = profileProjectId => (
    $.ajax({
        url: `/api/profile_projects/${profileProjectId}`,
        method: 'DELETE'
    })
);


export const createProfileEducation = profile_education => (
    $.ajax({
        url: `/api/profile_educations`,
        method: 'POST',
        data: { profile_education }
    })
);

export const updateProfileEducation = profile_education => (
    $.ajax({
        url: `/api/profile_educations/${profile_education.id}`,
        method: 'PATCH',
        data: { profile_education }
    })
);

export const deleteProfileEducation = profileEducationId => (
    $.ajax({
        url: `/api/profile_educations/${profileEducationId}`,
        method: 'DELETE'
    })
);