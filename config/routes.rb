Rails.application.routes.draw do
  scope '/api' do
    resources :groups
  end

end
