json.set! investor.id do
    json.extract! investor, :id, :investor_name, :company_id
end