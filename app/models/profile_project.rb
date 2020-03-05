class ProfileProject < ApplicationRecord
    validates :profile_id, :project_title, :project_link, presence: true

    belongs_to :profile
end
