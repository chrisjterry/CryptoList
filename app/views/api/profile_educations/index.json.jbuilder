current_user.educations.each do |education|
    json.partial! '/api/profile_educations/education', education: education
end