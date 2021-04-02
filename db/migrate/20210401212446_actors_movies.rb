class ActorsMovies < ActiveRecord::Migration[6.1]
  def change
    create_join_table :actors, :movies
  end
end
