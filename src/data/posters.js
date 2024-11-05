const posters = [
  {
    title: 'Star Wars',
    movie_year: 1977,
    technique: 'Painting',
    genre: 'Science Fiction',
    style: 'Classic',
    country_of_origin: 'USA',
    description:
      'The epic space opera that introduced the galaxy far, far away.',
    image: './assets/starwars.jpg',
    color_palette: ['black', 'blue', 'yellow'],
    tags: ['sci-fi', 'classic', 'epic']
  },
  {
    title: 'Indiana Jones',
    movie_year: 1981,
    technique: 'Painting',
    genre: 'Adventure',
    style: 'Classic',
    country_of_origin: 'USA',
    description: 'The thrilling adventures of archaeologist Indiana Jones.',
    image: './assets/indianaJones.jpg',
    color_palette: ['brown', 'gold', 'green'],
    tags: ['adventure', 'action', 'classic']
  },
  {
    title: 'Psycho',
    movie_year: 1960,
    technique: 'Graphic Design',
    genre: 'Thriller',
    style: 'Minimalist',
    country_of_origin: 'USA',
    description:
      'A psychological thriller that shocked audiences and changed cinema.',
    image: './assets/psycho.jpg',
    color_palette: ['black', 'white', 'red'],
    tags: ['thriller', 'horror', 'classic']
  },
  {
    title: 'Vertigo',
    movie_year: 1958,
    technique: 'Graphic Design',
    genre: 'Mystery',
    style: 'Artistic',
    country_of_origin: 'USA',
    description: 'A haunting tale of obsession and deception.',
    image: './assets/vertigo.jpg',
    color_palette: ['green', 'black', 'white'],
    tags: ['mystery', 'classic', 'psychological']
  },
  {
    title: 'Back to the Future',
    movie_year: 1985,
    technique: 'Painting',
    genre: 'Science Fiction',
    style: 'Classic',
    country_of_origin: 'USA',
    description: 'A time-traveling adventure that transcends generations.',
    image: './assets/backToTheFuture.jpg',
    color_palette: ['blue', 'orange', 'white'],
    tags: ['sci-fi', 'comedy', 'classic']
  },
  {
    title: 'The Sting',
    movie_year: 1973,
    technique: 'Graphic Design',
    genre: 'Crime',
    style: 'Vintage',
    country_of_origin: 'USA',
    description: 'A stylish caper film set in the 1930s.',
    image: './assets/theSting.jpg',
    color_palette: ['beige', 'brown', 'red'],
    tags: ['crime', 'classic', 'vintage']
  },
  {
    title: 'Casablanca',
    movie_year: 1942,
    technique: 'Graphic Design',
    genre: 'Romance',
    style: 'Classic',
    country_of_origin: 'USA',
    description: 'A timeless story of love and sacrifice during World War II.',
    image: './assets/casablanca.jpg',
    color_palette: ['black', 'white', 'red'],
    tags: ['romance', 'classic', 'war']
  },
  {
    title: 'A Clockwork Orange',
    movie_year: 1971,
    technique: 'Graphic Design',
    genre: 'Dystopian',
    style: 'Artistic',
    country_of_origin: 'UK',
    description:
      'A disturbing look at a future society through the eyes of a delinquent.',
    image: './assets/aClockworkOrange.jpg',
    color_palette: ['orange', 'black', 'white'],
    tags: ['dystopian', 'controversial', 'classic']
  },
  {
    title: 'Harry Potter',
    movie_year: 2001,
    technique: 'Painting',
    genre: 'Fantasy',
    style: 'Classic',
    country_of_origin: 'UK',
    description:
      'The magical journey of a young wizard in a world filled with wonders.',
    image: './assets/harryPotter.jpg',
    color_palette: ['gold', 'black', 'blue'],
    tags: ['fantasy', 'adventure', 'magic']
  },
  {
    title: 'The Dark Knight',
    movie_year: 2008,
    technique: 'Digital Illustration',
    genre: 'Action',
    style: 'Modern',
    country_of_origin: 'USA',
    description:
      'The battle between Batman and the Joker reaches its zenith in Gotham.',
    image: './assets/theDarkKnight.jpg',
    color_palette: ['black', 'gray', 'blue'],
    tags: ['action', 'superhero', 'modern']
  },
  {
    title: 'Moonrise Kingdom',
    movie_year: 2012,
    technique: 'Illustration',
    genre: 'Comedy',
    style: 'Whimsical',
    country_of_origin: 'USA',
    description: 'A quirky tale of young love set on an island.',
    image: './assets/moonriseKingdom.jpg',
    color_palette: ['yellow', 'blue', 'green'],
    tags: ['comedy', 'whimsical', 'romance']
  },
  {
    title: 'The Help',
    movie_year: 2011,
    technique: 'Illustration',
    genre: 'Drama',
    style: 'Classic',
    country_of_origin: 'USA',
    description:
      'The stories of African American maids working in white households during the civil rights movement.',
    image: './assets/theHelp.jpg',
    color_palette: ['white', 'black', 'green'],
    tags: ['drama', 'historical', 'civil rights']
  },
  {
    title: 'Coco',
    movie_year: 2017,
    technique: 'Illustration',
    genre: 'Animation',
    style: 'Vibrant',
    country_of_origin: 'USA',
    description:
      "A young boy's journey through the Land of the Dead in search of his family history.",
    image: './assets/coco.jpg',
    color_palette: ['orange', 'purple', 'yellow'],
    tags: ['animation', 'family', 'adventure']
  },
  {
    title: 'Final Fantasy',
    movie_year: 2001,
    technique: 'Illustration',
    genre: 'Fantasy',
    style: 'Anime',
    country_of_origin: 'Japan',
    description:
      'A visually stunning animation based on the popular video game series.',
    image: './assets/finalFantasy.jpg',
    color_palette: ['blue', 'black', 'purple'],
    tags: ['fantasy', 'animation', 'video games']
  },
  {
    title: 'Vampire Hunter D',
    movie_year: 1985,
    technique: 'Illustration',
    genre: 'Anime',
    style: 'Gothic',
    country_of_origin: 'Japan',
    description:
      'A dark fantasy film about a vampire hunter in a post-apocalyptic world.',
    image: './assets/vampireHunterD.jpg',
    color_palette: ['black', 'red', 'gray'],
    tags: ['anime', 'fantasy', 'gothic']
  },
  {
    title: 'Jaws',
    movie_year: 1975,
    technique: 'Graphic Design',
    genre: 'Thriller',
    style: 'Classic',
    country_of_origin: 'USA',
    description:
      'A suspenseful thriller about a great white shark terrorizing a beach community.',
    image: './assets/jaws.jpg',
    color_palette: ['blue', 'white', 'red'],
    tags: ['thriller', 'horror', 'classic']
  },
  {
    title: 'Ghostbusters',
    movie_year: 1984,
    technique: 'Painting',
    genre: 'Comedy',
    style: 'Classic',
    country_of_origin: 'USA',
    description:
      'A hilarious adventure of ghost-catching misfits in New York City.',
    image: './assets/ghostbusters.jpg',
    color_palette: ['black', 'white', 'red'],
    tags: ['comedy', 'action', 'supernatural']
  },
  {
    title: 'The Thing',
    movie_year: 1982,
    technique: 'Graphic Design',
    genre: 'Horror',
    style: 'Classic',
    country_of_origin: 'USA',
    description:
      'A chilling sci-fi horror about an alien creature in an Antarctic base.',
    image: './assets/theThing.jpg',
    color_palette: ['black', 'white', 'green'],
    tags: ['horror', 'sci-fi', 'classic']
  },
  {
    title: 'The Shining',
    movie_year: 1980,
    technique: 'Graphic Design',
    genre: 'Horror',
    style: 'Artistic',
    country_of_origin: 'UK',
    description:
      'A psychological horror film about isolation and madness in an eerie hotel.',
    image: './assets/theShining.jpg',
    color_palette: ['red', 'white', 'black'],
    tags: ['horror', 'psychological', 'classic']
  },
  {
    title: 'Spider-Man',
    movie_year: 2002,
    technique: 'Digital Illustration',
    genre: 'Action',
    style: 'Modern',
    country_of_origin: 'USA',
    description:
      'The thrilling origin story of a young man who becomes the superhero Spider-Man.',
    image: './assets/spiderman.jpg',
    color_palette: ['blue', 'red', 'white'],
    tags: ['action', 'superhero', 'modern']
  }
]

module.exports = posters
