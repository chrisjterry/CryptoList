class Company < ApplicationRecord
    validates :owner_id, :company_name, presence: true
    validates :owner_id, uniqueness: { message: "may not have more than one company per profile" }
    validates :website, format: URI::regexp(%w[http https]), allow_blank: true
    validates :amount_raised, :total_rounds, :valuation, numericality: { only_integer: true, allow_nil: true }

    belongs_to :owner, class_name: :User
    has_many :employees, class_name: :CompanyEmployee, dependent: :destroy
    has_many :perks, class_name: :CompanyPerk, dependent: :destroy
    has_many :investors, class_name: :CompanyInvestor, dependent: :destroy
    has_one_attached :company_logo
    has_many :jobs
end