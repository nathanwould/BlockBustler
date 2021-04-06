class MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /movies
  def index
    @movies = Movie.all
    render json: @movies, include: [:actors, :directors]
  end

  # GET /movies/1
  def show
    set_movie
    render json: @movie, include: [:actors, :directors]
  end

  # POST /movies
  def create
    @movie = Movie.new(movie_params.except(:actors, :directors))
    @actors = movie_params[:actors].map do |actor|
      Actor.find_or_create_by(name: actor[:name])
    end
    @directors = movie_params[:directors].map do |director|
      Director.find_or_create_by(name: director[:name])
    end
    @movie.actors = @actors
    @movie.directors = @directors
    @movie.user = @current_user
    if @movie.save
      render json: @movie, status: :created, location: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /movies/1
  def update
    set_movie
    @movie.update(movie_params.except(:id, :actors, :directors, :created_at, :updated_at))
    @actors = movie_params[:actors].map do |actor|
      Actor.find_or_create_by(name: actor[:name])
    end
    @directors = movie_params[:directors].map do |director|
      Director.find_or_create_by(name: director[:name])
    end
    @movie.actors = @actors
    @movie.directors = @directors
    @movie.user = @current_user
    if @movie.update(movie_params)
      render json: @movie, status: :updated, location: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # DELETE /movies/1
  def destroy
    set_movie
    @movie.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = Movie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.require(:movie).permit(:title, :date, :isAvailable, :user_id, actors:[:name], directors:[:name])
    end
end
