Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resources :profiles, only: [:show, :update]
    resources :profile_experiences, only: [:create, :update, :destroy]
    resources :profile_projects, only: [:create, :update, :destroy]
    resources :profile_educations, only: [:create, :update, :destroy]
  end
end
