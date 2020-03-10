class CompanyInvestor < ApplicationRecord
    validates :company_id, :investor_name,  presence: true

    belongs_to :company
end
