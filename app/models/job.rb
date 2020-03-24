class Job < ApplicationRecord
    validates :description, :location, :job_type, :salary, :currency, :years_experience, presence: true
    validates :salary, :years_experience, numericality: { only_integer: true }

    belongs_to :owner, class_name: :User
    belongs_to :company
end
