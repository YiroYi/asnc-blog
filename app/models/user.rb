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

end
