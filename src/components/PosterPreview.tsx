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
        style={{ 
          width: '270px', 
          height: '480px',
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          margin: '0 auto',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        {/* Template 1 - Bank Auction Properties */}
        {template.id === 1 && (
          <div style={{ width: '270px', height: '480px', position: 'relative', backgroundColor: 'white' }}>
            {/* Header */}
            <div style={{ 
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '270px',
              height: '50px',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <img 
                src="/logo.png" 
                alt="Mars Logo" 
                style={{ height: '34px', width: '34px', display: 'block' }} 
              />
              <div style={{ 
                backgroundColor: '#dc2626',
                color: 'white',
                fontSize: '8px',
                fontWeight: 'bold',
                padding: '4px 6px',
                lineHeight: '1',
                textAlign: 'center'
              }}>
                BANK AUCTION PROPERTIES
              </div>
            </div>

            {/* Property Image */}
            <div style={{
              position: 'absolute',
              top: '50px',
              left: '0px',
              width: '270px',
              height: '120px',
              backgroundColor: '#e5e7eb',
              overflow: 'hidden'
            }}>
              <img 
                src={image || template.preview} 
                alt="Property"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Title */}
            <div style={{
              position: 'absolute',
              top: '178px',
              left: '8px',
              width: '254px',
              height: '20px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: '#dc2626', fontSize: '11px', marginRight: '4px' }}>❖</span>
              <span style={{ 
                color: 'black', 
                fontSize: '11px', 
                fontWeight: 'bold',
                lineHeight: '1.2'
              }}>
                {data.title}
              </span>
            </div>

            {/* Property Type */}
            <div style={{
              position: 'absolute',
              top: '206px',
              left: '8px',
              width: '254px',
              height: '16px',
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <span style={{ color: '#dc2626', fontSize: '10px', marginRight: '4px' }}>❖</span>
              <div style={{ fontSize: '10px', lineHeight: '1.2' }}>
                <span style={{ fontWeight: 'bold' }}>PROPERTY TYPE:</span>
                <span style={{ color: '#dc2626', fontWeight: 'bold', marginLeft: '4px' }}>{data.type}</span>
              </div>
            </div>

            {/* Property Location */}
            <div style={{
              position: 'absolute',
              top: '230px',
              left: '8px',
              width: '254px',
              height: '24px',
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <span style={{ color: '#dc2626', fontSize: '10px', marginRight: '4px', marginTop: '1px' }}>❖</span>
              <div style={{ fontSize: '10px', lineHeight: '1.2' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>PROPERTY LOCATION:</div>
                <div style={{ color: '#dc2626', fontWeight: 'bold' }}>{data.location}</div>
              </div>
            </div>

            {/* Description Points */}
            <div style={{
              position: 'absolute',
              top: '262px',
              left: '8px',
              width: '254px',
              height: '60px',
              border: '1px solid #9ca3af',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              {descriptionPoints.map((point, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '2px',
                  lineHeight: '1.2'
                }}>
                  <span style={{ color: '#dc2626', fontSize: '9px', marginRight: '4px' }}>❖</span>
                  <span style={{ fontSize: '9px', fontWeight: 'bold' }}>{point}</span>
                </div>
              ))}
            </div>

            {/* Reserve Price */}
            <div style={{
              position: 'absolute',
              top: '330px',
              left: '8px',
              width: '254px',
              height: '30px',
              backgroundColor: '#fde047',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ 
                fontSize: '11px', 
                fontWeight: 'bold', 
                color: '#dc2626',
                textAlign: 'center'
              }}>
                RESERVE PRICE: {data.price}
              </div>
            </div>

            {/* Auction Date */}
            <div style={{
              position: 'absolute',
              top: '368px',
              left: '8px',
              width: '254px',
              height: '24px',
              border: '1px solid #3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ 
                fontSize: '10px', 
                fontWeight: 'bold', 
                color: '#3b82f6',
                textAlign: 'center'
              }}>
                LAST DATE OF AUCTION: {data.auctionDate}
              </div>
            </div>

            {/* Contact */}
            <div style={{
              position: 'absolute',
              top: '400px',
              left: '8px',
              width: '254px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: '#dc2626',
                textAlign: 'center'
              }}>
                PH - {data.contact}
              </div>
            </div>
          </div>
        )}

        {/* Template 2 - Villa Style */}
        {template.id === 2 && (
          <div style={{ 
            width: '270px', 
            height: '480px', 
            position: 'relative',
            background: 'linear-gradient(to bottom right, #fed7aa, #fdba74)'
          }}>
            {/* Header */}
            <div style={{ 
              position: 'absolute', 
              top: '0px', 
              left: '0px', 
              width: '270px', 
              height: '50px', 
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '0px',
                right: '0px',
                backgroundColor: '#dc2626',
                color: 'white',
                fontSize: '8px',
                fontWeight: 'bold',
                padding: '4px 6px',
                textAlign: 'center'
              }}>
                BANK AUCTION PROPERTIES
              </div>
              <img 
                src="/logo.png" 
                alt="Mars Logo" 
                style={{ height: '34px', width: '34px', display: 'block' }} 
              />
            </div>

            {/* Property Image */}
            <div style={{
              position: 'absolute',
              top: '50px',
              left: '0px',
              width: '270px',
              height: '120px',
              backgroundColor: '#e5e7eb',
              overflow: 'hidden'
            }}>
              <img 
                src={image || template.preview} 
                alt="Property"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Title Section */}
            <div style={{
              position: 'absolute',
              top: '178px',
              left: '0px',
              width: '270px',
              height: '50px',
              backgroundColor: '#e5e7eb',
              color: '#374151',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', margin: '0', lineHeight: '1.2' }}>
                {data.title.split(' ')[0]}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#dc2626', margin: '0', lineHeight: '1.2' }}>
                {getDynamicTitle()}
              </div>
            </div>

            {/* Left Column */}
            <div style={{ 
              position: 'absolute', 
              top: '236px', 
              left: '8px', 
              width: '125px', 
              height: '180px'
            }}>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '9px', fontWeight: 'bold', lineHeight: '1.2' }}>LOCATED AT:</div>
                <div style={{ fontSize: '9px', lineHeight: '1.2' }}>{data.location}</div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '9px', fontWeight: 'bold', lineHeight: '1.2' }}>TYPE:</div>
                <div style={{ fontSize: '9px', lineHeight: '1.2' }}>{data.type}</div>
              </div>
              <div style={{ fontSize: '11px', fontWeight: 'bold', lineHeight: '1.2' }}>
                PH NO: {data.contact}
              </div>
            </div>

            {/* Right Column */}
            <div style={{ 
              position: 'absolute', 
              top: '236px', 
              left: '137px', 
              width: '125px', 
              height: '180px'
            }}>
              <div style={{
                backgroundColor: '#dc2626',
                color: 'white',
                textAlign: 'center',
                borderRadius: '4px',
                padding: '6px',
                marginBottom: '8px'
              }}>
                <div style={{ fontSize: '8px', lineHeight: '1.2' }}>RESERVE PRICE</div>
                <div style={{ fontSize: '10px', fontWeight: 'bold', lineHeight: '1.2' }}>{data.price}</div>
              </div>
              
              <div style={{ marginBottom: '8px' }}>
                {descriptionPoints.map((point, index) => (
                  <div key={index} style={{ 
                    fontSize: '8px', 
                    marginBottom: '2px',
                    lineHeight: '1.2'
                  }}>
                    <span style={{ color: '#dc2626' }}>•</span>
                    <span style={{ fontWeight: 'bold', marginLeft: '2px' }}>{point}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ fontSize: '8px', fontWeight: 'bold', lineHeight: '1.2' }}>
                AUCTION DATE: {data.auctionDate}
              </div>
            </div>
          </div>
        )}

        {/* Template 3 - Modern Professional */}
        {template.id === 3 && (
          <div style={{ 
            width: '270px', 
            height: '480px', 
            position: 'relative', 
            backgroundColor: 'white' 
          }}>
            {/* Header */}
            <div style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '270px',
              height: '50px',
              background: 'linear-gradient(to right, #2563eb, #1e40af)',
              color: 'white',
              padding: '8px',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <img 
                src="/logo.png" 
                alt="Mars Logo" 
                style={{ height: '34px', width: '34px', display: 'block' }} 
              />
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '8px', fontWeight: '500', lineHeight: '1.2' }}>PREMIUM PROPERTY</div>
                <div style={{ fontSize: '7px', opacity: '0.9', lineHeight: '1.2' }}>AUCTION SALE</div>
              </div>
            </div>

            {/* Property Image */}
            <div style={{
              position: 'absolute',
              top: '50px',
              left: '0px',
              width: '270px',
              height: '130px',
              backgroundColor: '#f3f4f6',
              overflow: 'hidden'
            }}>
              <img 
                src={image || template.preview} 
                alt="Property"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Title Section */}
            <div style={{
              position: 'absolute',
              top: '188px',
              left: '8px',
              width: '254px',
              height: '40px',
              textAlign: 'center',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '8px',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                fontSize: '11px', 
                fontWeight: 'bold', 
                color: '#374151', 
                margin: '0 0 4px 0',
                lineHeight: '1.2'
              }}>
                {data.title}
              </div>
              <div style={{
                backgroundColor: '#dbeafe',
                color: '#1e40af',
                borderRadius: '9999px',
                fontSize: '8px',
                fontWeight: '500',
                padding: '2px 8px',
                display: 'inline-block'
              }}>
                {data.type}
              </div>
            </div>

            {/* Price Highlight */}
            <div style={{
              position: 'absolute',
              top: '236px',
              left: '8px',
              width: '254px',
              height: '40px',
              background: 'linear-gradient(to right, #10b981, #059669)',
              color: 'white',
              textAlign: 'center',
              borderRadius: '8px',
              padding: '8px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ fontSize: '8px', opacity: '0.9', lineHeight: '1.2' }}>STARTING PRICE</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', lineHeight: '1.2' }}>{data.price}</div>
            </div>

            {/* Location and Date Grid */}
            <div style={{ 
              position: 'absolute', 
              top: '284px', 
              left: '8px', 
              width: '254px', 
              height: '40px',
              display: 'flex',
              gap: '8px'
            }}>
              <div style={{
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                padding: '6px',
                flex: '1',
                boxSizing: 'border-box'
              }}>
                <div style={{ 
                  fontSize: '7px', 
                  color: '#6b7280', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  lineHeight: '1.2'
                }}>
                  Location
                </div>
                <div style={{ 
                  fontSize: '8px', 
                  fontWeight: '500', 
                  color: '#374151', 
                  marginTop: '2px', 
                  lineHeight: '1.2' 
                }}>
                  {data.location}
                </div>
              </div>
              <div style={{
                backgroundColor: '#fef2f2',
                borderRadius: '8px',
                padding: '6px',
                flex: '1',
                boxSizing: 'border-box'
              }}>
                <div style={{ 
                  fontSize: '7px', 
                  color: '#dc2626', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  lineHeight: '1.2'
                }}>
                  Auction Date
                </div>
                <div style={{ 
                  fontSize: '8px', 
                  fontWeight: 'bold', 
                  color: '#b91c1c', 
                  marginTop: '2px',
                  lineHeight: '1.2'
                }}>
                  {data.auctionDate}
                </div>
              </div>
            </div>

            {/* Features */}
            <div style={{
              position: 'absolute',
              top: '332px',
              left: '8px',
              width: '254px',
              height: '80px',
              backgroundColor: '#eff6ff',
              borderRadius: '8px',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                fontSize: '8px', 
                fontWeight: '600', 
                color: '#1e40af', 
                marginBottom: '6px',
                lineHeight: '1.2'
              }}>
                PROPERTY HIGHLIGHTS
              </div>
              <div>
                {descriptionPoints.map((point, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    fontSize: '8px', 
                    color: '#374151', 
                    marginBottom: '2px',
                    lineHeight: '1.3'
                  }}>
                    <div style={{
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '50%',
                      marginTop: '4px',
                      marginRight: '6px',
                      flexShrink: 0
                    }}></div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div style={{
              position: 'absolute',
              top: '420px',
              left: '8px',
              width: '254px',
              height: '52px',
              backgroundColor: '#1f2937',
              color: 'white',
              textAlign: 'center',
              borderRadius: '8px',
              padding: '8px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ fontSize: '8px', opacity: '0.9', lineHeight: '1.2' }}>FOR MORE INFORMATION</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '2px', lineHeight: '1.2' }}>
                📞 {data.contact}
              </div>
              <div style={{ fontSize: '7px', opacity: '0.75', marginTop: '2px', lineHeight: '1.2' }}>
                www.marsarcs.com
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PosterPreview;