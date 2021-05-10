class CreateCollectedArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :collected_artworks do |t|
      t.integer :gallery_id, null: false
      t.integer :artwork_id, null: false

      t.timestamps

    end
      add_index :collected_artworks, :gallery_id
      add_index :collected_artworks, :artwork_id
  end
end
