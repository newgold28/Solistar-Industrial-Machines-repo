import { useState } from 'react';
import { X, ArrowRight, ArrowUp } from 'lucide-react';

export default function Showcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const showcaseImages = [
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.12.58.jpeg',
      alt: 'Industrial Rotary Oven',
    },
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.13.01 (1).jpeg',
      alt: 'Industrial Rotary Oven',
    },
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.13.01 (2).jpeg',
      alt: 'Industrial Rotary Oven',
    },
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.13.01.jpeg',
      alt: 'Industrial Rotary Oven',
    },
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.12.59.jpeg',
      alt: 'Commercial Food Dehydrators',
    },
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.13.00 (1).jpeg',
      alt: 'Professional Dough Proofer',
    },
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.13.00 (2).jpeg',
      alt: 'Commercial Blender',
    },
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.13.00.jpeg',
      alt: 'Industrial Dough Mixer',
    },
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.13.02 (2).jpeg',
      alt: 'Industrial Dough Mixer',
    },
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.13.03 (1).jpeg',
      alt: 'Industrial Dough Mixer',
    },
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.13.09.jpeg',
      alt: 'Industrial Dough Mixer',
    },
    {
      src: '/showcase/WhatsApp Image 2025-10-21 at 19.13.05.jpeg',
      alt: 'Industrial Dough Mixer',
    },
  ];

  const displayedImages = showAll ? showcaseImages : showcaseImages.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Equipment Showcase
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Premium industrial kitchen equipment designed for maximum efficiency and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-slate-100"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="group inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Less
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Showcase"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
