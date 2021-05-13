# == Schema Information
#
# Table name: artworks
#
#  id                   :bigint           not null, primary key
#  title                :string           not null
#  creator_id           :integer          not null
#  date_created         :date             not null
#  color                :string           not null
#  style                :string           not null
#  medium               :string           not null
#  partner_organization :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
class Artwork < ApplicationRecord
    validates :title, :date_created, :color, :style, :medium, :partner_organization, presence: true

    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: :Artist

    has_many :favorites,
        foreign_key: :artwork_id,
        class_name: :Favorite
    
    has_many :collected_artworks,
        foreign_key: :artwork_id,
        class_name: :CollectedArtwork

    has_one_attached :photo
    
end
