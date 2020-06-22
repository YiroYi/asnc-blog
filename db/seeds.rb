#This File is for creating seed data for our database
require "open-uri"
tags = Post::TAGS
User.destroy_all
Post.destroy_all

puts "Data has been deleted"

######################################## BEGIN -SEED DATA FOR CREATE ACCOUNTS ##############################

# Seed for master User.
y = User.new(
  email: "yiroyi@live.com",
  password: "hello123",
  name:"Yiro Yi",
  role:"human",
  location:"Mexico"
)

y.photo.attach(io: File.open('app/assets/images/images.png'), filename: 'me.jpg', content_type: 'image/jpg')
y.save!

puts "Master user created"

# Seed for users

user_one = User.new(
  email: "user_one@test.com",
  password: "hello123",
  name: Faker::Name.first_name,
  role: "orc",
  location: Faker::Address.city
)

user_one.photo.attach(io: URI.open("https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png"), filename: 'avatar_one.jpg', content_type: 'image/jpg')
user_one.save!

puts "user_one created"

user_two = User.new(
  email: "user_two@test.com",
  password: "hello123",
  name: Faker::Name.first_name,
  role: "dwarf",
  location: Faker::Address.city
)

user_two.photo.attach(io: URI.open("https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/136-512.png"), filename: 'avatar_one.jpg', content_type: 'image/jpg')
user_two.save!

puts "user_two created"

######################################## END - SEED DATA FOR CREATE ACCOUNTS ##############################

######################################## BEGIN - SEED DATA FOR CREATE POSTS ##############################

all_users = User.all
users_ids = []

all_users.each{|user| users_ids << user.id}
counter = 0
20.times do

  post = Post.new(
    title: Faker::Books::CultureSeries.book,
    body: Faker::Quote.matz,
    tags: tags.sample,
    user_id: users_ids.sample,
  )

  post.photo.attach(io: URI.open("https://source.unsplash.com/random/400x400"), filename: "#{Faker::Verb.base}.jpg", content_type: 'image/jpg')
  post.save!
  counter += 1
  puts "post number #{counter} has been created"

end

######################################## END - SEED DATA FOR CREATE POSTS ##############################



