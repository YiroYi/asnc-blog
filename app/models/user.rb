class User < ApplicationRecord
  include Rails.application.routes.url_helpers
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # Fixed Categories for Role
  ROLE = ["human", "dwarf", "orc"]

  # Model relation
  has_many :posts, dependent: :destroy

  # Helper to add photos in the model
  has_one_attached :photo

  # Validations for creating and account
  validates :name, presence: true
  validates :role, inclusion: { in: ROLE }
  validates :location, presence: true
  validates :photo, presence: true

  def photo_url_user
    rails_blob_path(self.photo, disposition: "attachment", only_path: true)
  end
end
