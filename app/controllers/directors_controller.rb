class DirectorsController < ApplicationController

  def create
    @director = Director.new(director_params)

    if @director.save
      render json: @director, status: :created, location: @director
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

end
