current_user.projects.each do |project|
    json.partial! '/api/profile_projects/project', project: project
end