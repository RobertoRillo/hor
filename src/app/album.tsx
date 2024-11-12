import React, { useState } from 'react';
import { Play, Share2 } from 'lucide-react';

export function AlbumContent() {
  const [isCover, setIsCover] = useState(true);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);


  const handleImageClick = () => {
    setIsCover((prevIsCover) => !prevIsCover);
  };

  const handleTrackImageClick = () => {
    setShowVideoPlayer(true);
  };

  const handleShareClick = () => {
    const link = "https://distrokid.com/hyperfollow/rarcandpineda/los-2-nmero-1";
    navigator.clipboard.writeText(link).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000); // Ocultar el mensaje después de 3 segundos
    });
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative mb-9 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleImageClick}>
          <img 
            src={isCover ? "https://res.cloudinary.com/dlj39xvd0/image/upload/v1731446359/portadal2n1web_p5nc1e.jpg" : "https://res.cloudinary.com/dlj39xvd0/image/upload/v1731445481/contraportada_L2N1_mgqgwa.jpg"} 
            alt="Album Cover" 
            className="w-full h-auto rounded-lg shadow-lg transform -rotate-2 border-4 border-gray-800" 
            loading='lazy'
          />
        </div>
        <div className="bg-gray-900 rounded-lg p-8 mb-8 hover:scale-105 transition-transform duration-300 shadow-lg shadow-gray-900">
          <h2 className="text-4xl font-bold mb-4 text-red-500 tracking-wide">LOS 2 NÚMERO 1</h2>
          <p className="text-xl mb-6 leading-relaxed">
            L2N1 es mucho más que un EP; es la esencia de quienes somos como artistas y la expresión de nuestra visión compartida. Este proyecto no comenzó en el estudio de grabación, sino mucho antes, en la prepa, cuando un día después de clases nos juntamos a improvisar. En este EP, cada uno de nosotros aporta algo único y valioso, logrando crear algo auténtico y de calidad bajo el nombre Los 2 Número 1.
          </p>
        </div>        
        <div className="flex flex-wrap gap-5 mb-8">
          <a 
            href="https://distrokid.com/hyperfollow/rarcandpineda/los-2-nmero-1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-600 text-white py-2 px-6 rounded-full flex items-center transition-colors duration-200"
          >
            <Play size={20} className="mr-2" />
            Pre-Save Now
          </a>
          <button 
            onClick={handleShareClick} 
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-full flex items-center transition-colors duration-200"
          >
            <Share2 size={20} className="mr-2" />
            Share
          </button>
        </div>

        {copySuccess && (
          <div className="text-green-500 font-bold mb-4">
            Link copiado al portapapeles
          </div>
        )}

        {showVideoPlayer ? (
          <div className="aspect-video relative">
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg" 
              src="https://www.youtube.com/embed/5er1CxNTBc8?autoplay=1" 
              title="Video Player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img
            src="https://res.cloudinary.com/dlj39xvd0/image/upload/v1731446357/cdwebcloudinary_yqrg7f.png"
            alt="Tracklist Image"
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={handleTrackImageClick}
            loading='lazy'
          />
        )}
      </div>
    </main>
  );
}
