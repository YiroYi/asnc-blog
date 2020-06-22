json.array! @posts do |post|
  json.extract! post, :id, :title, :body, :photo_url, :tags, :user_id, :created_at, :updated_at
end
