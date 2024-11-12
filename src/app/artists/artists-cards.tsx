import React from 'react'
import { Instagram, Music } from 'lucide-react'
import { SpotifyIcon } from './spotifyicon'

type Artist = {
  id: string
  name: string
  image: string
  description: string
  location: string
  instagramLink: string
  spotifyLink: string
  sword: boolean
}


const artists: Artist[] = [
  {
    id: '1',
    name: "Rarc",
    image: "/rarc2.jpg",
    description: "Artista, Productor",
    location: "Guadalajara, MX",
    instagramLink: "https://instagram.com/rarc_mx",
    spotifyLink: "https://open.spotify.com/intl-es/artist/5O1kyHWHUSQNYjfRQ5rxoG?si=lMS4wPLpQ82yHDB-tIiHyg",
    sword: true
  },
  {
    id: '2',
    name: "Pineda",
    image: "/pineda1.jpg",
    description: "Artista",
    location: "Cabo, MX",
    instagramLink: "https://instagram.com/pineda_mx",
    spotifyLink: "https://open.spotify.com/intl-es/artist/7M6lWTwOBWlay0c5NcMi1m?si=YzdxNptVTqGvL4Fa7NBovg",
    sword: true
  },
  {
    id: '3',
    name: "Aldo de Anda",
    image: "/aldo1.jpeg",
    description: "Artista",
    location: "Dubai, UAE",
    instagramLink: "https://instagram.com/aldodeandamx",
    spotifyLink: "https://open.spotify.com/intl-es/artist/2unBWAi1U52KU7WvdwPvvQ?si=cTD0G6L9TMCMDWK3TkpJig",
    sword: false
  },
  {
    id: '4',
    name: "Käiburr",
    image: "/kaiburr1.jpeg",
    description: "Productor",
    location: "Guadalajara, MX",
    instagramLink: "https://instagram.com/kaiburrbeats",
    spotifyLink: "https://open.spotify.com/intl-es/artist/5pXqEYzq78yZFyPXr5l8TV?si=aST5koz1QkaRlcSe6fdsog",
    sword: true
  },
  {
    id: '5',
    name: "Zaraa",
    image: "/zaraa1.jpeg",
    description: "Artista",
    location: "Guadalajara, MX",
    instagramLink: "https://instagram.com/zzaraa____",
    spotifyLink: "https://open.spotify.com/intl-es/artist/4xDzUWI3XkNbc8lyEtf05A?si=KvSA_Vc3SZSnF-0uGKqscA",
    sword: false
  },
  
]

export default function ArtistCardsComponent() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center py-12">
      {/* Grid con un máximo de 3 columnas y centrado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full max-w-6xl px-4 sm:px-6 lg:px-8 justify-items-center">
        {artists.map((artist) => (
          <article 
            key={artist.id} 
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg shadow-gray-900 transform hover:scale-105 transition-transform duration-300"
            style={{ width: '100%', maxWidth: '350px', margin: '0 auto' }}
          >
            <img 
              className="w-full h-60 object-cover object-center filter grayscale hover:grayscale-0 transition-filter duration-300" 
              src={artist.image} 
              alt={`${artist.name} - ${artist.description}`} 
            />
            <div className="p-6 relative">
              <div className="absolute top-0 right-0 flex space-x-2 mt-4 mr-4">
                <a 
                  href={artist.instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center transform rotate-12 shadow-md hover:shadow-lg transition-transform duration-300 text-white hover:text-gray-200"
                  aria-label={`${artist.name}'s Instagram`}
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={artist.spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center transform rotate-12 shadow-md hover:shadow-lg transition-transform duration-300 text-white hover:text-gray-200"
                  aria-label={`${artist.name}'s Spotify`}
                >
                  <SpotifyIcon />
                </a>
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-2 flex items-center">
                {artist.name} 
                {artist.sword && (
                  <img 
                    src="/espada-optimized.png" 
                    alt="Espada Icono" 
                    className="w-8 h-9 ml-2"
                  />
                )}
              </h3>
              <p className="text-gray-300 mb-4">{artist.description}</p>
              <div className="flex items-center text-sm text-gray-400">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{artist.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      
    </section>
  )
}