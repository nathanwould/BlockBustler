require "test_helper"

class MoviesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @movie = movies(:one)
  end

  test "should get index" do
    get movies_url, as: :json
    assert_response :success
  end

  test "should create movie" do
    assert_difference('Movie.count') do
      post movies_url, params: { movie: { date: @movie.date, director_id_id: @movie.director_id_id, employee_id_id: @movie.employee_id_id, isAvailable: @movie.isAvailable, title: @movie.title } }, as: :json
    end

    assert_response 201
  end

  test "should show movie" do
    get movie_url(@movie), as: :json
    assert_response :success
  end

  test "should update movie" do
    patch movie_url(@movie), params: { movie: { date: @movie.date, director_id_id: @movie.director_id_id, employee_id_id: @movie.employee_id_id, isAvailable: @movie.isAvailable, title: @movie.title } }, as: :json
    assert_response 200
  end

  test "should destroy movie" do
    assert_difference('Movie.count', -1) do
      delete movie_url(@movie), as: :json
    end

    assert_response 204
  end
end
