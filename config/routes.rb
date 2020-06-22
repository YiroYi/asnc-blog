Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  # This are the routes for the POSTING METHOD
  resources :users do
    resources :posts, only: [:new, :create, :edit, :update]
  end

  # This are the end-points for our REST API that will be connected to the FRONT END.
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :posts, only: [ :index, :show, :create, :update, :destroy]
    end
  end
end
