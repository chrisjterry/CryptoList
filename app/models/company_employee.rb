class CompanyEmployee < ApplicationRecord
    validates :employee_id, :company_id, presence: true

    belongs_to :company
    belongs_to :user, foreign_key: :employee_id
end
