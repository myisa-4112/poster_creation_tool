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
          <div className="bg-white p-4 flex flex-col items-center border-b w-full">
            {/* Header with Mars Logo and Contact */}
            <div className="flex flex-row items-center justify-between w-full max-w-xl mx-auto">
              <img src="/logo.png" alt="Mars Logo" className="h-16 w-auto" />
              <div className="flex flex-col items-end">
                <span className="text-green-700 font-extrabold text-2xl ">CONTACT</span>
                <span className="text-black text-2xl font-extrabold">{data.contact}</span>
                <span className="text-green-700 text-xl font-bold">www.marsarcs.com</span>
              </div>
            </div>

            {/* Main Image + Offer Bubble */}
            <div className="relative w-full max-w-xl mx-auto mt-6">
              <img
                src={image || template.preview || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=900&q=80"}
                alt="Apartment"
                className="rounded-lg w-full h-72 object-cover border shadow-lg"
              />
              <div className="absolute left-2 top-2">
                <div className="bg-green-500 px-6 py-2 rounded-full shadow-lg">
                  <span className="text-black text-2xl font-bold">{data.price || ""}</span>
                  <span className="block text-black text-2xl -mt-2 font-semibold">Only</span>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded shadow-md text-left">
                <span className="block text-black font-bold">{data.title || ""}</span>
                <span className="block text-black font-bold">{data.auctionDate || ""}</span>
              </div>
            </div>

            {/* Main Offer Text */}
            <div className="w-full max-w-xl mx-auto mt-8 mb-6 px-6 flex flex-col items-center text-center">
              <span className="text-green-800 text-4xl font-extrabold mb-2">{data.type || ""}</span>
              <span className="text-black text-3xl font-extrabold mb-1">
                @ <span className="text-black">{data.location?.split(/[,]+/)[0] || ""}</span>{' '}
                <span className="text-gray-700 font-semibold">{data.location?.split(/[,]+/)[1] ? `(${data.location.split(/[,]+/)[1]})` : ""}</span>
              </span>
              <div className="flex items-center justify-center mt-2 space-x-4">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center space-x-2 mt-2">
                    {/* Parking Icon - exact as in image */}
                    <img src="/images/parking-image.png" alt="Parking" className="w-16 h-14" />
                  </div>
                </div>
                <div className="ml-6 text-left">
                {descriptionPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 text-lg text-gray-700">
                    <span className="text-red-600 font-extrabold">•</span><span className='text-black font-semibold text-xl'>{point}</span>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PosterPreview;
