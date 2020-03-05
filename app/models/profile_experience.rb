class ProfileExperience < ApplicationRecord
    validates :profile_id, :company_role, :company_name, presence: true

    belongs_to :profile
end
