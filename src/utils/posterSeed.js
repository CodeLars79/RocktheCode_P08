const posters = require('../data/posters')
const Poster = require('../api/models/poster')
const mongoose = require('mongoose')
const cloudinary = require('cloudinary').v2
require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    const allPosters = await Poster.find()

    // If there are existing posters, the collection will be dropped
    if (allPosters.length) {
      await Poster.collection.drop()
      console.log('Existing posters deleted.')
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    // Upload each poster's image to Cloudinary and update the poster data
    const postersWithUploadedImages = await Promise.all(
      posters.map(async (poster) => {
        try {
          // Upload the image to Cloudinary
          const uploadResponse = await cloudinary.uploader.upload(
            poster.image,
            {
              folder: 'posters'
            }
          )

          // Update the poster's image URL with the Cloudinary URL
          return { ...poster, image: uploadResponse.secure_url }
        } catch (error) {
          console.error(`Failed to upload image for ${poster.title}:`, error)
          return null
        }
      })
    )

    // Filter out any posters that failed to upload
    const validPosters = postersWithUploadedImages.filter(
      (poster) => poster !== null
    )

    // Insert the posters with Cloudinary URLs into the database
    await Poster.insertMany(validPosters)
    console.log(
      'Posters successfully seeded to the database with Cloudinary images.'
    )
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
