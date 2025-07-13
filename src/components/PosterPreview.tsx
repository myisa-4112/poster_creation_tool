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
            <div className="bg-white p-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Mars Logo" className="h-12 w-12" />
              </div>
              <div className="text-red-600 pt-0 pb-3 px-2 rounded text-base font-bold ">
                BANK AUCTION PROPERTIES
              </div>
            </div>

            {/* Property Image */}
            <div className="h-52 bg-gray-200 overflow-hidden">
              <img 
                src={image || template.preview} 
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="pt-1 px-3 space-y-2">
              <div className="text-center">
                <h2 className="text-lg font-bold text-black flex items-center justify-center gap-2">
                  {/* <span className="text-red-600">❖</span>  */}
                  {data.title}
                  <span className='text-blue-500'>
                    {
                    data.location?.trim() ? ` @${data.location.split(/[\s,]+/)[0]}` : ''
                    }
                  </span>
                </h2>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 ml-2">
                  {/* <span className="text-red-600">❖</span> */}
                  <div>
                    <strong>PROPERTY TYPE: </strong> <span className="text-red-600 font-bold">{data.type}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 ml-2">
                  {/* <span className="text-red-600">❖</span> */}
                  <div>
                    <strong>PROPERTY LOCATION: </strong>
                    <span className="text-red-600 font-bold">{data.location}</span>
                  </div>
                </div>

                {/* Description Points */}
                {descriptionPoints.length > 0 && (
                  <div className="border border-gray-400 rounded pt-0 px-3 pb-4 space-y-1 text-sm">
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
              <div className="text-center bg-blue-300 pt-0 pb-3 rounded">
                <div className="font-bold text-lg text-black-600">RESERVE PRICE: {data.price}</div>
              </div>

              {/* Auction Date */}
              <div className="text-center border border-blue-500 pt-0 pb-3 rounded">
                <div className="text-blue-600 font-bold text-lg">LAST DATE OF AUCTION: {data.auctionDate}</div>
              </div>

              {/* Contact Numbers */}
              <div className="text-center">
                <div className="text-red-600 font-bold text-xl pt-0 pb-3">PH - {data.contact}</div>
              </div>
            </div>
          </div>
        )}

        {/* Template 2 - Villa For Sale (Multi-image Style) */}
        {template.id === 2 && (
          <div className="relative bg-gradient-to-br from-orange-100 to-orange-200 pt-1">
            {/* Header with Logo */}
            <div className="relative pt-0 pl-2">
              <div className="absolute top-0 right-0 text-black pt-0 px-2 pb-3 font-bold text-base rounded">
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
              <div className="bg-gray-600 text-white pt-0 px-4 -mx-4 mb-4 pb-6">
                <h1 className="text-2xl font-bold italic">{data.title}
                  <span className='text-red-300'>
                    {
                    data.location?.trim() ? ` @${data.location.split(/[\s,]+/)[0]}` : ''
                    }
                  </span>
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="mb-3">
                    <strong>LOCATED AT: </strong><span className='font-semibold text-red-600/100 dark:text-sky-400/100'>{data.location}</span>
                  </div>
                  <div className="mb-3">
                    <strong>TYPE:</strong> <span className='font-semibold text-red-600/100 dark:text-sky-400/100'>{data.type}</span>
                  </div>
                  <div className="mb-3">
                    <strong>AUCTION DATE:</strong> <span className='font-bold text-base text-red-600/100 dark:text-sky-400/100'>{data.auctionDate}</span>
                  </div>
                  <div className="text-xl font-bold">
                    PH NO: {data.contact}
                  </div>
                </div>

                <div>
                  <div className="bg-gray-600 text-white pt-0 pb-4 rounded mb-2 text-center">
                    <div className="text-sm">RESERVE PRICE</div>
                    <div className="text-lg font-bold">{data.price}</div>
                  </div>
                  
                  <div className="space-y-1 text-xs">
                    {descriptionPoints.map((point, index) => (
                      <div key={index}><span className="text-red-600">•</span> <strong>{point}</strong></div>
                    ))}
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
            <div className="bg-gradient-to-r from-blue-300 to-blue-600 text-white px-4 pb-4 pt-1">
              <div className="flex items-center justify-between">
                <img src="/logo.png" alt="Mars Logo" className="h-12 w-12" />
                <div className="text-right">
                  <div className="text-sm font-medium">PREMIUM PROPERTY</div>
                  <div className="text-xs opacity-90">AUCTION SALE</div>
                </div>
              </div>
            </div>

            {/* Property Image - Full width, clear display */}
            <div className="h-52 bg-gray-100 overflow-hidden">
              <img 
                src={image || template.preview} 
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Content */}
            <div className="pt-0 px-2 pb-2 space-y-2">
              {/* Title Section */}
              <div className="text-center border-b border-gray-200 pb-1">
                <h1 className="text-xl font-bold text-gray-800 mb-2">{data.title}
                  <span className='text-red-500'>
                    {
                    data.location?.trim() ? ` @${data.location.split(/[\s,]+/)[0]}` : ''
                    }
                  </span>
                </h1>
                <div className="bg-blue-100 text-blue-800 px-3 pt-0 pb-3 rounded-full text-sm font-medium inline-block">
                  {data.type}
                </div>
              </div>

              {/* Price Highlight */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white pt-0 px-4 pb-5 rounded-lg text-center">
                <div className="text-sm opacity-90">STARTING PRICE</div>
                <div className="text-xl font-bold">{data.price}</div>
              </div>

              {/* Property Details Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Location */}
                <div className="bg-gray-50 pt-0 px-2 pb-3 rounded-lg">
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Location</div>
                  <div className="text-sm font-medium text-gray-800 mt-1">{data.location}</div>
                </div>

                {/* Auction Date */}
                <div className="bg-red-50 pt-0 px-2 rounded-lg">
                  <div className="text-xs text-red-600 uppercase tracking-wide">Auction Date</div>
                  <div className="text-semi font-bold text-red-700 mt-1">{data.auctionDate}</div>
                </div>
              </div>

              {/* Features */}
              {descriptionPoints.length > 0 && (
                <div className="bg-blue-50 pt-0 px-2 pb-2 rounded-lg">
                  <div className="text-sm font-semibold text-blue-800 mb-1">PROPERTY HIGHLIGHTS</div>
                  <div className="space-y-0 mb-4">
                    {descriptionPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-600">❖</span><span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Section */}
              <div className="bg-gray-800 text-white pt-0 pb-4 rounded text-center">
                <div className="text-sm opacity-90">FOR MORE INFORMATION</div>
                <div className="text-sm font-bold mt-0">📞 {data.contact}</div>
                <div className="text-xs opacity-75 mt-0">www.marsarcs.com</div>
              </div>
            </div>
          </div>
        )}

        {/* Template 4 - Modern Real Estate Style (using flat-img.jpg as reference) */}
        {template.id === 4 && (
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-200 border-2 border-blue-400 rounded-lg overflow-hidden shadow-2xl">
            {/* Top: Price Highlight */}
            <div className="absolute left-4 top-2 bg-blue-500 text-white rounded-full pt-0 pb-4 px-4 shadow-lg border-2 border-white z-20 text-xl font-bold">
              {data.price || '2 Crore Only'}
            </div>

            {/* Property Image */}
            <div className="h-56 bg-gray-200 overflow-hidden flex items-center justify-center">
              <img 
                src={image || '/images/flat-img.jpg'} 
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Info Section */}
            <div className="pt-0 pb-6 px-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="text-2xl font-extrabold text-blue-900">{data.title || '3 BHK FLAT'}</div>
                <div className="text-lg font-semibold text-gray-700 mt-2 md:mt-0">@ {data.location || 'ADYAR (Gandhi Nagar)'}</div>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-blue-100 text-blue-800 pt-0 pb-3 px-4 rounded font-bold text-sm">{data.type || 'New Apartment'}</div>
                <div className="bg-green-100 text-green-800 px-4 pt-0 pb-3 px-4 rounded font-bold text-sm">First Occupation</div>
                <div className="bg-yellow-100 text-yellow-800 pt-0 pb-3 px-4 rounded font-bold text-sm">Parking Available</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white border border-gray-200 rounded-lg pt-0 pb-3 px-4 text-center">
                  <div className="text-xs text-gray-500">BUILTUP AREA</div>
                  <div className="text-lg font-bold text-blue-900">{descriptionPoints[0] || '2129 Sq.ft'}</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg pt-0 pb-3 px-4 text-center">
                  <div className="text-xs text-gray-500">UDS</div>
                  <div className="text-lg font-bold text-blue-900">{descriptionPoints[1] || '1002 Sq.ft'}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-blue-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5m-7.5 0h7.5m-7.5 0v1.5a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-1.5" />
                </svg>
                <span className="text-blue-900 font-bold text-md pt-0 pb-3">Parking</span>
                <span className="ml-auto text-gray-700 font-semibold">Contact: {data.contact}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PosterPreview;
