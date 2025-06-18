
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Upload, Download } from 'lucide-react';
import PosterPreview from './PosterPreview';

interface Template {
  id: number;
  name: string;
  preview: string;
  type: string;
  features: string[];
}

interface TemplateEditorProps {
  template: Template;
  onBack: () => void;
}

const TemplateEditor: React.FC<TemplateEditorProps> = ({ template, onBack }) => {
  const [formData, setFormData] = useState({
    title: 'FLAT FOR SALE',
    price: 'RS.45,00,000/-',
    location: 'PERUMBAKKAM, KANCHEEPURAM DISTRICT',
    description: 'Beautiful property with modern amenities',
    contact: '9884866115',
    auctionDate: '21.05.2025',
    propertyType: 'RESIDENTIAL FLAT',
    area: '1084 SFT',
    builtUpArea: '1084 SFT',
    landArea: '446 SFT',
    plotNumber: '3',
    apartmentName: 'DHATHA SAI NIVAS APARTMENTS',
    floorNumber: 'S2',
    facing: 'EAST',
    parking: 'ONE COVER CAR PARKING',
    uds: '661'
  });

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    console.log('Downloading poster with data:', formData);
    alert('Poster download functionality would be implemented here!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Templates
            </Button>
            <h1 className="text-xl font-bold text-white">Editing: {template.name}</h1>
          </div>
          
          <Button
            onClick={handleDownload}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Poster
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Editor Panel */}
        <div className="lg:w-1/2 p-6 space-y-6 overflow-y-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Customize Your Poster</h2>
            
            <div className="space-y-4">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title" className="text-white">Property Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="propertyType" className="text-white">Property Type</Label>
                  <Input
                    id="propertyType"
                    value={formData.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>
              </div>

              {/* Price and Auction Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price" className="text-white">Reserve Price</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="auctionDate" className="text-white">Auction Date</Label>
                  <Input
                    id="auctionDate"
                    value={formData.auctionDate}
                    onChange={(e) => handleInputChange('auctionDate', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>
              </div>

              {/* Location Details */}
              <div>
                <Label htmlFor="location" className="text-white">Property Location</Label>
                <Textarea
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  rows={2}
                />
              </div>

              {/* Property Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="builtUpArea" className="text-white">Built-up Area (BUA)</Label>
                  <Input
                    id="builtUpArea"
                    value={formData.builtUpArea}
                    onChange={(e) => handleInputChange('builtUpArea', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="landArea" className="text-white">Land Area</Label>
                  <Input
                    id="landArea"
                    value={formData.landArea}
                    onChange={(e) => handleInputChange('landArea', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="uds" className="text-white">UDS</Label>
                  <Input
                    id="uds"
                    value={formData.uds}
                    onChange={(e) => handleInputChange('uds', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>
              </div>

              {/* Apartment Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="apartmentName" className="text-white">Apartment/Complex Name</Label>
                  <Input
                    id="apartmentName"
                    value={formData.apartmentName}
                    onChange={(e) => handleInputChange('apartmentName', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="floorNumber" className="text-white">Floor Number</Label>
                  <Input
                    id="floorNumber"
                    value={formData.floorNumber}
                    onChange={(e) => handleInputChange('floorNumber', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="plotNumber" className="text-white">Plot Number</Label>
                  <Input
                    id="plotNumber"
                    value={formData.plotNumber}
                    onChange={(e) => handleInputChange('plotNumber', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="facing" className="text-white">Facing Direction</Label>
                  <Input
                    id="facing"
                    value={formData.facing}
                    onChange={(e) => handleInputChange('facing', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="parking" className="text-white">Parking Details</Label>
                  <Input
                    id="parking"
                    value={formData.parking}
                    onChange={(e) => handleInputChange('parking', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <Label htmlFor="contact" className="text-white">Contact Number</Label>
                <Input
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => handleInputChange('contact', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/50"
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-white">Additional Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  rows={3}
                />
              </div>

              {/* Image Upload */}
              <div>
                <Label htmlFor="image" className="text-white">Property Images</Label>
                <div className="mt-2">
                  <label htmlFor="image" className="flex items-center justify-center w-full h-32 border-2 border-dashed border-white/30 rounded-lg cursor-pointer hover:border-white/50 transition-colors">
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-white/50 mx-auto mb-2" />
                      <p className="text-white/70">Click to upload property images</p>
                    </div>
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:w-1/2 p-6">
          <div className="sticky top-6">
            <PosterPreview 
              template={template}
              data={formData}
              image={uploadedImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;
