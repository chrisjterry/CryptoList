class Profile < ApplicationRecord
    validates :user_id, presence: true

    belongs_to :user
    has_many :profile_experiences, dependent: :destroy
    has_many :profile_projects, dependent: :destroy
    has_many :profile_educations, dependent: :destroy
    has_one_attached :profile_picture
    has_one_attached :cover_photo
end
