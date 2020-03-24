@jobs.each do |job|
    json.partial! '/api/jobs/job', job: job
end