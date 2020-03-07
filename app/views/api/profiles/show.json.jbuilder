json.profileCore do
    json.set! @profile.id do
        json.extract! @profile, :id, :user_id, :bio, :role, :location, :about, :achievements, :skills
        json.name @profile.user.name 
    end
end

json.profileExperiences do
    @profile.profile_experiences.each do |experience|
        json.partial! '/api/profile_experiences/experience', experience: experience
    end
end

json.profileProjects do
    @profile.profile_projects.each do |project|
        json.partial! '/api/profile_projects/project', project: project
    end
end

json.profileEducations do
    @profile.profile_educations.each do |education|
        json.partial! '/api/profile_educations/education', education: education
    end
end