class CreateProfileProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_projects do |t|
      t.integer :profile_id, null: false
      t.string :project_title, null: false
      t.string :project_link, null: false
      t.timestamps
    end

    add_index :profile_projects, :profile_id
  end
end
