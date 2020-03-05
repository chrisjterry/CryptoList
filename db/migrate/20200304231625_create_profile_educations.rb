class CreateProfileEducations < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_educations do |t|
      t.integer :profile_id, null: false
      t.string :school_name, null: false
      t.integer :graduation_year, null: false
      t.timestamps
    end

    add_index :profile_educations, :profile_id
  end
end
