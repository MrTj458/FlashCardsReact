class RemoveShowFromCards < ActiveRecord::Migration[5.2]
  def change
    remove_column :cards, :show
  end
end
