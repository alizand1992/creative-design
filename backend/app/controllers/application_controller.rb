class ApplicationController < ActionController::API
  def index
    render json: { message: 'Hello World' }.to_json, status: :ok
  end

  def contact_us

    render json: params.to_json, status: :ok
  end
end
