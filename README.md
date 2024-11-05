# RocktheCode_P08

# Movie Poster API 🎬
This project is a web application that manages a collection of movie posters and artists. It utilizes a MongoDB database to store data and Cloudinary for image uploads and storage. The application features RESTful API endpoints to perform CRUD operations on both posters and artists.


## Tech Stack 🚀
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Storage**: Cloudinary
- **File Uploads**: Multer, multer-storage-cloudinary
- **Environment Variables**: dotenv


## Prerequisites
- **Node.js** (v14 or later)
- **MongoDB**
- **Insomnia or Postman** (for testing API endpoints, optional)

## Environment Variables
The environment variables are set up in a .env file 

## Usage
1.	Start the server in development mode with nodemon: *npm run dev*
2.	Or start the server in production mode: *npm start*
3.	Server will be deployed at *http://localhost:3000*

## API Endpoints

### Posters
- POST /api/v1/poster: Create a new poster (upload an image).
- GET /api/v1/poster: Retrieve all posters.
- GET /api/v1/poster/:id: Retrieve a specific poster by ID.
- PUT /api/v1/poster/:id: Update a poster by ID.
- DELETE /api/v1/poster/:id: Delete a poster by ID.

### Artists
- POST /api/v1/artist: Create a new artist (upload an image).
- GET /api/v1/artist: Retrieve all artists.
- GET /api/v1/artist/:id: Retrieve a specific artist by ID.
- PUT /api/v1/artist/:id: Update an artist by ID.
- DELETE /api/v1/artist/:id: Delete an artist by ID.


## Seed Data
To seed initial posters data:
- Run the seed script: *npm run seedPosters*

To seed initial artists data:
- Run the seed script: *npm run seedArtists*



## Technologies
- Node.js: JavaScript runtime for building server-side applications
- Express.js: Web framework for Node.js to handle routing
- MongoDB: Database for storing the buildings and architects data
- Mongoose: Defining schemas and interacting with the database
- dotenv: Environment variable management
- nodemon: Development tool to automatically restart the server on file changes
- Cloudinary for image management.


### ENJOY 💚


