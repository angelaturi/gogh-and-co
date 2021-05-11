# == Schema Information
#
# Table name: galleries
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Gallery < ApplicationRecord
    validates :title, length: {minimum: 1, maximum: 150}
    validates :description, length: {maximum: 800}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :collected_artworks,
        foreign_key: :gallery_id,
        class_name: :CollectedArtwork

    has_many :artworks,
        through: :collected_artworks,
        source: :artwork

end
