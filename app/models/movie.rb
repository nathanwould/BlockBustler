class Movie < ApplicationRecord
  has_many :actors_movie
  has_many :actors, :through => :actors_movie
  has_many :directors_movie
  has_many :directors, :through => :directors_movie
  belongs_to :user
end
