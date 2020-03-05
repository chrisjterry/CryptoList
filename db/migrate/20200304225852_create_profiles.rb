class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.string :bio
      t.string :primary_role
      t.string :location
      t.text :about
      t.string :achievements
      t.string :skills
      t.timestamps
    end

    add_index :profiles, :user_id, unique: true
  end
end
