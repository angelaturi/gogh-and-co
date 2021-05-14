json.id @artwork.id
json.title @artwork.title
json.creator_id @artwork.creator_id
json.date_created @artwork.date_created
json.color @artwork.color
json.style @artwork.style
json.medium @artwork.medium
json.partner_organization @artwork.partner_organization
json.photoURL url_for(@post.photo)
json.favorited (current_user && current_user.artworks.include?(@artwork))
