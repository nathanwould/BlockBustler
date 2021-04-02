class DirectorsMovies < ActiveRecord::Migration[6.1]
  def change
    create_join_table :directors, :movies
  end
end
