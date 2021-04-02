# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Director.destroy_all
Actor.destroy_all
Movie.destroy_all
User.destroy_all

@user = User.create!(employeeID: "Nathan", password: 'Nathanagain', isAdmin: true)

@andrewAdamson = Director.create!(name: 'Andrew Adamson')
@vickyJenson = Director.create!(name: 'Vicky Jenson')

@mikeMyers = Actor.create!(name: 'Mike Myers')
@eddieMurphey = Actor.create!(name: 'Eddie Murphey')
@cameronDiaz = Actor.create!(name: 'Cameron Diaz')
@johnLithgow = Actor.create!(name: 'John Lithgow')

@shrek = Movie.create!(title: 'Shrek', date: 2001, isAvailable: true, user: @user)

@shrek.actors.push([@mikeMyers, @eddieMurphey, @cameronDiaz, @johnLithgow])

puts "#{Director.count} directors created!"
puts "#{Actor.count} actors created!"
puts "#{Movie.count} movies created!"