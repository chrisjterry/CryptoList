class Application < ApplicationRecord
    validates :note, presence: true

    belongs_to :applicant, class_name: :User
    belongs_to :job
end
