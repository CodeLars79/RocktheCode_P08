const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = 'general'
    if (req.baseUrl.includes('/poster')) folder = 'posters'
    else if (req.baseUrl.includes('/artist')) folder = 'artists'
    return {
      folder: folder,
      allowed_formats: ['jpg', 'png', 'jpeg', 'gif']
    }
  }
})

const upload = multer({ storage })
module.exports = upload
