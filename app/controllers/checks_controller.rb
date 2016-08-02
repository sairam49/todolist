class ChecksController < ApplicationController

  respond_to :json

  def index
    respond_with Check.all
  end

  def show
    respond_with Check.find(params[:id])
  end

  def create
    respond_with Check.create(check_params)
  end

  def update
    respond_with Check.update(params[:id],params[:entry])
  end

  def destroy
    respond_with Check.destroy(params[:id])
  end

  private

  def check_params
    params.fetch(:check,{}).permit(:title,:time,:date)
  end
end
