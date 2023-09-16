Rails.application.routes.draw do
  resources :presets
  devise_for :users, :controllers => { registrations: 'users/registrations', sessions: 'users/sessions'  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?

  # Defines the root path route ("/")
  root to: "home#index"

  post '/submit_form', to: 'presets#submit_form'

end
