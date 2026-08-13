import React, { useState } from 'react';

export interface Artwork {
  id: string;
  title: string;
  category: 'animations' | 'pngs' | ' sketches' | 'video';
  image?: string;
  video?: string;
  description?: string;
}

interface GalleryProps {
  artworks: Artwork[];
}

export function Gallery({ artworks }: GalleryProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <section id="gallery" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-500 mb-4">Professional Portfolio Showcase</h2>
          {artworks.filter(art => art.video).map((videoArt) => (
            <p key={videoArt.id} className="mt-4 text-lg text-slate-300">
              👉 Click play below to watch the highlight video
            </p>
          ))}
        </div>

        {/* Featured Video Section */}
        {artworks.filter(art => art.video).map((videoArt) => (
          <div key={videoArt.id} className="max-w-4xl mx-auto mt-8">
            <div
              onClick={() => setSelectedArtwork(videoArt)}
              className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border-2 border-amber-500/30"
            >
              <video
                src={videoArt.video!}
                muted
                playsInline
                loop
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex items-center justify-center group-hover:bg-gradient-to-t group-hover:from-black/40 transition-all">
                <div className="w-24 h-24 rounded-full bg-white text-amber-500 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 animate-pulse-slow">
                  <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="absolute -bottom-12 left-0 right-0 text-center text-white font-semibold text-lg tracking-wide animate-pulse">
                  CLICK TO PLAY VIDEO
                </span>
              </div>
              {videoArt.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white mb-1">{videoArt.title}</h3>
                  <p className="text-slate-300 text-sm">{videoArt.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Gallery Grid - Images Only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {artworks
            .filter(art => !art.video && art.image)
            .map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArtwork(art)}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={art.image!}
                  alt={art.title}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-amber-500">{art.title}</h3>
                    {art.description && (
                      <p className="text-slate-300 text-sm mt-2">{art.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Lightbox Modal */}
        {selectedArtwork && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95"
            onClick={() => setSelectedArtwork(null)}
          >
            <div
              className="max-w-5xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-4 right-4 text-amber-500 hover:text-white p-2"
              >
                ✕
              </button>
              {selectedArtwork.video ? (
                <video
                  src={selectedArtwork.video}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[70vh] object-contain bg-black"
                />
              ) : (
                <img
                  src={selectedArtwork.image!}
                  alt={selectedArtwork.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-500 mb-2">{selectedArtwork.title}</h3>
                {selectedArtwork.description && (
                  <p className="text-slate-300 mb-4">{selectedArtwork.description}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
