# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_10_174104) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.date "born", null: false
    t.date "died", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_artists_on_name"
  end

  create_table "artworks", force: :cascade do |t|
    t.string "title", null: false
    t.integer "creator_id", null: false
    t.date "date_created", null: false
    t.string "color", null: false
    t.string "style", null: false
    t.string "medium", null: false
    t.string "partner_organization", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_artworks_on_creator_id"
    t.index ["title"], name: "index_artworks_on_title"
  end

  create_table "collected_artworks", force: :cascade do |t|
    t.integer "gallery_id", null: false
    t.integer "artwork_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artwork_id"], name: "index_collected_artworks_on_artwork_id"
    t.index ["gallery_id"], name: "index_collected_artworks_on_gallery_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "favoriter_id", null: false
    t.integer "artwork_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artwork_id"], name: "index_favorites_on_artwork_id"
    t.index ["favoriter_id"], name: "index_favorites_on_favoriter_id"
  end

  create_table "galleries", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_galleries_on_title"
    t.index ["user_id"], name: "index_galleries_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "profile_image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["first_name"], name: "index_users_on_first_name"
    t.index ["last_name"], name: "index_users_on_last_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
