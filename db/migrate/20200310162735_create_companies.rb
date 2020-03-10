class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.integer :owner_id, null: false
      t.string :company_name, null: false
      t.string :website
      t.string :location
      t.integer :headcount
      t.string :tagline
      t.text :overview
      t.text :culture
      t.integer :amount_raised
      t.integer :total_rounds
      t.timestamps
    end

    add_index :companies, :owner_id, unique: true
  end
end
