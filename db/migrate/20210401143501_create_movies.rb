class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :date
      t.boolean :isAvailable

      t.timestamps
    end
  end
end
