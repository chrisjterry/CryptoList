class CreateCompanyEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :company_employees do |t|
      t.integer :employee_id, null: false
      t.integer :company_id, null: false
      t.timestamps
    end

    add_index :company_employees, :employee_id
    add_index :company_employees, :company_id
  end
end
