json.set! job.id do 
    json.extract! job, :id, :owner_id, :company_id, :description, :location, :job_type, :salary, :currency, :years_experience
    json.company_name job.company.company_name
end