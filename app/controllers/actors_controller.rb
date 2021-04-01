class ActorsController < ApplicationController

  def index
    @actors = Actor.all
    render json: @actors
  end

  def add_actor
    @actor = Actor.new(actor_params)

    if @actor.save
      render json: @actor, status: :created, location: @actor
    else
      render json: @actor.errors, status: :unprocessable_entity
    end
  end

end
