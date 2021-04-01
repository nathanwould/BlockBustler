Rails.application.routes.draw do
  # Authentication routes
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  # Movie CRUD routes
  resources :movies
  # Actor association route
  # post '/movies/:movie/actors/:id', to: 'actors#add_actor'
  # Director association routes
  # post '/movies/:movie/directors/:id', to: 'directors@add_director'
end
