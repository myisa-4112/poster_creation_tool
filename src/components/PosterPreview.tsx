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
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      borderRadius: '8px',
      padding: '24px'
    }}>
      <h3 style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '16px',
        margin: '0 0 16px 0'
      }}>Live Preview</h3>
      
      <div 
        id="poster-content" 
        style={{ 
          width: '270px', 
          height: '480px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          margin: '0 auto',
          fontFamily: 'Arial, sans-serif',
          fontSize: '12px',
          lineHeight: '1.2',
          position: 'relative',
          border: 'none',
          outline: 'none'
        }}
      >
        {/* Template 1 - Bank Auction Properties */}
        {template.id === 1 && (
          <div style={{ 
            width: '270px', 
            height: '480px', 
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Header */}
            <div style={{ 
              height: '50px',
              backgroundColor: '#ffffff',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxSizing: 'border-box'
            }}>
              <img 
                src="/logo.png" 
                alt="Mars Logo" 
                style={{ 
                  height: '34px', 
                  width: '34px', 
                  display: 'block',
                  objectFit: 'contain'
                }} 
              />
              <div style={{ 
                backgroundColor: '#dc2626',
                color: '#ffffff',
                fontSize: '8px',
                fontWeight: 'bold',
                padding: '4px 6px',
                whiteSpace: 'nowrap',
                lineHeight: '1'
              }}>
                BANK AUCTION PROPERTIES
              </div>
            </div>

            {/* Image */}
            <div style={{ 
              height: '120px',
              backgroundColor: '#e5e7eb',
              overflow: 'hidden'
            }}>
              <img 
                src={image || template.preview} 
                alt="Property"
                style={{ 
                  width: '270px', 
                  height: '120px', 
                  objectFit: 'cover',
                  display: 'block',
                  border: 'none'
                }}
              />
            </div>

            {/* Title */}
            <div style={{ 
              height: '25px',
              padding: '8px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                fontSize: '11px', 
                fontWeight: 'bold', 
                color: '#000000',
                lineHeight: '1'
              }}>
                <span style={{ color: '#dc2626', marginRight: '4px' }}>❖</span>
                {data.title}
              </div>
            </div>

            {/* Property Type */}
            <div style={{ 
              height: '20px',
              padding: '0 8px',
              display: 'flex',
              alignItems: 'flex-start',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                fontSize: '10px', 
                display: 'flex', 
                alignItems: 'flex-start',
                lineHeight: '1'
              }}>
                <span style={{ color: '#dc2626', marginRight: '4px' }}>❖</span>
                <div>
                  <span style={{ fontWeight: 'bold' }}>PROPERTY TYPE:</span>
                  <span style={{ 
                    color: '#dc2626', 
                    fontWeight: 'bold', 
                    marginLeft: '4px' 
                  }}>{data.type}</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div style={{ 
              height: '30px',
              padding: '0 8px',
              display: 'flex',
              alignItems: 'flex-start',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                fontSize: '10px', 
                display: 'flex', 
                alignItems: 'flex-start',
                lineHeight: '1.1'
              }}>
                <span style={{ color: '#dc2626', marginRight: '4px' }}>❖</span>
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>PROPERTY LOCATION:</div>
                  <div style={{ color: '#dc2626', fontWeight: 'bold' }}>{data.location}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div style={{ 
              height: '65px',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <div style={{
                border: '1px solid #9ca3af',
                padding: '8px',
                height: '49px',
                boxSizing: 'border-box',
                overflow: 'hidden'
              }}>
                {descriptionPoints.map((point, index) => (
                  <div key={index} style={{ 
                    fontSize: '9px',
                    fontWeight: 'bold',
                    marginBottom: '2px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    lineHeight: '1.1'
                  }}>
                    <span style={{ color: '#dc2626', marginRight: '4px' }}>❖</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price */}
            <div style={{ 
              height: '35px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              boxSizing: 'border-box'
            }}>
              <div style={{
                backgroundColor: '#fde047',
                borderRadius: '4px',
                padding: '8px',
                textAlign: 'center',
                fontSize: '11px',
                fontWeight: 'bold',
                color: '#dc2626',
                width: '100%',
                boxSizing: 'border-box',
                lineHeight: '1'
              }}>
                RESERVE PRICE: {data.price}
              </div>
            </div>

            {/* Auction Date */}
            <div style={{ 
              height: '30px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              boxSizing: 'border-box'
            }}>
              <div style={{
                border: '1px solid #3b82f6',
                padding: '6px',
                textAlign: 'center',
                fontSize: '10px',
                fontWeight: 'bold',
                color: '#3b82f6',
                width: '100%',
                boxSizing: 'border-box',
                lineHeight: '1'
              }}>
                LAST DATE OF AUCTION: {data.auctionDate}
              </div>
            </div>

            {/* Contact */}
            <div style={{ 
              height: '75px',
              padding: '8px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: '#dc2626',
                lineHeight: '1'
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
            background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Header */}
            <div style={{ 
              height: '50px',
              padding: '8px',
              position: 'relative',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '0px',
                right: '0px',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                fontSize: '8px',
                fontWeight: 'bold',
                padding: '4px 6px',
                lineHeight: '1'
              }}>
                BANK AUCTION PROPERTIES
              </div>
              <img 
                src="/logo.png" 
                alt="Mars Logo" 
                style={{ 
                  height: '34px', 
                  width: '34px', 
                  display: 'block',
                  objectFit: 'contain'
                }} 
              />
            </div>

            {/* Image */}
            <div style={{ 
              height: '120px',
              backgroundColor: '#e5e7eb',
              overflow: 'hidden'
            }}>
              <img 
                src={image || template.preview} 
                alt="Property"
                style={{ 
                  width: '270px', 
                  height: '120px', 
                  objectFit: 'cover',
                  display: 'block',
                  border: 'none'
                }}
              />
            </div>

            {/* Title Section */}
            <div style={{
              height: '50px',
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                fontSize: '14px', 
                fontWeight: 'bold', 
                marginBottom: '2px',
                fontStyle: 'italic',
                lineHeight: '1'
              }}>
                {data.title.split(' ')[0]}
              </div>
              <div style={{ 
                fontSize: '12px', 
                fontWeight: 'bold', 
                color: '#dc2626',
                fontStyle: 'italic',
                lineHeight: '1'
              }}>
                {getDynamicTitle()}
              </div>
            </div>

            {/* Content */}
            <div style={{ 
              height: '260px',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                display: 'flex', 
                height: '100%'
              }}>
                {/* Left Column */}
                <div style={{ 
                  width: '50%', 
                  paddingRight: '4px',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ 
                      fontSize: '9px', 
                      fontWeight: 'bold',
                      lineHeight: '1.1'
                    }}>LOCATED AT:</div>
                    <div style={{ 
                      fontSize: '9px',
                      lineHeight: '1.1'
                    }}>{data.location}</div>
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ 
                      fontSize: '9px', 
                      fontWeight: 'bold',
                      lineHeight: '1.1'
                    }}>TYPE:</div>
                    <div style={{ 
                      fontSize: '9px',
                      lineHeight: '1.1'
                    }}>{data.type}</div>
                  </div>
                  <div style={{ 
                    fontSize: '11px', 
                    fontWeight: 'bold',
                    lineHeight: '1'
                  }}>
                    PH NO: {data.contact}
                  </div>
                </div>

                {/* Right Column */}
                <div style={{ 
                  width: '50%', 
                  paddingLeft: '4px',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{
                    backgroundColor: '#dc2626',
                    color: '#ffffff',
                    textAlign: 'center',
                    borderRadius: '4px',
                    padding: '6px',
                    marginBottom: '8px'
                  }}>
                    <div style={{ 
                      fontSize: '8px',
                      lineHeight: '1'
                    }}>RESERVE PRICE</div>
                    <div style={{ 
                      fontSize: '10px', 
                      fontWeight: 'bold',
                      lineHeight: '1'
                    }}>{data.price}</div>
                  </div>
                  
                  <div style={{ marginBottom: '8px' }}>
                    {descriptionPoints.map((point, index) => (
                      <div key={index} style={{ 
                        fontSize: '8px', 
                        marginBottom: '2px',
                        fontWeight: 'bold',
                        lineHeight: '1.1'
                      }}>
                        <span style={{ color: '#dc2626' }}>•</span>
                        <span style={{ marginLeft: '2px' }}>{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{ 
                    fontSize: '8px', 
                    fontWeight: 'bold',
                    lineHeight: '1'
                  }}>
                    AUCTION DATE: {data.auctionDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Template 3 - Modern Professional */}
        {template.id === 3 && (
          <div style={{ 
            width: '270px', 
            height: '480px', 
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Header */}
            <div style={{
              height: '50px',
              background: 'linear-gradient(90deg, #2563eb 0%, #1e40af 100%)',
              color: '#ffffff',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxSizing: 'border-box'
            }}>
              <img 
                src="/logo.png" 
                alt="Mars Logo" 
                style={{ 
                  height: '34px', 
                  width: '34px', 
                  display: 'block',
                  objectFit: 'contain'
                }} 
              />
              <div style={{ textAlign: 'right' }}>
                <div style={{ 
                  fontSize: '8px', 
                  fontWeight: '500',
                  lineHeight: '1'
                }}>PREMIUM PROPERTY</div>
                <div style={{ 
                  fontSize: '7px', 
                  opacity: '0.9',
                  lineHeight: '1'
                }}>AUCTION SALE</div>
              </div>
            </div>

            {/* Image */}
            <div style={{ 
              height: '130px',
              backgroundColor: '#f3f4f6',
              overflow: 'hidden'
            }}>
              <img 
                src={image || template.preview} 
                alt="Property"
                style={{ 
                  width: '270px', 
                  height: '130px', 
                  objectFit: 'cover',
                  display: 'block',
                  border: 'none'
                }}
              />
            </div>

            {/* Title Section */}
            <div style={{
              height: '45px',
              padding: '8px',
              textAlign: 'center',
              borderBottom: '1px solid #e5e7eb',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                fontSize: '11px', 
                fontWeight: 'bold', 
                color: '#374151', 
                marginBottom: '4px',
                lineHeight: '1'
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
                display: 'inline-block',
                lineHeight: '1'
              }}>
                {data.type}
              </div>
            </div>

            {/* Price */}
            <div style={{ 
              height: '45px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              boxSizing: 'border-box'
            }}>
              <div style={{
                background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                textAlign: 'center',
                borderRadius: '8px',
                padding: '8px',
                width: '100%',
                boxSizing: 'border-box'
              }}>
                <div style={{ 
                  fontSize: '8px', 
                  opacity: '0.9',
                  lineHeight: '1'
                }}>STARTING PRICE</div>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: 'bold',
                  lineHeight: '1'
                }}>{data.price}</div>
              </div>
            </div>

            {/* Location and Date */}
            <div style={{ 
              height: '45px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                display: 'flex', 
                width: '100%',
                gap: '8px'
              }}>
                <div style={{ width: '50%' }}>
                  <div style={{
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    padding: '6px',
                    height: '29px',
                    boxSizing: 'border-box'
                  }}>
                    <div style={{ 
                      fontSize: '7px', 
                      color: '#6b7280', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em',
                      lineHeight: '1'
                    }}>
                      Location
                    </div>
                    <div style={{ 
                      fontSize: '8px', 
                      fontWeight: '500', 
                      color: '#374151', 
                      marginTop: '2px',
                      lineHeight: '1.1'
                    }}>
                      {data.location}
                    </div>
                  </div>
                </div>
                <div style={{ width: '50%' }}>
                  <div style={{
                    backgroundColor: '#fef2f2',
                    borderRadius: '8px',
                    padding: '6px',
                    height: '29px',
                    boxSizing: 'border-box'
                  }}>
                    <div style={{ 
                      fontSize: '7px', 
                      color: '#dc2626', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em',
                      lineHeight: '1'
                    }}>
                      Auction Date
                    </div>
                    <div style={{ 
                      fontSize: '8px', 
                      fontWeight: 'bold', 
                      color: '#b91c1c', 
                      marginTop: '2px',
                      lineHeight: '1'
                    }}>
                      {data.auctionDate}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div style={{ 
              height: '85px',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <div style={{
                backgroundColor: '#eff6ff',
                borderRadius: '8px',
                padding: '8px',
                height: '69px',
                boxSizing: 'border-box',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  fontSize: '8px', 
                  fontWeight: '600', 
                  color: '#1e40af', 
                  marginBottom: '6px',
                  lineHeight: '1'
                }}>
                  PROPERTY HIGHLIGHTS
                </div>
                {descriptionPoints.map((point, index) => (
                  <div key={index} style={{ 
                    fontSize: '8px', 
                    color: '#374151', 
                    marginBottom: '2px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    lineHeight: '1.1'
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

            {/* Contact */}
            <div style={{ 
              height: '75px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              boxSizing: 'border-box'
            }}>
              <div style={{
                backgroundColor: '#1f2937',
                color: '#ffffff',
                textAlign: 'center',
                borderRadius: '8px',
                padding: '8px',
                width: '100%',
                boxSizing: 'border-box'
              }}>
                <div style={{ 
                  fontSize: '8px', 
                  opacity: '0.9',
                  lineHeight: '1'
                }}>FOR MORE INFORMATION</div>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: 'bold', 
                  marginTop: '2px',
                  lineHeight: '1'
                }}>
                  📞 {data.contact}
                </div>
                <div style={{ 
                  fontSize: '7px', 
                  opacity: '0.75', 
                  marginTop: '2px',
                  lineHeight: '1'
                }}>
                  www.marsarcs.com
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