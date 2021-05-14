class Api::ArtworksController < ApplicationController
    
    def index 
        @artworks = Artwork.all
    end

    def show
        @artwork = Artwork.find(params[:id])
        render :show
    end

    def favorite
        @artwork = current_user.artworks.where(id: params[:id])
        if @artwork
            current_user.artworks.delete(@artwork)
        else
            Favorite.create(user_id: current_user.id, artwork_id: @artwork.id)
        end
    end

    def favorites
        @artworks = current_user.artworks
    end

    def gallery
        @gallery = Gallery.find(params[:id])
        @artworks = @gallery.artworks
    end


end