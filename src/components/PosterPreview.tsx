
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
  price: string;
  location: string;
  description: string;
  contact: string;
  auctionDate: string;
  propertyType: string;
  area: string;
  builtUpArea: string;
  landArea: string;
  plotNumber: string;
  apartmentName: string;
  floorNumber: string;
  facing: string;
  parking: string;
  uds: string;
}

interface PosterPreviewProps {
  template: Template;
  data: FormData;
  image: string | null;
}

const PosterPreview: React.FC<PosterPreviewProps> = ({ template, data, image }) => {
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
                    <strong>PROPERTY LOCATION:</strong><br />
                    <span className="text-red-600 font-bold">{data.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-red-600">❖</span>
                  <div>
                    <strong>PROPERTY TYPE:</strong> <span className="text-red-600 font-bold">{data.propertyType}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-red-600">❖</span>
                  <div>
                    <strong>PROPERTY AREA:</strong> <span className="text-red-600">({data.builtUpArea || data.area})</span> <span className="text-red-600">({data.landArea || data.area})</span>
                  </div>
                </div>

                {/* Property Details Box */}
                <div className="border border-gray-400 p-3 space-y-1 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❖</span>
                    <span><strong>{data.apartmentName || 'APARTMENT COMPLEX'}</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❖</span>
                    <span><strong>FLAT NO. {data.floorNumber || 'S2'}</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❖</span>
                    <span><strong>{data.parking || 'ONE COVER CAR PARKING'}</strong></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❖</span>
                    <span><strong>PLOT NO.{data.plotNumber || '3'}, {data.location}</strong></span>
                  </div>
                </div>
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
              
              {/* Multiple Image Overlays */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <div className="w-16 h-12 bg-white/90 rounded border-2 border-white overflow-hidden">
                  <img src={image || template.preview} alt="View 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 h-12 bg-white/90 rounded border-2 border-white overflow-hidden">
                  <img src={image || template.preview} alt="View 2" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 h-12 bg-white/90 rounded border-2 border-white overflow-hidden">
                  <img src={image || template.preview} alt="View 3" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Villa For Sale Section */}
            <div className="p-4">
              <div className="bg-black text-white p-4 -mx-4 mb-4">
                <h1 className="text-3xl font-bold italic">VILLA</h1>
                <h2 className="text-2xl font-bold italic text-red-500">FOR SALE</h2>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="mb-3">
                    <strong>LOCATED AT :</strong> {data.location}
                  </div>
                  <div className="mb-3">
                    <strong>NEAR</strong> Dr. SNS RAJALAKSHMI COLLEGE
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
                    <div><span className="text-red-600">•</span> <strong>DUPLEX HOUSE(3 BHK)</strong></div>
                    <div><span className="text-red-600">•</span> <strong>BUA-{data.builtUpArea || data.area}</strong></div>
                    <div><span className="text-red-600">•</span> <strong>LAND AREA- {data.landArea || '2138 SFT'}</strong></div>
                    <div><span className="text-red-600">•</span> <strong>{data.parking || 'COVERED CAR PARKING'}</strong></div>
                    <div><span className="text-red-600">•</span> <strong>FACING - {data.facing || 'SOUTH'}</strong></div>
                    <div><span className="text-red-600">•</span> <strong>TENNIS & BASKETBALL COURT</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Template 3 - Flat For Sale (Modern Red Design) */}
        {template.id === 3 && (
          <div className="relative">
            {/* Header with diagonal design */}
            <div className="relative bg-red-600 p-4 clip-path-polygon">
              <div className="absolute top-4 left-4 bg-white rounded-full p-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-red-600 transform rotate-45 flex items-center justify-center">
                    <span className="text-white font-bold text-sm transform -rotate-45">M</span>
                  </div>
                  <span className="text-red-600 font-bold">MARS</span>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="relative -mt-8 bg-white">
              <div className="flex">
                {/* Left Side - Property Image */}
                <div className="w-1/2 h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={image || template.preview} 
                    alt="Property"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Right Side - Details */}
                <div className="w-1/2 p-4 space-y-3">
                  <div className="bg-red-600 text-white p-3 rounded text-center">
                    <h1 className="text-lg font-bold">FLAT FOR</h1>
                    <h2 className="text-xl font-bold">SALE</h2>
                  </div>

                  <div className="bg-red-600 text-white p-2 text-center">
                    <div className="text-sm">ASKING PRICE</div>
                    <div className="text-lg font-bold">{data.price}</div>
                  </div>

                  <div className="bg-white p-2 border-l-4 border-red-600">
                    <div className="text-red-600 font-bold text-sm underline">AUCTION DATE :</div>
                    <div className="text-red-600 font-bold">{data.auctionDate}</div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="p-4 space-y-3">
                <div className="text-center">
                  <h3 className="font-bold text-lg text-red-600">LOCATION OF</h3>
                  <h3 className="font-bold text-lg text-red-600">PROPERTY :</h3>
                  <p className="text-sm mt-1">{data.location}</p>
                  <div className="mt-2 font-bold text-lg">PH NO : {data.contact}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Additional Images */}
                  <div className="space-y-2">
                    <div className="h-16 bg-gray-200 rounded overflow-hidden">
                      <img src={image || template.preview} alt="Interior" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-16 bg-gray-200 rounded overflow-hidden">
                      <img src={image || template.preview} alt="Parking" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Property Features */}
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-bold text-red-600 mb-2">PROPERTY</h4>
                    <h4 className="font-bold text-red-600 mb-2">FEATURES</h4>
                    <div className="space-y-1 text-xs">
                      <div><strong>BUA : {data.builtUpArea || data.area}</strong></div>
                      <div><strong>UDS : {data.uds || '689'}</strong></div>
                      <div><strong>{data.parking || 'COVERED CAR PARKING'}</strong></div>
                      <div><strong>FACING : {data.facing || 'EAST'}</strong></div>
                    </div>
                  </div>
                </div>

                <div className="text-right text-xs text-gray-600">
                  visit<br />
                  <strong>www.marsarcs.com</strong><br />
                  for more !
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
