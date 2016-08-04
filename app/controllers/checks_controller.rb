class ChecksController < ApplicationController
  before_action :authenticate_user!
  respond_to :json

  def index
    respond_with current_user.checks.all
  end

  def show
    respond_with Check.find(params[:id])
  end

  def create
    respond_with Check.create(check_params.merge(user_id: current_user.id))
  end

  def update
    respond_with Check.update(params[:id],check_params)
  end

  def destroy
    respond_with Check.destroy(params[:id])
  end

  private

  def check_params
    params.fetch(:check,{}).permit(:title,:time,:date,:done,:user_id)
  end
end
