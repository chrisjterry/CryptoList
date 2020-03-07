class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.string :bio, default: ''
      t.string :role, default: ''
      t.string :location, default: ''
      t.text :about, default: ''
      t.text :achievements, default: ''
      t.text :skills, default: ''
      t.timestamps
    end

    add_index :profiles, :user_id, unique: true
  end
end
