class CreateProfileExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_experiences do |t|
      t.integer :profile_id, null: false
      t.string :company_role, null: false
      t.string :company_name, null: false
      t.timestamps
    end

    add_index :profile_experiences, :profile_id
  end
end
