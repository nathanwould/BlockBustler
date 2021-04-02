class ActorsController < ApplicationController

  # GET /actors
  def index
    @actors = Actor.all
    render json: @actors
  end

  def create
    # @movie = movie.find(params[:movie_id])
    # @actor = Actor.find(params[:id])
    # if @actor
      # @movie.actors.push(@actor)
    # else
    @actor = Actor.new(actor_params)
    if @actor.save
      render json: @actor, status: :created
    else
      render json: @actor.errors, status: :unprocessable_entity
    # end
    # render json: @movie, include :actors
  end
end

  private

  def actor_params
  params.require(:actor).permit(:name, :movie_id)
  end


end
