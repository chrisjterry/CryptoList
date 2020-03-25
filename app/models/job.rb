class Job < ApplicationRecord
    validates :job_title, :description, :location, :job_type, :currency, presence: true
    validates :salary, :years_experience, numericality: { only_integer: true }

    belongs_to :owner, class_name: :User
    belongs_to :company
end
