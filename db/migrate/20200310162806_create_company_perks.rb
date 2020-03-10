class CreateCompanyPerks < ActiveRecord::Migration[5.2]
  def change
    create_table :company_perks do |t|
      t.integer :company_id, null: false
      t.string :perk_description, null: false
      t.timestamps
    end

    add_index :company_perks, :company_id
  end
end
