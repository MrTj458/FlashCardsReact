class Api::CardsController < ApplicationController
  def index
    render json: Card.order(created_at: :desc)
  end

  def create
    card = Card.new(card_params)

    if card.save
      render json: card
    else
      render json: { errors: card.errors }, status: 400
    end
  end

  def update
    card = Card.find(params[:id])
    card.update(show: !card.show)
    render json: card
  end

  def destroy
    Card.find(params[:id]).destroy
    render json: { message: 'Item deleted' }
  end

  private

  def card_params
    params.require(:card).permit(:question, :answer)
  end
end
