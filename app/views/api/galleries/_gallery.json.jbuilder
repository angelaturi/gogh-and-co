json.extract! gallery, :id, :title, :description, :user_id

json.set! :firstArtwork do 
    if gallery.artworks.empty?
        {}
    else
        json.partial! gallery.artworks, partial: 'api/artworks/artwork', as: :artwork
    end
end