import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Upload, Download } from 'lucide-react';
import PosterPreview from './PosterPreview';
import html2canvas from 'html2canvas';

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
    type: 'RESIDENTIAL FLAT',
    price: 'RS.45,00,000/-',
    auctionDate: '21.05.2025',
    location: 'PERUMBAKKAM, KANCHEEPURAM DISTRICT',
    contact: '9884866115',
    description: 'Beautiful property with modern amenities\nPrime location with excellent connectivity\nReady to move condition'
  });

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

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

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const posterElement = document.getElementById('poster-content');
      if (posterElement) {
        // Configure html2canvas for better quality
        const canvas = await html2canvas(posterElement, {
          scale: 3, // Higher resolution
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          width: posterElement.offsetWidth,
          height: posterElement.offsetHeight,
          onclone: (clonedDoc) => {
            // Ensure images are loaded in the cloned document
            const images = clonedDoc.querySelectorAll('img');
            images.forEach((img) => {
              img.style.maxWidth = '100%';
              img.style.height = 'auto';
            });
          }
        });

        // Create download link
        const link = document.createElement('a');
        link.download = `${formData.title.replace(/\s+/g, '_')}_poster.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Error generating poster:', error);
      alert('Error generating poster. Please try again.');
    } finally {
      setIsDownloading(false);
    }
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
            disabled={isDownloading}
            className="bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
          >
            <Download className="w-5 h-5 mr-2" />
            {isDownloading ? 'Generating...' : 'Download Poster'}
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Editor Panel */}
        <div className="lg:w-1/2 p-6 space-y-6 overflow-y-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Customize Your Poster</h2>
            
            <div className="space-y-4">
              {/* Property Title */}
              <div>
                <Label htmlFor="title" className="text-white">Property Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  placeholder="Enter property title"
                />
              </div>

              {/* Property Type */}
              <div>
                <Label htmlFor="type" className="text-white">Property Type</Label>
                <Input
                  id="type"
                  value={formData.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  placeholder="e.g., Residential Flat, Villa, Commercial"
                />
              </div>

              {/* Price and Auction Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price" className="text-white">Price</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                    placeholder="e.g., RS.45,00,000/-"
                  />
                </div>

                <div>
                  <Label htmlFor="auctionDate" className="text-white">Auction Date</Label>
                  <Input
                    id="auctionDate"
                    value={formData.auctionDate}
                    onChange={(e) => handleInputChange('auctionDate', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-white/50"
                    placeholder="e.g., 21.05.2025"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <Label htmlFor="location" className="text-white">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  placeholder="Enter property location"
                />
              </div>

              {/* Contact */}
              <div>
                <Label htmlFor="contact" className="text-white">Contact Number</Label>
                <Input
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => handleInputChange('contact', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  placeholder="Enter contact number"
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-white">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/50"
                  rows={4}
                  placeholder="Enter description (use new lines for bullet points)"
                />
                <p className="text-white/70 text-sm mt-1">
                  Tip: Each new line will create a bullet point in the poster
                </p>
              </div>

              {/* Image Upload */}
              <div>
                <Label htmlFor="image" className="text-white">Property Image</Label>
                <div className="mt-2">
                  <label htmlFor="image" className="flex items-center justify-center w-full h-32 border-2 border-dashed border-white/30 rounded-lg cursor-pointer hover:border-white/50 transition-colors">
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-white/50 mx-auto mb-2" />
                      <p className="text-white/70">Click to upload property image</p>
                      {uploadedImage && (
                        <p className="text-green-400 text-sm mt-1">✓ Image uploaded</p>
                      )}
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