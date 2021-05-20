Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 

    resources :users, only: [:create, :show]

    resource :session, only: [:create, :destroy]

    get 'artworks/favorites', to: 'artworks#favorite'
    resources :artworks, only: [:index, :show, :create]
    post 'artworks/favorites', to: 'artworks#favorites'
    get 'artworks/gallery', to: 'artworks#gallery'

    resources :galleries, only: [:index, :create, :show, :destroy, :update]
    get 'galleries/favorites', to: 'galleries#favorites'

    resources :collected_artworks, only: [:create]
    post 'collected_artworks/recollect', to: 'collected_artworks#recollect'
    
  end

end
