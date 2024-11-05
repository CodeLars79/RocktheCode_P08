const mongoose = require('mongoose')

const posterSchema = new mongoose.Schema(
  {
    title: { type: String, required: false },
    movie_year: { type: Number, required: false },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist',
      required: false
    },
    technique: { type: String, required: false },
    genre: { type: String, required: false },
    style: { type: String, required: false },
    country_of_origin: { type: String, required: false },
    description: { type: String, required: false },
    image: { type: String, required: true }, // URL of the uploaded image
    color_palette: [{ type: String, required: false }],
    tags: [{ type: String, required: false }]
  },
  {
    timestamps: true,
    collection: 'posters'
  }
)

module.exports = mongoose.model('Poster', posterSchema)
