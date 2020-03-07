json.set! experience.id do
    json.extract! experience, :id, :profile_id, :company_role, :company_name
end