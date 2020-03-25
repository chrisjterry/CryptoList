class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.integer :owner_id, null: false
      t.integer :company_id, null: false
      t.string :job_title, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.string :job_type, null: false
      t.integer :salary, null: false
      t.string :currency, null: false
      t.integer :years_experience, null: false
      t.timestamps
    end

    add_index :jobs, :owner_id
    add_index :jobs, :company_id
  end
end
