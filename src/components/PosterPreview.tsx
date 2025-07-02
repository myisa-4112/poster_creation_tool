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
          backgroundColor: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          margin: '0 auto',
          fontFamily: 'Arial, sans-serif',
          fontSize: '12px',
          lineHeight: '1.2',
          boxSizing: 'border-box'
        }}
      >
        {/* Template 1 - Bank Auction Properties */}
        {template.id === 1 && (
          <table style={{ 
            width: '270px', 
            height: '480px', 
            backgroundColor: 'white',
            borderCollapse: 'collapse',
            tableLayout: 'fixed',
            margin: '0',
            padding: '0'
          }}>
            <tbody>
              {/* Header Row */}
              <tr style={{ height: '50px' }}>
                <td style={{ 
                  padding: '8px',
                  backgroundColor: 'white',
                  verticalAlign: 'middle'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    height: '34px'
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
                      whiteSpace: 'nowrap'
                    }}>
                      BANK AUCTION PROPERTIES
                    </div>
                  </div>
                </td>
              </tr>

              {/* Image Row */}
              <tr style={{ height: '120px' }}>
                <td style={{ padding: '0', backgroundColor: '#e5e7eb' }}>
                  <img 
                    src={image || template.preview} 
                    alt="Property"
                    style={{ 
                      width: '270px', 
                      height: '120px', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </td>
              </tr>

              {/* Title Row */}
              <tr style={{ height: '25px' }}>
                <td style={{ 
                  padding: '8px',
                  textAlign: 'center',
                  verticalAlign: 'middle'
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'black' }}>
                    <span style={{ color: '#dc2626', marginRight: '4px' }}>❖</span>
                    {data.title}
                  </div>
                </td>
              </tr>

              {/* Property Type Row */}
              <tr style={{ height: '20px' }}>
                <td style={{ 
                  padding: '0 8px',
                  verticalAlign: 'top'
                }}>
                  <div style={{ fontSize: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#dc2626', marginRight: '4px' }}>❖</span>
                    <div>
                      <span style={{ fontWeight: 'bold' }}>PROPERTY TYPE:</span>
                      <span style={{ color: '#dc2626', fontWeight: 'bold', marginLeft: '4px' }}>{data.type}</span>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Location Row */}
              <tr style={{ height: '30px' }}>
                <td style={{ 
                  padding: '0 8px',
                  verticalAlign: 'top'
                }}>
                  <div style={{ fontSize: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#dc2626', marginRight: '4px' }}>❖</span>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>PROPERTY LOCATION:</div>
                      <div style={{ color: '#dc2626', fontWeight: 'bold' }}>{data.location}</div>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Description Row */}
              <tr style={{ height: '65px' }}>
                <td style={{ 
                  padding: '8px',
                  verticalAlign: 'top'
                }}>
                  <div style={{
                    border: '1px solid #9ca3af',
                    padding: '8px',
                    height: '49px',
                    boxSizing: 'border-box'
                  }}>
                    {descriptionPoints.map((point, index) => (
                      <div key={index} style={{ 
                        fontSize: '9px',
                        fontWeight: 'bold',
                        marginBottom: '2px',
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}>
                        <span style={{ color: '#dc2626', marginRight: '4px' }}>❖</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>

              {/* Price Row */}
              <tr style={{ height: '35px' }}>
                <td style={{ 
                  padding: '8px',
                  verticalAlign: 'middle'
                }}>
                  <div style={{
                    backgroundColor: '#fde047',
                    borderRadius: '4px',
                    padding: '8px',
                    textAlign: 'center',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: '#dc2626'
                  }}>
                    RESERVE PRICE: {data.price}
                  </div>
                </td>
              </tr>

              {/* Auction Date Row */}
              <tr style={{ height: '30px' }}>
                <td style={{ 
                  padding: '8px',
                  verticalAlign: 'middle'
                }}>
                  <div style={{
                    border: '1px solid #3b82f6',
                    padding: '6px',
                    textAlign: 'center',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    color: '#3b82f6'
                  }}>
                    LAST DATE OF AUCTION: {data.auctionDate}
                  </div>
                </td>
              </tr>

              {/* Contact Row */}
              <tr style={{ height: '75px' }}>
                <td style={{ 
                  padding: '8px',
                  textAlign: 'center',
                  verticalAlign: 'middle'
                }}>
                  <div style={{ 
                    fontSize: '16px', 
                    fontWeight: 'bold', 
                    color: '#dc2626'
                  }}>
                    PH - {data.contact}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        )}

        {/* Template 2 - Villa Style */}
        {template.id === 2 && (
          <table style={{ 
            width: '270px', 
            height: '480px', 
            background: 'linear-gradient(to bottom right, #fed7aa, #fdba74)',
            borderCollapse: 'collapse',
            tableLayout: 'fixed',
            margin: '0',
            padding: '0'
          }}>
            <tbody>
              {/* Header Row */}
              <tr style={{ height: '50px' }}>
                <td style={{ 
                  padding: '8px',
                  verticalAlign: 'middle',
                  position: 'relative'
                }}>
                  <div style={{ 
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    backgroundColor: '#dc2626',
                    color: 'white',
                    fontSize: '8px',
                    fontWeight: 'bold',
                    padding: '4px 6px'
                  }}>
                    BANK AUCTION PROPERTIES
                  </div>
                  <img 
                    src="/logo.png" 
                    alt="Mars Logo" 
                    style={{ height: '34px', width: '34px', display: 'block' }} 
                  />
                </td>
              </tr>

              {/* Image Row */}
              <tr style={{ height: '120px' }}>
                <td style={{ padding: '0', backgroundColor: '#e5e7eb' }}>
                  <img 
                    src={image || template.preview} 
                    alt="Property"
                    style={{ 
                      width: '270px', 
                      height: '120px', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </td>
              </tr>

              {/* Title Section Row */}
              <tr style={{ height: '50px' }}>
                <td style={{
                  backgroundColor: '#e5e7eb',
                  color: '#374151',
                  padding: '8px',
                  verticalAlign: 'middle'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>
                    {data.title.split(' ')[0]}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#dc2626' }}>
                    {getDynamicTitle()}
                  </div>
                </td>
              </tr>

              {/* Content Row */}
              <tr style={{ height: '260px' }}>
                <td style={{ padding: '8px', verticalAlign: 'top' }}>
                  <table style={{ width: '100%', height: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr>
                        {/* Left Column */}
                        <td style={{ width: '50%', verticalAlign: 'top', paddingRight: '4px' }}>
                          <div style={{ marginBottom: '12px' }}>
                            <div style={{ fontSize: '9px', fontWeight: 'bold' }}>LOCATED AT:</div>
                            <div style={{ fontSize: '9px' }}>{data.location}</div>
                          </div>
                          <div style={{ marginBottom: '12px' }}>
                            <div style={{ fontSize: '9px', fontWeight: 'bold' }}>TYPE:</div>
                            <div style={{ fontSize: '9px' }}>{data.type}</div>
                          </div>
                          <div style={{ fontSize: '11px', fontWeight: 'bold' }}>
                            PH NO: {data.contact}
                          </div>
                        </td>

                        {/* Right Column */}
                        <td style={{ width: '50%', verticalAlign: 'top', paddingLeft: '4px' }}>
                          <div style={{
                            backgroundColor: '#dc2626',
                            color: 'white',
                            textAlign: 'center',
                            borderRadius: '4px',
                            padding: '6px',
                            marginBottom: '8px'
                          }}>
                            <div style={{ fontSize: '8px' }}>RESERVE PRICE</div>
                            <div style={{ fontSize: '10px', fontWeight: 'bold' }}>{data.price}</div>
                          </div>
                          
                          <div style={{ marginBottom: '8px' }}>
                            {descriptionPoints.map((point, index) => (
                              <div key={index} style={{ 
                                fontSize: '8px', 
                                marginBottom: '2px',
                                fontWeight: 'bold'
                              }}>
                                <span style={{ color: '#dc2626' }}>•</span>
                                <span style={{ marginLeft: '2px' }}>{point}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div style={{ fontSize: '8px', fontWeight: 'bold' }}>
                            AUCTION DATE: {data.auctionDate}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        )}

        {/* Template 3 - Modern Professional */}
        {template.id === 3 && (
          <table style={{ 
            width: '270px', 
            height: '480px', 
            backgroundColor: 'white',
            borderCollapse: 'collapse',
            tableLayout: 'fixed',
            margin: '0',
            padding: '0'
          }}>
            <tbody>
              {/* Header Row */}
              <tr style={{ height: '50px' }}>
                <td style={{
                  background: 'linear-gradient(to right, #2563eb, #1e40af)',
                  color: 'white',
                  padding: '8px',
                  verticalAlign: 'middle'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    height: '34px'
                  }}>
                    <img 
                      src="/logo.png" 
                      alt="Mars Logo" 
                      style={{ height: '34px', width: '34px', display: 'block' }} 
                    />
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '8px', fontWeight: '500' }}>PREMIUM PROPERTY</div>
                      <div style={{ fontSize: '7px', opacity: '0.9' }}>AUCTION SALE</div>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Image Row */}
              <tr style={{ height: '130px' }}>
                <td style={{ padding: '0', backgroundColor: '#f3f4f6' }}>
                  <img 
                    src={image || template.preview} 
                    alt="Property"
                    style={{ 
                      width: '270px', 
                      height: '130px', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </td>
              </tr>

              {/* Title Section Row */}
              <tr style={{ height: '45px' }}>
                <td style={{
                  padding: '8px',
                  textAlign: 'center',
                  borderBottom: '1px solid #e5e7eb',
                  verticalAlign: 'middle'
                }}>
                  <div style={{ 
                    fontSize: '11px', 
                    fontWeight: 'bold', 
                    color: '#374151', 
                    marginBottom: '4px'
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
                </td>
              </tr>

              {/* Price Row */}
              <tr style={{ height: '45px' }}>
                <td style={{ padding: '8px', verticalAlign: 'middle' }}>
                  <div style={{
                    background: 'linear-gradient(to right, #10b981, #059669)',
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: '8px',
                    padding: '8px'
                  }}>
                    <div style={{ fontSize: '8px', opacity: '0.9' }}>STARTING PRICE</div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{data.price}</div>
                  </div>
                </td>
              </tr>

              {/* Location and Date Row */}
              <tr style={{ height: '45px' }}>
                <td style={{ padding: '8px', verticalAlign: 'middle' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr>
                        <td style={{ width: '50%', paddingRight: '4px' }}>
                          <div style={{
                            backgroundColor: '#f9fafb',
                            borderRadius: '8px',
                            padding: '6px'
                          }}>
                            <div style={{ 
                              fontSize: '7px', 
                              color: '#6b7280', 
                              textTransform: 'uppercase', 
                              letterSpacing: '0.05em'
                            }}>
                              Location
                            </div>
                            <div style={{ 
                              fontSize: '8px', 
                              fontWeight: '500', 
                              color: '#374151', 
                              marginTop: '2px'
                            }}>
                              {data.location}
                            </div>
                          </div>
                        </td>
                        <td style={{ width: '50%', paddingLeft: '4px' }}>
                          <div style={{
                            backgroundColor: '#fef2f2',
                            borderRadius: '8px',
                            padding: '6px'
                          }}>
                            <div style={{ 
                              fontSize: '7px', 
                              color: '#dc2626', 
                              textTransform: 'uppercase', 
                              letterSpacing: '0.05em'
                            }}>
                              Auction Date
                            </div>
                            <div style={{ 
                              fontSize: '8px', 
                              fontWeight: 'bold', 
                              color: '#b91c1c', 
                              marginTop: '2px'
                            }}>
                              {data.auctionDate}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              {/* Features Row */}
              <tr style={{ height: '85px' }}>
                <td style={{ padding: '8px', verticalAlign: 'top' }}>
                  <div style={{
                    backgroundColor: '#eff6ff',
                    borderRadius: '8px',
                    padding: '8px',
                    height: '69px',
                    boxSizing: 'border-box'
                  }}>
                    <div style={{ 
                      fontSize: '8px', 
                      fontWeight: '600', 
                      color: '#1e40af', 
                      marginBottom: '6px'
                    }}>
                      PROPERTY HIGHLIGHTS
                    </div>
                    {descriptionPoints.map((point, index) => (
                      <div key={index} style={{ 
                        fontSize: '8px', 
                        color: '#374151', 
                        marginBottom: '2px',
                        display: 'flex',
                        alignItems: 'flex-start'
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
                </td>
              </tr>

              {/* Contact Row */}
              <tr style={{ height: '75px' }}>
                <td style={{ padding: '8px', verticalAlign: 'middle' }}>
                  <div style={{
                    backgroundColor: '#1f2937',
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: '8px',
                    padding: '8px'
                  }}>
                    <div style={{ fontSize: '8px', opacity: '0.9' }}>FOR MORE INFORMATION</div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '2px' }}>
                      📞 {data.contact}
                    </div>
                    <div style={{ fontSize: '7px', opacity: '0.75', marginTop: '2px' }}>
                      www.marsarcs.com
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PosterPreview;