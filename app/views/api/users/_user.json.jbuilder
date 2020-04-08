json.extract! user, :id, :email, :name
if user.company
    json.company_name user.company.company_name
    json.company_id user.company.id
end
if user.profile.profile_picture.attached?
    json.profile_picture_url url_for(user.profile.profile_picture)
end