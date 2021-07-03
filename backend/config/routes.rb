Rails.application.routes.draw do
  root 'application#index'

  post 'contact_us', to: 'application#contact_us'
end
