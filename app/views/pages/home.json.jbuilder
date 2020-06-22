json.array! @posts do |post|
  json.extract! post, :id, :title, :body, :photo_url, :tags, :user_id, :created_at, :updated_at
  json.extract! post.user, :name, :role, :location, :photo_url_user
end
