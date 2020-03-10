class Company < ApplicationRecord
    validates :owner_id, :company_name, presence: true

    belongs_to :owner, class_name: :User
    has_many :employees, class_name: :CompanyEmployee, dependent: :destroy
    has_many :perks, class_name: :CompanyPerk, dependent: :destroy
    has_many :investors, class_name: :CompanyInvestor, dependent: :destroy
    has_one_attached :company_logo
end