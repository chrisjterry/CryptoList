Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:create, :destroy]

    resources :profiles, only: [:show, :update]
    resources :profile_experiences, only: [:create, :update, :destroy]
    resources :profile_projects, only: [:create, :update, :destroy]
    resources :profile_educations, only: [:create, :update, :destroy]
    
    resources :companies, only: [:show, :create, :update]
    resources :company_employees, only: [:create, :destroy]
    resources :company_perks, only: [:create, :destroy]
    resources :company_investors, only: [:create, :destroy]

    resources :jobs, only: [:index, :show, :create]
  end
end