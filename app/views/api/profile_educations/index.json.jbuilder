current_user.educations.each do |education|
    education.id do
        json.partial! '/api/profile_educations/education', education: education
    end
end