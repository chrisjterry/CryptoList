current_user.company.employees.each do |employee|
    json.partial! '/api/company_employees/employee', employee: employee
end