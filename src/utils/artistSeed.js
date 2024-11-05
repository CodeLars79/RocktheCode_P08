const artists = require('../data/artists')
const Artist = require('../api/models/artist')
const mongoose = require('mongoose')
const cloudinary = require('cloudinary').v2
require('dotenv').config()

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

// Connect to the MongoDB database
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    const allArtists = await Artist.find()

    // Drop the artists collection if it contains any existing documents
    if (allArtists.length) {
      await Artist.collection.drop()
      console.log('Existing artists deleted.')
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    // Upload each artist's image to Cloudinary and update the artist data
    const artistsWithUploadedImages = await Promise.all(
      artists.map(async (artist) => {
        try {
          // Upload the image to Cloudinary
          const uploadResponse = await cloudinary.uploader.upload(
            artist.image,
            {
              folder: 'artists'
            }
          )

          // Log Cloudinary URL for verification
          console.log(
            `Image uploaded for ${artist.name}: ${uploadResponse.secure_url}`
          )

          // Update the artist's image URL with the Cloudinary URL
          return { ...artist, image: uploadResponse.secure_url }
        } catch (error) {
          console.error(`Failed to upload image for ${artist.name}:`, error)
          return null
        }
      })
    )

    // Filter out any artists that failed to upload
    const validArtists = artistsWithUploadedImages.filter(
      (artist) => artist !== null
    )

    // Insert the artists with Cloudinary URLs into the database
    await Artist.insertMany(validArtists)
    console.log(
      'Artists successfully seeded to the database with Cloudinary images.'
    )
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
