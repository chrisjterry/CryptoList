class ProfileExperience < ApplicationRecord
    validates :profile_id, :employee_title, :company_name, presence: true

    belongs_to :profile
end
