json.extract! user, :id, :email, :name
json.company_name user.company.company_name
json.company_id user.company.id