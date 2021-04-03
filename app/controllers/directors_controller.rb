class DirectorsController < ApplicationController

  def index
    @directors = Director.all
    render json: @directors
  end


  def create
    @movie = movie.find(params[:movie_id])
    @director = Director.find(params[:id])
    if @director 
      @movie.directors.push(@director)
    else
    @director = Director.new(director_params)
    end
    render json: @movie, include :directors
  end
  
  def add_director
    @movie = Movie.find(params[:movie_id])
    @director = Director.find(params[:id])
    @movie.director << @director
    render json: @movie, include: :directors
  end

private

  def actor_params
    params.require(:actor).permit(:name, :movie_id)
  end

end