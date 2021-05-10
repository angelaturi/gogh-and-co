class Api::CollectedArtworksController < ApplicationController

    def create
        @gallery = Gallery.last
        if params[:collectedArtworks]
            params[:collectedArtworks].each do |artwork_id|
                CollectedArtwork.create(artwork_id: artwork_id, gallery_id: @gallery.id)
            end
        end
        render 'api/galleries/show'
    end

    def recollect
        @gallery = Gallery.find_by(id: params[:id])
        CollectedArtwork.delete_all(gallery_id: params[:id])
        if params[:collectedArtworks]
            params[:collectedArtworks].each do |artwork_id|
                CollectedArtwork.create(artwork_id: artwork_id, gallery_id: @gallery.id)
            end
        end
        render 'api/galleries/show'
    end
end