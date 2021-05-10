# == Schema Information
#
# Table name: collected_artworks
#
#  id         :bigint           not null, primary key
#  gallery_id :integer          not null
#  artwork_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CollectedArtwork < ApplicationRecord
    
    belongs_to :gallery,
        foreign_key: :gallery_id,
        class_name: :Gallery

    belongs_to :artwork,
        foreign_key: :artwork_id,
        class_name: :Artwork

end
