current_user.projects.each do |project|
    project.id do
        json.partial! '/api/profile_projects/project', project: project
    end
end