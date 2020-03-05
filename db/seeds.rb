# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    User.destroy_all
  
    u1 = User.create!(name: 'Elon Musk', email: 'emusk@aa.io', password: 'password')
    u2 = User.create!(name: 'Jeff Bezos', email: 'jbezos@aa.io', password: 'password')
    u3 = User.create!(name: 'Mark Zuckerberg', email: 'mzuckerberg@aa.io', password: 'password')
    u4 = User.create!(name: 'Peter Thiel', email: 'pthiel@aa.io', password: 'password')
      
end
  