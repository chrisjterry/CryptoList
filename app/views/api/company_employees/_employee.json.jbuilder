json.set! employee.id do
    json.extract! employee, :id, :employee_id, :company_id
    json.name employee.user.name
    if User.find(employee.employee_id).profile.profile_picture.attached?
        json.profile_picture_url url_for(User.find(employee.employee_id).profile.profile_picture)
    end
end