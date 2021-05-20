class Api::CollectedArtworksController < ApplicationController

    def create
        @gallery = Gallery.last
        puts "create in ca==>>#{params}"
        if params[:collectedArtworks]
            params[:collectedArtworks].each do |artwork_id|
                collected_artwork = CollectedArtwork.new(artwork_id: artwork_id, gallery_id: @gallery.id)
                if collected_artwork.save
                    puts "collected_artwork created #{collected_artwork}"
                    #render json: collected_artwork
                else
                    puts "collected_artwork not created #{collected_artwork.errors.full_messages}"
                    #render json: artwork.errors.full_messages
                end
            end
        end
        #render 'api/galleries/show'
    end

    def recollect
        @gallery = Gallery.find_by(id: params[:id])
        CollectedArtwork.where(gallery_id: params[:id]).delete_all
        if params[:collectedArtworks]
            params[:collectedArtworks].each do |artwork_id|
                CollectedArtwork.create(artwork_id: artwork_id, gallery_id: @gallery.id)
            end
        end
        render 'api/galleries/show'
    end
end