class TodosController < ApplicationController
  respond_to :json
  def create
    respond_with Todolist.create(:title => params[:title],:time => params[:time],:date => params[:date])
  end

  def index
 respond_with Todolist.all
  end

  private

  def todo_params
    params.fetch(:todolist,{}).permit(:title,:time,:date,:done)
  end
end
