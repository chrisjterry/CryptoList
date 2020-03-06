class User < ApplicationRecord
    validate :full_name
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true
    validates :password, length: { minimum: 8, allow_nil: true }
    after_initialize :ensure_session_token
    after_create_commit :create_profile

    attr_reader :password

    has_one :profile, dependent: :destroy
    has_many :experiences, through: :profile, source: :profile_experiences
    has_many :projects, through: :profile, source: :profile_projects
    has_many :educations, through: :profile, source: :profile_educations

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user: nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64(16)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(16)
        self.save!
        self.session_token
    end

    private
    def full_name
        if self.name.split.length < 2
            errors.add(:name, 'must include first and last name')
        end
    end

    def create_profile
        Profile.create(user_id: self.id)
    end
end