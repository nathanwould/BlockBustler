class ActorsController < ApplicationController

  def index
    @actors = Actor.all
    render json: @actors
  end

  def add_actor
    @movie = movie.find(params[:movie_id])
    @actor = Actor.find(params[:id])
    if @actor 
      @movie.actors.push(@actor)
    else
    @actor = Actor.new(actor_params)
    end
    render json: @movie, include :actors
  end

end
