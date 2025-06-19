import React from 'react';

interface Template {
  id: number;
  name: string;
  preview: string;
  type: string;
  features: string[];
}

interface FormData {
  title: string;
  type: string;
  price: string;
  auctionDate: string;
  location: string;
  contact: string;
  description: string;
}

interface PosterPreviewProps {
  template: Template;
  data: FormData;
  image: string | null;
}

const PosterPreview: React.FC<PosterPreviewProps> = ({ template, data, image }) => {
  // Split description into bullet points
  const descriptionPoints = data.description.split('\n').filter(point => point.trim() !== '');

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-4">Live Preview</h3>
      
      <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto">
        {/* Template 1 - Bank Auction Properties (List Style) */}
        {template.id === 1 && (
          <div className="relative">
            {/* Header */}
            <div className="bg-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Mars Logo" className="h-12 w-12" />
              </div>
              <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold">
                BANK AUCTION PROPERTIES
              </div>
            </div>

            {/* Property Image */}
            <div className="h-64 bg-gray-200 overflow-hidden">
              <img 
                src={image || template.preview} 
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <div className="text-center">
                <h2 className="text-lg font-bold text-black flex items-center justify-center gap-2">
                  <span className="text-red-600">❖</span> {data.title}
                </h2>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-600">❖</span>
                  <div>
                    <strong>PROPERTY TYPE:</strong> <span className="text-red-600 font-bold">{data.type}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-red-600">❖</span>
                  <div>
                    <strong>PROPERTY LOCATION:</strong><br />
                    <span className="text-red-600 font-bold">{data.location}</span>
                  </div>
                </div>

                {/* Description Points */}
                {descriptionPoints.length > 0 && (
                  <div className="border border-gray-400 p-3 space-y-1 text-sm">
                    {descriptionPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-red-600">❖</span>
                        <span><strong>{point}</strong></span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Reserve Price */}
              <div className="text-center bg-yellow-300 p-3 rounded">
                <div className="font-bold text-lg text-red-600">RESERVE PRICE: {data.price}</div>
              </div>

              {/* Auction Date */}
              <div className="text-center border border-blue-500 p-2">
                <div className="text-blue-600 font-bold text-lg">LAST DATE OF AUCTION: {data.auctionDate}</div>
              </div>

              {/* Contact Numbers */}
              <div className="text-center">
                <div className="text-red-600 font-bold text-2xl">PH - {data.contact}</div>
              </div>
            </div>
          </div>
        )}

        {/* Template 2 - Villa For Sale (Multi-image Style) */}
        {template.id === 2 && (
          <div className="relative bg-gradient-to-br from-orange-100 to-orange-200">
            {/* Header with Logo */}
            <div className="relative p-4">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 font-bold">
                BANK AUCTION PROPERTIES
              </div>
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Mars Logo" className="h-12 w-12" />
              </div>
            </div>

            {/* Main Property Image */}
            <div className="h-48 bg-gray-200 overflow-hidden relative">
              <img 
                src={image || template.preview} 
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Villa For Sale Section */}
            <div className="p-4">
              <div className="bg-black text-white p-4 -mx-4 mb-4">
                <h1 className="text-2xl font-bold italic">{data.title.split(' ')[0]}</h1>
                <h2 className="text-xl font-bold italic text-red-500">FOR SALE</h2>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="mb-3">
                    <strong>LOCATED AT :</strong> {data.location}
                  </div>
                  <div className="mb-3">
                    <strong>TYPE:</strong> {data.type}
                  </div>
                  <div className="text-xl font-bold">
                    PH NO: {data.contact}
                  </div>
                </div>

                <div>
                  <div className="bg-red-600 text-white p-2 rounded mb-2 text-center">
                    <div className="text-sm">RESERVE PRICE</div>
                    <div className="text-lg font-bold">{data.price}</div>
                  </div>
                  
                  <div className="space-y-1 text-xs">
                    {descriptionPoints.map((point, index) => (
                      <div key={index}><span className="text-red-600">•</span> <strong>{point}</strong></div>
                    ))}
                  </div>
                  
                  <div className="mt-2 text-xs">
                    <strong>AUCTION DATE: {data.auctionDate}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Template 3 - Modern Gradient Design */}
        {template.id === 3 && (
          <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-red-900">
            {/* Header */}
            <div className="relative p-4 text-white">
              <div className="flex items-center justify-between mb-4">
                <img src="/logo.png" alt="Mars Logo" className="h-12 w-12" />
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                  PREMIUM PROPERTY
                </div>
              </div>
              
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-lg font-bold">
                  {data.type}
                </div>
              </div>
            </div>

            {/* Property Image with Overlay */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={image || template.preview} 
                alt="Property"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Price Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg text-center">
                  <div className="text-sm text-gray-600">STARTING PRICE</div>
                  <div className="text-xl font-bold text-red-600">{data.price}</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 text-white space-y-4">
              {/* Location */}
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-sm opacity-80">LOCATION</div>
                <div className="font-bold">{data.location}</div>
              </div>

              {/* Features */}
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-sm opacity-80 mb-2">PROPERTY FEATURES</div>
                <div className="space-y-1 text-sm">
                  {descriptionPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-yellow-400">★</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Auction Info */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-600 p-3 rounded-lg text-center">
                  <div className="text-xs opacity-80">AUCTION DATE</div>
                  <div className="font-bold">{data.auctionDate}</div>
                </div>
                <div className="bg-green-600 p-3 rounded-lg text-center">
                  <div className="text-xs opacity-80">CONTACT</div>
                  <div className="font-bold">{data.contact}</div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center text-xs opacity-60 pt-2 border-t border-white/20">
                Visit www.marsarcs.com for more properties
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PosterPreview;