Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 

    resources :users, only: [:create]

    resource :session, only: [:create, :destroy]

    resources :artworks, only: [:index, :show]
    get 'artworks/favorite', to: 'artworks#favorite'
    post 'artworks/favorites', to: 'artworks#favorites'
    get 'artworks/gallery', to: 'artworks#gallery'

    resources :galleries, only: [:index, :create, :show, :destroy, :update]
    get 'galleries/favorites', to: 'galleries#favorites'

    resources :collected_artworks, only: [:create]
    get 'collected_artworks', to: 'collected_artworks#recollect'
    
  end

end
