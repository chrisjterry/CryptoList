class ProfileProject < ApplicationRecord
    validates :profile_id, :project_title, :project_link, presence: true
    validates :project_link, format: URI::regexp(%w[http https])

    belongs_to :profile
end
