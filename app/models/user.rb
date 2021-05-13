# == Schema Information
#
# Table name: users
#
#  id                :bigint           not null, primary key
#  email             :string           not null
#  first_name        :string           not null
#  last_name         :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  profile_image_url :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :first_name, :last_name, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 8, allow_nil: true}

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :favorites,
        foreign_key: :favoriter_id,
        class_name: :Favorite

    has_many :galleries,
        foreign_key: :user_id,
        class_name: :Gallery

    has_many :artworks,
        through: :favorites,
        source: :artwork

    has_many :collected_artworks,
        through: :galleries,
        source: :collected_artworks

    has_one_attached :photo

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
end
