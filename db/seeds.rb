# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all

User.create(email: 'monalisa@demoemail.com', password: 'louvre123', first_name: 'Mona Lisa', last_name: 'Gherardini', profile_image_url: 'https://ibb.co/yXPR07z')

Artwork.create(title: 'The Starry Night', creator_id: null, date_created: 1989, color: 'red', style: 'impressionism', medium: 'oil on canvas', partner_organization: "Museum of Modern Art")