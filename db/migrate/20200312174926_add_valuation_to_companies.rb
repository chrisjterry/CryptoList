class AddValuationToCompanies < ActiveRecord::Migration[5.2]
  def change
    add_column :companies, :valuation, :integer
  end
end
