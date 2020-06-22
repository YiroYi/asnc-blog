class Post < ApplicationRecord
  include Rails.application.routes.url_helpers

  # Fixed CATEGORIES for TAGS
  TAGS = ["Travel", "Happy", "Society", "Technology", "Others"]

  # Model relation ship
  belongs_to :user

  # Model methods for managins pictures
  has_one_attached :photo

  # Validations for post
  validates :title, presence: true
  validates :body, presence: true
  validates :tags, inclusion: { in: TAGS }
  validates :photo, presence: true


  def photo_url
    rails_blob_path(self.photo, disposition: "attachment", only_path: true)
  end
end
