class Api::V1::PostsController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def index
    @posts = Post.all.sort.reverse
    respond_to do |format|
      format.json
    end
  end

  def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.json
    end
    # render json: @post
  end

  def create
    @post = Post.create(post_params)
    render json: @post
  end

  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    render json: @post
  end

  def destroy
    @post = Post.find(params[:id])
    @post.delete
    render json: @post
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :tags, :photo, :user_id)
  end
end
