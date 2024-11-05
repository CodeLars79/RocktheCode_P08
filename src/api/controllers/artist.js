const Artist = require('../models/artist')
const { deleteFile } = require('../../utils/deleteFile')

// Create a new artist with Cloudinary image upload
exports.createArtist = async (req, res, next) => {
  try {
    const artistData = { ...req.body }

    // Assign the Cloudinary URL if file is uploaded
    if (req.file) {
      artistData.image = req.file.path // This path is the Cloudinary URL
    }

    const artist = new Artist(artistData)
    await artist.save()
    res.status(201).json(artist)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get all artists
exports.getAllArtists = async (req, res, next) => {
  try {
    const artists = await Artist.find(req.query)
    res.json(artists)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a specific artist by ID
exports.getArtistById = async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.id)
    if (!artist) return res.status(404).json({ message: 'Artist not found' })
    res.json(artist)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update an artist by ID
exports.updateArtist = async (req, res, next) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!artist) return res.status(404).json({ message: 'Artist not found' })
    res.json(artist)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete an artist by ID
exports.deleteArtist = async (req, res, next) => {
  try {
    const artist = await Artist.findByIdAndDelete(req.params.id)
    if (!artist) return res.status(404).json({ message: 'Artist not found' })

    // Call deleteFile with the Cloudinary URL
    if (artist.image) {
      await deleteFile(artist.image)
    }

    res.json({ message: 'Artist deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
