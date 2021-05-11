class EditArtworks < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :url, :string, null: false
    add_column :artworks, :thumb_url, :string, null: false
  end
end
