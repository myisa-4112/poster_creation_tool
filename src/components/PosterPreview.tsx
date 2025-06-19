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
      
      <div id="poster-content" className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto">
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

        {/* Template 3 - Clean Professional Design */}
        {template.id === 3 && (
          <div className="relative bg-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
              <div className="flex items-center justify-between">
                <img src="/logo.png" alt="Mars Logo" className="h-12 w-12" />
                <div className="text-right">
                  <div className="text-sm font-medium">PREMIUM PROPERTY</div>
                  <div className="text-xs opacity-90">AUCTION SALE</div>
                </div>
              </div>
            </div>

            {/* Property Image - Full width, clear display */}
            <div className="h-56 bg-gray-100 overflow-hidden">
              <img 
                src={image || template.preview} 
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Content */}
            <div className="p-4 space-y-4">
              {/* Title Section */}
              <div className="text-center border-b border-gray-200 pb-3">
                <h1 className="text-xl font-bold text-gray-800 mb-1">{data.title}</h1>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {data.type}
                </div>
              </div>

              {/* Price Highlight */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg text-center">
                <div className="text-sm opacity-90">STARTING PRICE</div>
                <div className="text-2xl font-bold">{data.price}</div>
              </div>

              {/* Property Details Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Location */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Location</div>
                  <div className="text-sm font-medium text-gray-800 mt-1">{data.location}</div>
                </div>

                {/* Auction Date */}
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="text-xs text-red-600 uppercase tracking-wide">Auction Date</div>
                  <div className="text-sm font-bold text-red-700 mt-1">{data.auctionDate}</div>
                </div>
              </div>

              {/* Features */}
              {descriptionPoints.length > 0 && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-blue-800 mb-2">PROPERTY HIGHLIGHTS</div>
                  <div className="space-y-1">
                    {descriptionPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Section */}
              <div className="bg-gray-800 text-white p-4 rounded-lg text-center">
                <div className="text-sm opacity-90">FOR MORE INFORMATION</div>
                <div className="text-xl font-bold mt-1">📞 {data.contact}</div>
                <div className="text-xs opacity-75 mt-2">www.marsarcs.com</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PosterPreview;