# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    User.destroy_all
    Profile.destroy_all
    ProfileExperience.destroy_all
    ProfileProject.destroy_all
    ProfileEducation.destroy_all
    
    u1 = User.create!(name: 'Elon Musk', email: 'emusk@aa.io', password: 'password')
    
    # p1 = Profile.create!(
    #     user: u1,
    #     bio: 'Saving the world', 
    #     role: 'Engineering', 
    #     location: 'Los Angeles', 
    #     about: 'I enjoy starting companies', 
    #     achievements: 'Exited PayPal + SolarCity', 
    #     skills: 'Mechanical Engineering'
    # )

    # ProfileExperience.create!(profile: p1, employee_title: 'CEO', company_name: 'SpaceX')
    # ProfileProject.create!(profile: p1, project_title: 'Automaker Website', project_link: 'tesla.com')
    # ProfileEducation.create!(profile: p1, school_name: 'Stanford', graduation_year: 1995)
    
    u2 = User.create!(name: 'Jeff Bezos', email: 'jbezos@aa.io', password: 'password')
    
    # p2 = Profile.create!(
    #     user: u2,
    #     bio: 'Taking over the world', 
    #     role: 'Management', 
    #     location: 'Seattle', 
    #     about: 'I enjoy breakfast octopus', 
    #     achievements: 'Transformed a book company into Amazon', 
    #     skills: 'Financial Analysis'
    # )

    # ProfileExperience.create!(profile: p2, employee_title: 'CEO', company_name: 'Amazon')
    # ProfileProject.create!(profile: p2, project_title: 'Ecommerce Website', project_link: 'amazon.com')
    # ProfileEducation.create!(profile: p2, school_name: 'Princeton', graduation_year: 1986)
    
    u3 = User.create!(name: 'Mark Zuckerberg', email: 'mzuckerberg@aa.io', password: 'password')
    
    # p3 = Profile.create!(
    #     user: u3,
    #     bio: 'Not invading your privacy', 
    #     role: 'Software', 
    #     location: 'Palo Alto', 
    #     about: 'I enjoy smoking meats', 
    #     achievements: 'Survived congressional testimony', 
    #     skills: 'C++'
    # )
    
    # ProfileExperience.create!(profile: p3, employee_title: 'CEO', company_name: 'Facebook')
    # ProfileProject.create!(profile: p3, project_title: 'Spy Website', project_link: 'facebook.com')
    # ProfileEducation.create!(profile: p3, school_name: 'Harvard', graduation_year: 2003)

    u4 = User.create!(name: 'Bruce Wayne', email: 'bwayne@aa.io', password: 'password')
    u5 = User.create!(name: 'Scott Beiser', email: 'sbeiser@aa.io', password: 'password')
end
