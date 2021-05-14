class EditArtworks2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :artworks, :url
    remove_column :artworks, :thumb_url
  end
end
