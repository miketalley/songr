class SongsController < ApplicationController
  respond_to :json

  def index
    @songs = Song.all
    respond_with(@songs) do |format|
      format.json { render :json => @songs, :root => false }
    end
  end

  def show
    @song = Product.find(params[:id])
    respond_with(@song) do |format|
      format.json { render :json => @song}
    end
  end

end
