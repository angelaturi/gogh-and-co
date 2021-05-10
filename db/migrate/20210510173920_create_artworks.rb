class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false
      t.date :date_created, null: false
      t.string :color, null: false
      t.string :style, null: false
      t.string :medium, null: false
      t.string :partner_organization, null: false

      t.timestamps
    end
      add_index :artworks, :title
      add_index :artworks, :creator_id
  end
end
