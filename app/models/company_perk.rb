class CompanyPerk < ApplicationRecord
    validates :company_id, :perk_description,  presence: true

    belongs_to :company
end
