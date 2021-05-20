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

    def favorites
        @artwork = current_user.artworks.where(id: params[:id])
                puts "artwork foparamsund==>>#{params} current_user==>>#{current_user.inspect} length==>>#{@artwork.length}"
        puts "artwork found==>>#{@artwork.inspect}"
        if @artwork.length > 0
            current_user.artworks.delete(@artwork)
        else
            Favorite.create(favoriter_id: current_user.id, artwork_id: params[:id])
        end
    end

    def favorite
        artworks = current_user.artworks
            # .left_outer_joins(:favorites)
            # .select("artworks.*, favorites.*")
            render json: artworks

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