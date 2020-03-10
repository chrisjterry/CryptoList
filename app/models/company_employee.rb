class CompanyEmployee < ApplicationRecord
    validates :employee_id, :company_id, presence: true

    belongs_to :company
end
