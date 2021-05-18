class Api::ArtworksController < ApplicationController
    
    def index 
        @artworks = Artwork.all
    end

    def show
        @artwork = Artwork.find(params[:id])
        render :show
    end

    def create 
        @artwork = Artwork.new(artwork_params)
        if @artwork.save
            Favorite.create(artwork_id: @artwork.id, favoriter_id: current_user.id)
            render 'api/artworks/show'
        else
            render json: @artwork.errors.full_messages
        end
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
        # binding.pry
        @artworks = current_user.artworks
    end

    def gallery
        @gallery = Gallery.find(params[:id])
        @artworks = @gallery.artworks
    end

    private

    def artwork_params
        params.require(:artwork).permit(:title, :color, :style, :medium, :partner_organization)
    end

end