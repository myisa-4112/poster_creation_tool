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
  // Fixed 3 description points
  const getFixedDescriptionPoints = () => {
    const points = data.description.split('\n').filter(point => point.trim() !== '');
    const fixedPoints = [
      points[0] || 'Beautiful property with modern amenities',
      points[1] || 'Prime location with excellent connectivity', 
      points[2] || 'Ready to move condition'
    ];
    return fixedPoints;
  };

  const descriptionPoints = getFixedDescriptionPoints();

  // Dynamic title detection for template 2
  const getDynamicTitle = () => {
    const title = data.title.toUpperCase();
    if (title.includes('SALE')) return 'FOR SALE';
    if (title.includes('RENT')) return 'FOR RENT';
    if (title.includes('AUCTION')) return 'FOR AUCTION';
    return 'AVAILABLE';
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-4">Live Preview</h3>
      
      <div id="poster-content" className="bg-white rounded-lg overflow-hidden shadow-2xl mx-auto" style={{ width: '270px', height: '480px' }}>
        {/* Template 1 - Bank Auction Properties (List Style) */}
        {template.id === 1 && (
          <div className="relative w-full h-full flex flex-col">
            {/* Header - Fixed positioning */}
            <div className="bg-white p-2 flex items-center justify-between flex-shrink-0" style={{ minHeight: '60px' }}>
              <div className="flex items-center">
                <img src="/logo.png" alt="Mars Logo" className="h-10 w-10 flex-shrink-0" />
              </div>
              <div className="bg-red-600 text-white px-2 py-1 text-xs font-bold whitespace-nowrap">
                BANK AUCTION PROPERTIES
              </div>
            </div>

            {/* Property Image - Fixed height */}
            <div className="h-32 bg-gray-200 overflow-hidden flex-shrink-0">
              <img 
                src={image || template.preview} 
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content - Flexible area */}
            <div className="p-3 flex-1 flex flex-col justify-between">
              {/* Title Section */}
              <div className="text-center mb-2">
                <h2 className="text-sm font-bold text-black flex items-center justify-center gap-1">
                  <span className="text-red-600">❖</span> 
                  <span className="truncate">{data.title}</span>
                </h2>
              </div>

              {/* Property Details */}
              <div className="space-y-2 text-xs flex-1">
                <div className="flex items-start gap-1">
                  <span className="text-red-600 flex-shrink-0">❖</span>
                  <div className="min-w-0">
                    <strong>PROPERTY TYPE:</strong> <span className="text-red-600 font-bold">{data.type}</span>
                  </div>
                </div>

                <div className="flex items-start gap-1">
                  <span className="text-red-600 flex-shrink-0">❖</span>
                  <div className="min-w-0">
                    <strong>PROPERTY LOCATION:</strong>
                    <div className="text-red-600 font-bold text-xs leading-tight">{data.location}</div>
                  </div>
                </div>

                {/* Fixed 3 Description Points */}
                <div className="border border-gray-400 p-2 space-y-1">
                  {descriptionPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-1">
                      <span className="text-red-600 flex-shrink-0">❖</span>
                      <span className="text-xs leading-tight"><strong>{point}</strong></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section - Fixed positioning */}
              <div className="space-y-2 mt-2">
                {/* Reserve Price */}
                <div className="text-center bg-yellow-300 p-2 rounded">
                  <div className="font-bold text-sm text-red-600">RESERVE PRICE: {data.price}</div>
                </div>

                {/* Auction Date */}
                <div className="text-center border border-blue-500 p-1">
                  <div className="text-blue-600 font-bold text-xs">LAST DATE OF AUCTION: {data.auctionDate}</div>
                </div>

                {/* Contact Numbers */}
                <div className="text-center">
                  <div className="text-red-600 font-bold text-lg">PH - {data.contact}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Template 2 - Villa For Sale (Multi-image Style) */}
        {template.id === 2 && (
          <div className="relative bg-gradient-to-br from-orange-100 to-orange-200 w-full h-full flex flex-col">
            {/* Header with Logo - Fixed */}
            <div className="relative p-2 flex-shrink-0">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 font-bold text-xs">
                BANK AUCTION PROPERTIES
              </div>
              <div className="flex items-center">
                <img src="/logo.png" alt="Mars Logo" className="h-10 w-10" />
              </div>
            </div>

            {/* Main Property Image - Fixed height */}
            <div className="h-32 bg-gray-200 overflow-hidden flex-shrink-0">
              <img 
                src={image || template.preview} 
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Area - Flexible */}
            <div className="p-3 flex-1 flex flex-col">
              {/* Dynamic Title Section */}
              <div className="bg-gray-200 text-gray-800 p-2 -mx-3 mb-3 flex-shrink-0">
                <h1 className="text-lg font-bold">{data.title.split(' ')[0]}</h1>
                <h2 className="text-sm font-bold text-red-600">{getDynamicTitle()}</h2>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs flex-1">
                <div className="space-y-2">
                  <div>
                    <strong>LOCATED AT:</strong>
                    <div className="text-xs leading-tight">{data.location}</div>
                  </div>
                  <div>
                    <strong>TYPE:</strong> {data.type}
                  </div>
                  <div className="text-sm font-bold">
                    PH NO: {data.contact}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="bg-red-600 text-white p-2 rounded text-center">
                    <div className="text-xs">RESERVE PRICE</div>
                    <div className="text-sm font-bold">{data.price}</div>
                  </div>
                  
                  <div className="space-y-1">
                    {descriptionPoints.map((point, index) => (
                      <div key={index} className="text-xs">
                        <span className="text-red-600">•</span> <strong>{point}</strong>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-xs">
                    <strong>AUCTION DATE: {data.auctionDate}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Template 3 - Modern Professional Design */}
        {template.id === 3 && (
          <div className="relative bg-white w-full h-full flex flex-col">
            {/* Header - Fixed */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 flex-shrink-0">
              <div className="flex items-center justify-between">
                <img src="/logo.png" alt="Mars Logo" className="h-10 w-10" />
                <div className="text-right">
                  <div className="text-xs font-medium">PREMIUM PROPERTY</div>
                  <div className="text-xs opacity-90">AUCTION SALE</div>
                </div>
              </div>
            </div>

            {/* Property Image - Fixed height */}
            <div className="h-36 bg-gray-100 overflow-hidden flex-shrink-0">
              <img 
                src={image || template.preview} 
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Content - Flexible */}
            <div className="p-3 space-y-3 flex-1 flex flex-col">
              {/* Title Section */}
              <div className="text-center border-b border-gray-200 pb-2 flex-shrink-0">
                <h1 className="text-sm font-bold text-gray-800 mb-1">{data.title}</h1>
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium inline-block">
                  {data.type}
                </div>
              </div>

              {/* Price Highlight */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-lg text-center flex-shrink-0">
                <div className="text-xs opacity-90">STARTING PRICE</div>
                <div className="text-lg font-bold">{data.price}</div>
              </div>

              {/* Property Details Grid */}
              <div className="grid grid-cols-2 gap-2 flex-shrink-0">
                <div className="bg-gray-50 p-2 rounded-lg">
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Location</div>
                  <div className="text-xs font-medium text-gray-800 mt-1 leading-tight">{data.location}</div>
                </div>

                <div className="bg-red-50 p-2 rounded-lg">
                  <div className="text-xs text-red-600 uppercase tracking-wide">Auction Date</div>
                  <div className="text-xs font-bold text-red-700 mt-1">{data.auctionDate}</div>
                </div>
              </div>

              {/* Features - Flexible area */}
              <div className="bg-blue-50 p-3 rounded-lg flex-1">
                <div className="text-xs font-semibold text-blue-800 mb-2">PROPERTY HIGHLIGHTS</div>
                <div className="space-y-1">
                  {descriptionPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="leading-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section - Fixed at bottom */}
              <div className="bg-gray-800 text-white p-3 rounded-lg text-center flex-shrink-0">
                <div className="text-xs opacity-90">FOR MORE INFORMATION</div>
                <div className="text-lg font-bold mt-1">📞 {data.contact}</div>
                <div className="text-xs opacity-75 mt-1">www.marsarcs.com</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PosterPreview;