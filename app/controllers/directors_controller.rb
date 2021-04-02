class DirectorsController < ApplicationController

  def index
    @directors = Director.all
    render json: @directors
  end

  def create
    @director = Director.new(director_params)
# @director = Director.new(params[:director])
    if @director.save
      render json: @director, status: :created, location: @director
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def add_director
    @movie = movie.find(params[:movie_id])
    @director = Director.find(params[:id])
    if @director 
      @movie.directors.push(@director)
    else
    @director = Director.new(director_params)
    end
    render json: @movie, include :directors
  end
  
end