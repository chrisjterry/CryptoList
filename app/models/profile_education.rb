class ProfileEducation < ApplicationRecord
    validates :profile_id, :school_name, :graduation_year, presence: true

    belongs_to :profile
end
