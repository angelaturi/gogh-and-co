# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  born       :date             not null
#  died       :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Artist < ApplicationRecord
    validates :name, :born, :died, presence: true

    has_many :artworks,
        foreign_key: :creator_id,
        class_name: :Artwork
end
