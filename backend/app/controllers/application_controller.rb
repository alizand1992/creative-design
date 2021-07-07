class ApplicationController < ActionController::API
  def index
    render json: { message: 'Hello World' }.to_json, status: :ok
  end
end
