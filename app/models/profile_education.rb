class ProfileEducation < ApplicationRecord
    validates :profile_id, :school_name, :graduation_year, presence: true
    validates :graduation_year, numericality: { only_integer: true }

    belongs_to :profile
end
