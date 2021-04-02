class Actor < ApplicationRecord
  has_many :actors_movie
  has_many :movies, :through => :actors_movie
end
