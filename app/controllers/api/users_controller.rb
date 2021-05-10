class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status 422
        end
    end

    private 
    
    def user_params
        params.requier(:user).permit(:email, :password, :first_name, :last_name, :profile_image_url)
    end
end