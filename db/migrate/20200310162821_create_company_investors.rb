class CreateCompanyInvestors < ActiveRecord::Migration[5.2]
  def change
    create_table :company_investors do |t|
      t.integer :company_id, null: false
      t.string :investor_name, null: false
      t.timestamps
    end

    add_index :company_investors, :company_id
  end
end
