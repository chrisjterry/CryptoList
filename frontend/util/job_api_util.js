export const fetchJobs = () => (
    $.ajax({
        url: `/api/jobs`
    })
);

export const fetchJob = jobId => (
    $.ajax({
        url: `/api/jobs/${jobId}`
    })
);

export const createJob = job => (
    $.ajax({
        url: `/api/jobs`,
        method: 'POST',
        data: { job }
    })
);
