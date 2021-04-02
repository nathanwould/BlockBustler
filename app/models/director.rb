class Director < ApplicationRecord
  has_many :directors_movie
  has_many :movies, :through => :directors_movie
end
