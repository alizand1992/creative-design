Rails.application.routes.draw do
  root 'application#index'

  resources :contact, only: :create
end
