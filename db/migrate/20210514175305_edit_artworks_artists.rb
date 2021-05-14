class EditArtworksArtists < ActiveRecord::Migration[5.2]
  def change
    remove_column :artworks, :date_created
    add_column :artworks, :date_created, :integer
    remove_column :artists, :born
    add_column :artists, :born, :integer
    remove_column :artists, :died
    add_column :artists, :died, :integer
  end
end
