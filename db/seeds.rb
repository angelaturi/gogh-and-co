# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(email: 'monalisa@demoemail.com', password: 'louvre', first_name: 'Mona Lisa', last_name: 'Gherardini', profile_image_url: 'https://ibb.co/yXPR07z')