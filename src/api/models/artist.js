const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    bio: { type: String, required: false },
    birth_year: { type: Number, required: false },
    death_year: { type: Number, required: false },
    nationality: { type: String, required: false },
    notable_works: [{ type: String, required: false }],
    techniques: [{ type: String, required: false }],
    image: { type: String, required: true }, // URL of the uploaded image
    tags: [{ type: String, required: false }]
  },
  {
    timestamps: true,
    collection: 'artists'
  }
)

module.exports = mongoose.model('Artist', artistSchema)
