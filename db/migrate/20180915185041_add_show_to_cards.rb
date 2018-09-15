class AddShowToCards < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :show, :boolean, default: false
  end
end
