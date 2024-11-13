import React, { useState } from 'react';
import { DownloadIcon } from 'lucide-react';

export function AlbumContent() {
  const [isCover, setIsCover] = useState(true);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const handleImageClick = () => {
    setIsCover((prevIsCover) => !prevIsCover);
  };

  const handleTrackImageClick = () => {
    setShowVideoPlayer((prevShowVideoPlayer) => !prevShowVideoPlayer); // Toggle video player
  };


  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative mb-9 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleImageClick}>
          <img 
            src={isCover ? "https://res.cloudinary.com/dlj39xvd0/image/upload/v1731446359/portadal2n1web_p5nc1e.jpg" : "https://res.cloudinary.com/dlj39xvd0/image/upload/v1731445481/contraportada_L2N1_mgqgwa.jpg"} 
            alt="Album Cover" 
            className="w-full h-auto rounded-lg shadow-lg transform -rotate-2 border-4 border-gray-800" 
            loading="lazy"
          />
        </div>
        <div className="bg-gray-900 rounded-lg p-8 mb-8 hover:scale-105 transition-transform duration-300 shadow-lg shadow-gray-900">
          <h2 className="text-4xl font-bold mb-4 text-red-500 tracking-wide">LOS 2 NÚMERO 1</h2>
          <h2 className="text-xl font-bold mb-4 text-red-500 tracking-wide">29 Nov 2024</h2>
          <p className="text-xl mb-6 leading-relaxed">
            L2N1 es mucho más que un EP; es la esencia de quienes somos como artistas y la expresión de nuestra visión compartida. Este proyecto no comenzó en el estudio de grabación, sino mucho antes, en la prepa, cuando un día después de clases nos juntamos a improvisar. En este EP, cada uno de nosotros aporta algo único y valioso, logrando crear algo auténtico y de calidad bajo el nombre Los 2 Número 1.
          </p>
        </div>        
        <div className="flex justify-center items-center gap-5 mb-8">
          <a 
            href="https://distrokid.com/hyperfollow/rarcandpineda/los-2-nmero-1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-600 text-white py-2 px-6 rounded-full flex items-center transition-colors duration-200"
          >
            <DownloadIcon size={20} className="mr-2" />
            Pre-Save Now
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dlj39xvd0/image/upload/v1731446357/cdwebcloudinary_yqrg7f.png"
              alt="Tracklist Image"
              className="w-40 h-40 sm:w-80 sm:h-80 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={handleTrackImageClick}
              loading="lazy"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 px-4 sm:px-6 py-1 sm:py-2 rounded-full bg-red-700 text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Haz clic para ver el tráiler
            </div>
          </div>
          
          <div className="w-full sm:w-auto h-auto sm:h-60 bg-gray-800 rounded-lg p-4 sm:p-5 shadow-lg hover:scale-105 transition-transform duration-300 shadow-gray-900">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 leading-relaxed text-red-500 tracking-wide">Tracklist</h3>
            <ul className="list-decimal list-inside text-white text-xs sm:text-sm leading-loose">
              <li>MORTAL PROD. KÄIBURR</li>
              <li>PROZAC PROD. NOVA</li>
              <li>LA MEXICANA PROD. RARC</li>
              <li>TARDE PROD. KÄIBURR</li>
            </ul>
          </div>
        </div>
        {showVideoPlayer && (
          <div className="aspect-video relative mb-8">
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg" 
              src="https://www.youtube.com/embed/qkL_9pLb_mE?si=ffP-cwmEbfS1B585"
              title="Video Player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </main>
  );
}
