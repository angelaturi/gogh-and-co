# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artist.destroy_all
Artwork.destroy_all

User.create(email: 'monalisa@demoemail.com', password: 'louvre123', first_name: 'Mona Lisa', last_name: 'Gherardini', profile_image_url: 'https://ibb.co/yXPR07z')

Artwork.create(title: 'The Starry Night', creator_id: 1, date_created: 1889, color: 'blue', style: 'Post-Impressionism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'The Starry Night', creator_id: 1, date_created: 1889, color: 'blue', style: 'Post-Impressionism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Panel for Edwin R. Campbell No. 4', creator_id: 2, date_created: 1914, color: 'blue', style: 'Expressionism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'The Persistence of Memory', creator_id: 3, date_created: 1931, color: 'brown', style: 'Surrealism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'The Town of the Poor', creator_id: 4, date_created: 1951, color: 'gray', style: 'Abstract Expressionism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'The Juggler', creator_id: 5, date_created: 1956, color: 'brown', style: 'Surrealism', medium: 'Oil and inlaid mother of pearl on board', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Portrait of Meijer de Haan', creator_id: 6, date_created: 1889, color: 'red', style: 'Post-Impressionism', medium: 'Oil on wood', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Château Noir', creator_id: 7, date_created: 1903, color: 'blue', style: 'Post-Impressionism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: "Les Demoiselles d'Avignon", creator_id: 8, date_created: 1907, color: 'pink', style: 'Cubism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Woman Plaiting Her Hair', creator_id: 8, date_created: 1906, color: 'pink', style: "Picasso's Rose Period", medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Two Nudes', creator_id: 8, date_created: 1906, color: 'orange', style: "Picasso's Rose Period", medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'The Reservoir, Horta de Ebro', creator_id: 8, date_created: 1909, color: 'orange', style: 'Cubism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Bather', creator_id: 8, date_created: 1908, color: 'gray', style: 'Cubism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Repose', creator_id: 8, date_created: 1908, color: 'orange', style: 'Cubism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Head of a Sleeping Woman', creator_id: 8, date_created: 1907, color: 'yellow', style: "Picasso's African Period", medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Fruit Dish', creator_id: 8, date_created: 1908, color: 'blue', style: 'Cubism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Pharisees', creator_id: 9, date_created: 1912, color: 'blue', style: 'Expressionism', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'One Number 31 1950', creator_id: 10, date_created: 1950, color: 'gray', style: 'Abstract Expressionism', medium: 'Oil and enamel paint on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Echo Number 25 1951', creator_id: 10, date_created: 1951, color: 'black', style: 'Abstract Expressionism', medium: 'Enamel paint on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'The Dream', creator_id: 11, date_created: 1910, color: 'green', style: 'Modern Art', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')
Artwork.create(title: 'Lagoon from Jazz', creator_id: 12, date_created: 1947, color: 'blue', style: 'Modern Art', medium: 'Oil on canvas', partner_organization: 'MoMA The Museum of Modern Art')

Artist.create(name: "Vincent van Gogh", born: 1853, died: 1890)
Artist.create(name: "Wassily Kandinsky", born: 1866, died: 1944)
Artist.create(name: "Salvador Dalí", born: 1904, died: 1989)
Artist.create(name: "Sonja Sekula", born: 1918, died: 1963)
Artist.create(name: "Remedios Varo", born: 1908, died: 1963)
Artist.create(name: "Paul Gauguin", born: 1848, died: 1903)
Artist.create(name: "Paul Cézanne", born: 1839, died: 1906)
Artist.create(name: "Pablo Picasso", born: 1881, died: 1973)
Artist.create(name: "Karl Schmidt-Rottluff", born: 1884, died: 1976)
Artist.create(name: "Jackson Pollock", born: 1912, died: 1956)
Artist.create(name: "Henri Rousseau", born: 1844, died: 1910)
Artist.create(name: "Henri Matisse", born: 1869, died: 1954)