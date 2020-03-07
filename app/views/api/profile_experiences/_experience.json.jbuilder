json.set! experience.id do
    json.extract! experience, :id, :profile_id, :employee_title, :company_name
end