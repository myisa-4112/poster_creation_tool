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
      
      <div 
        id="poster-content" 
        className="bg-white rounded-lg overflow-hidden shadow-2xl mx-auto relative"
        style={{ 
          width: '270px', 
          height: '480px',
          position: 'relative'
        }}
      >
        {/* Template 1 - Bank Auction Properties */}
        {template.id === 1 && (
          <div style={{ width: '270px', height: '480px', position: 'relative' }}>
            {/* Header */}
            <div 
              className="bg-white flex items-center justify-between"
              style={{ 
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '270px',
                height: '50px',
                padding: '8px'
              }}
            >
              <img src="/logo.png" alt="Mars Logo" style={{ height: '34px', width: '34px' }} />
              <div 
                className="bg-red-600 text-white font-bold text-center"
                style={{ 
                  fontSize: '8px',
                  padding: '4px 6px',
                  lineHeight: '1'
                }}
              >
                BANK AUCTION PROPERTIES
              </div>
            </div>

            {/* Property Image */}
            <div 
              className="bg-gray-200 overflow-hidden"
              style={{
                position: 'absolute',
                top: '50px',
                left: '0px',
                width: '270px',
                height: '120px'
              }}
            >
              <img 
                src={image || template.preview} 
                alt="Property"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Title */}
            <div 
              className="text-center"
              style={{
                position: 'absolute',
                top: '178px',
                left: '8px',
                width: '254px',
                height: '20px'
              }}
            >
              <h2 
                className="text-black font-bold flex items-center justify-center gap-1"
                style={{ fontSize: '11px', lineHeight: '1.2' }}
              >
                <span className="text-red-600">❖</span> 
                <span>{data.title}</span>
              </h2>
            </div>

            {/* Property Type */}
            <div 
              className="flex items-start gap-1"
              style={{
                position: 'absolute',
                top: '206px',
                left: '8px',
                width: '254px',
                height: '16px'
              }}
            >
              <span className="text-red-600" style={{ fontSize: '10px' }}>❖</span>
              <div style={{ fontSize: '10px' }}>
                <strong>PROPERTY TYPE:</strong> <span className="text-red-600 font-bold">{data.type}</span>
              </div>
            </div>

            {/* Property Location */}
            <div 
              className="flex items-start gap-1"
              style={{
                position: 'absolute',
                top: '230px',
                left: '8px',
                width: '254px',
                height: '24px'
              }}
            >
              <span className="text-red-600" style={{ fontSize: '10px' }}>❖</span>
              <div style={{ fontSize: '10px' }}>
                <strong>PROPERTY LOCATION:</strong>
                <div className="text-red-600 font-bold">{data.location}</div>
              </div>
            </div>

            {/* Description Points */}
            <div 
              className="border border-gray-400 p-2"
              style={{
                position: 'absolute',
                top: '262px',
                left: '8px',
                width: '254px',
                height: '60px'
              }}
            >
              {descriptionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-1" style={{ marginBottom: '2px' }}>
                  <span className="text-red-600" style={{ fontSize: '9px' }}>❖</span>
                  <span style={{ fontSize: '9px', fontWeight: 'bold', lineHeight: '1.2' }}>{point}</span>
                </div>
              ))}
            </div>

            {/* Reserve Price */}
            <div 
              className="text-center bg-yellow-300 rounded"
              style={{
                position: 'absolute',
                top: '330px',
                left: '8px',
                width: '254px',
                height: '30px',
                padding: '6px'
              }}
            >
              <div className="font-bold text-red-600" style={{ fontSize: '11px' }}>
                RESERVE PRICE: {data.price}
              </div>
            </div>

            {/* Auction Date */}
            <div 
              className="text-center border border-blue-500"
              style={{
                position: 'absolute',
                top: '368px',
                left: '8px',
                width: '254px',
                height: '24px',
                padding: '4px'
              }}
            >
              <div className="text-blue-600 font-bold" style={{ fontSize: '10px' }}>
                LAST DATE OF AUCTION: {data.auctionDate}
              </div>
            </div>

            {/* Contact */}
            <div 
              className="text-center"
              style={{
                position: 'absolute',
                top: '400px',
                left: '8px',
                width: '254px',
                height: '30px',
                padding: '6px'
              }}
            >
              <div className="text-red-600 font-bold" style={{ fontSize: '16px' }}>
                PH - {data.contact}
              </div>
            </div>
          </div>
        )}

        {/* Template 2 - Villa Style */}
        {template.id === 2 && (
          <div 
            className="bg-gradient-to-br from-orange-100 to-orange-200"
            style={{ width: '270px', height: '480px', position: 'relative' }}
          >
            {/* Header */}
            <div style={{ position: 'absolute', top: '0px', left: '0px', width: '270px', height: '50px', padding: '8px' }}>
              <div 
                className="bg-red-600 text-white font-bold text-center"
                style={{ 
                  position: 'absolute',
                  top: '0px',
                  right: '0px',
                  fontSize: '8px',
                  padding: '4px 6px'
                }}
              >
                BANK AUCTION PROPERTIES
              </div>
              <img src="/logo.png" alt="Mars Logo" style={{ height: '34px', width: '34px' }} />
            </div>

            {/* Property Image */}
            <div 
              className="bg-gray-200 overflow-hidden"
              style={{
                position: 'absolute',
                top: '50px',
                left: '0px',
                width: '270px',
                height: '120px'
              }}
            >
              <img 
                src={image || template.preview} 
                alt="Property"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Title Section */}
            <div 
              className="bg-gray-200 text-gray-800"
              style={{
                position: 'absolute',
                top: '178px',
                left: '0px',
                width: '270px',
                height: '50px',
                padding: '8px'
              }}
            >
              <h1 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0' }}>{data.title.split(' ')[0]}</h1>
              <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#dc2626', margin: '0' }}>{getDynamicTitle()}</h2>
            </div>

            {/* Left Column */}
            <div style={{ position: 'absolute', top: '236px', left: '8px', width: '125px', height: '180px' }}>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '9px', fontWeight: 'bold' }}>LOCATED AT:</div>
                <div style={{ fontSize: '9px', lineHeight: '1.2' }}>{data.location}</div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '9px', fontWeight: 'bold' }}>TYPE:</div>
                <div style={{ fontSize: '9px' }}>{data.type}</div>
              </div>
              <div style={{ fontSize: '11px', fontWeight: 'bold' }}>
                PH NO: {data.contact}
              </div>
            </div>

            {/* Right Column */}
            <div style={{ position: 'absolute', top: '236px', left: '137px', width: '125px', height: '180px' }}>
              <div 
                className="bg-red-600 text-white text-center rounded"
                style={{ padding: '6px', marginBottom: '8px' }}
              >
                <div style={{ fontSize: '8px' }}>RESERVE PRICE</div>
                <div style={{ fontSize: '10px', fontWeight: 'bold' }}>{data.price}</div>
              </div>
              
              <div style={{ marginBottom: '8px' }}>
                {descriptionPoints.map((point, index) => (
                  <div key={index} style={{ fontSize: '8px', marginBottom: '2px' }}>
                    <span className="text-red-600">•</span> <strong>{point}</strong>
                  </div>
                ))}
              </div>
              
              <div style={{ fontSize: '8px', fontWeight: 'bold' }}>
                AUCTION DATE: {data.auctionDate}
              </div>
            </div>
          </div>
        )}

        {/* Template 3 - Modern Professional */}
        {template.id === 3 && (
          <div style={{ width: '270px', height: '480px', position: 'relative', backgroundColor: 'white' }}>
            {/* Header */}
            <div 
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white"
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '270px',
                height: '50px',
                padding: '8px'
              }}
            >
              <div className="flex items-center justify-between" style={{ height: '100%' }}>
                <img src="/logo.png" alt="Mars Logo" style={{ height: '34px', width: '34px' }} />
                <div className="text-right">
                  <div style={{ fontSize: '8px', fontWeight: '500' }}>PREMIUM PROPERTY</div>
                  <div style={{ fontSize: '7px', opacity: '0.9' }}>AUCTION SALE</div>
                </div>
              </div>
            </div>

            {/* Property Image */}
            <div 
              className="bg-gray-100 overflow-hidden"
              style={{
                position: 'absolute',
                top: '50px',
                left: '0px',
                width: '270px',
                height: '130px'
              }}
            >
              <img 
                src={image || template.preview} 
                alt="Property"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Title Section */}
            <div 
              className="text-center border-b border-gray-200"
              style={{
                position: 'absolute',
                top: '188px',
                left: '8px',
                width: '254px',
                height: '40px',
                paddingBottom: '8px'
              }}
            >
              <h1 style={{ fontSize: '11px', fontWeight: 'bold', color: '#374151', margin: '0 0 4px 0' }}>{data.title}</h1>
              <div 
                className="bg-blue-100 text-blue-800 rounded-full inline-block"
                style={{ fontSize: '8px', fontWeight: '500', padding: '2px 8px' }}
              >
                {data.type}
              </div>
            </div>

            {/* Price Highlight */}
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center rounded-lg"
              style={{
                position: 'absolute',
                top: '236px',
                left: '8px',
                width: '254px',
                height: '40px',
                padding: '8px'
              }}
            >
              <div style={{ fontSize: '8px', opacity: '0.9' }}>STARTING PRICE</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{data.price}</div>
            </div>

            {/* Location and Date Grid */}
            <div style={{ position: 'absolute', top: '284px', left: '8px', width: '254px', height: '40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', height: '100%' }}>
                <div className="bg-gray-50 rounded-lg" style={{ padding: '6px' }}>
                  <div style={{ fontSize: '7px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</div>
                  <div style={{ fontSize: '8px', fontWeight: '500', color: '#374151', marginTop: '2px', lineHeight: '1.2' }}>{data.location}</div>
                </div>
                <div className="bg-red-50 rounded-lg" style={{ padding: '6px' }}>
                  <div style={{ fontSize: '7px', color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Auction Date</div>
                  <div style={{ fontSize: '8px', fontWeight: 'bold', color: '#b91c1c', marginTop: '2px' }}>{data.auctionDate}</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div 
              className="bg-blue-50 rounded-lg"
              style={{
                position: 'absolute',
                top: '332px',
                left: '8px',
                width: '254px',
                height: '80px',
                padding: '8px'
              }}
            >
              <div style={{ fontSize: '8px', fontWeight: '600', color: '#1e40af', marginBottom: '6px' }}>PROPERTY HIGHLIGHTS</div>
              <div>
                {descriptionPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2" style={{ fontSize: '8px', color: '#374151', marginBottom: '2px' }}>
                    <div 
                      className="bg-blue-500 rounded-full"
                      style={{ width: '4px', height: '4px', marginTop: '4px', flexShrink: 0 }}
                    ></div>
                    <span style={{ lineHeight: '1.3' }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div 
              className="bg-gray-800 text-white text-center rounded-lg"
              style={{
                position: 'absolute',
                top: '420px',
                left: '8px',
                width: '254px',
                height: '52px',
                padding: '8px'
              }}
            >
              <div style={{ fontSize: '8px', opacity: '0.9' }}>FOR MORE INFORMATION</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '2px' }}>📞 {data.contact}</div>
              <div style={{ fontSize: '7px', opacity: '0.75', marginTop: '2px' }}>www.marsarcs.com</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PosterPreview;