json.extract! gallery, :id, :title, :description, :user_id

json.set! :artworks do 
    if gallery.artworks.empty?
        {}
    else
        json.array! gallery.artworks, partial: 'api/artworks/artwork', as: :artwork
    end
end