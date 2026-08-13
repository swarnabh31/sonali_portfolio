import React, { useState } from 'react';

export interface Artwork {
  id: string;
  title: string;
  category: 'animations' | 'pngs' | ' sketches';
  image: string;
  description?: string;
}

interface GalleryProps {
  artworks: Artwork[];
}

export function Gallery({ artworks }: GalleryProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState<'all' | 'animations' | 'pngs' | ' sketches'>('all');

  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  return (
    <section id="gallery" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-500 mb-4">Art Gallery</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A showcase of my artwork including animations, concept sketches, and PNG assets
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'animations', 'pngs', ' sketches'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === cat
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArtwork(art)}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={art.image}
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
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-500 mb-2">{selectedArtwork.title}</h3>
                {selectedArtwork.description && (
                  <p className="text-slate-300 mb-4">{selectedArtwork.description}</p>
                )}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-slate-800 rounded text-sm text-slate-300">
                    Category: {selectedArtwork.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
