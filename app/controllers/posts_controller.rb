class PostsController < ApplicationController
  def new
    @user = current_user
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @post = Post.find(current_user.id)
  end

  def update

  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :tags, :photo, :user_id)
  end
end
