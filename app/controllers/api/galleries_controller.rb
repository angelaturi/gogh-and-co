class Api::GalleriesController < ApplicationController
    
    def index
        @galleries = Gallery.all
    end
    
    def create
        @gallery = Gallery.new(gallery_params)
        @gallery.user_id = current_user.id
        if @gallery.save
            # render 'api/gallery/show'
            render json: @gallery
        else
            render json: @gallery.errors.full_messages, status: 422
        end
    end

    def show
        @gallery = Gallery.find_by(id: params[:id])
    end

    def update
        @gallery = Gallery.find_by(id: params[:id])
        if @gallery.update
            render json: {}
        else
            render json: @gallery.errors.full_messages, status: 422
        end
    end

    def destroy
        @gallery = Gallery.find_by(id: params[:id])
        @gallery.destroy
        render json: {}
    end

    def favorites
        @galleries = current_user.galleries
    end

    private
    
    def gallery_params
        params.require(:gallery).permit(:title, :description)
    end


end