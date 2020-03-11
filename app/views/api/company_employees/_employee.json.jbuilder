json.set! employee.id do
    json.extract! employee, :id, :employee_id, :company_id
    json.name employee.user.name
end