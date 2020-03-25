export const fetchApplication = jobId => (
    $.ajax({
        url: `/api/applications/${jobId}`
    })
);

export const createApplication = application => (
    $.ajax({
        url: `/api/applications`,
        method: 'POST',
        data: { application }
    })
);
