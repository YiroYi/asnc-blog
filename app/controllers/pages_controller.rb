class PagesController < ApplicationController
  #skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @posts = Post.all
    respond_to do |format|
      format.html { render 'home'}
      format.json
    end
  end
end
