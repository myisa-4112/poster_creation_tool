import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import TemplateCard from '@/components/TemplateCard';
import TemplateEditor from '@/components/TemplateEditor';

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const templates = [
    {
      id: 1,
      name: "Classic Auction Style",
      preview: "/images/residential-flat.jpg",
      type: "traditional",
      features: ["Clean Layout", "Professional Design", "Clear Information", "Contact Highlight"]
    },
    {
      id: 2,
      name: "Premium Villa Design",
      preview: "/images/villa-img.jpg",
      type: "luxury",
      features: ["Elegant Design", "Multi-section Layout", "Premium Feel", "Feature Highlights"]
    },
    {
      id: 3,
      name: "Modern Gradient Style",
      preview: "/images/flat.jpg",
      type: "modern",
      features: ["Contemporary Design", "Gradient Background", "Feature Cards", "Modern Typography"]
    }
  ];

  const handleGetStarted = () => {
    if (selectedTemplate) {
      setShowEditor(true);
    }
  };

  if (showEditor && selectedTemplate) {
    return (
      <TemplateEditor 
        template={templates.find(t => t.id === selectedTemplate)!}
        onBack={() => setShowEditor(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        <div className="relative z-10 px-12 py-8">
          <div className="flex items-center gap-4 mb-8">
            <img src="/logo.png" alt="Mars Logo" className="h-20 w-20" />
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-red-500 mb-4 tracking-tight">
              WELCOME TO MARS POSTER
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-red-500 mb-8">
              CREATION TOOL
            </h2>
            <div className="h-1 bg-white max-w-2xl mx-auto mb-12"></div>
            <p className="text-white/80 text-xl mb-8">
              Create professional property auction posters with ease
            </p>
          </div>
        </div>
      </div>

      {/* Template Selection */}
      <div className="px-6 py-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Choose Your Template Style
        </h3>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          Select from our professionally designed templates. Each template includes all essential fields: 
          title, type, price, auction date, location, contact, image, and description.
        </p>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplate === template.id}
              onSelect={() => setSelectedTemplate(template.id)}
            />
          ))}
        </div>

        {/* Get Started Button */}
        <div className="text-center">
          <Button
            onClick={handleGetStarted}
            disabled={!selectedTemplate}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 text-xl rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            GET STARTED →
          </Button>
          
          {selectedTemplate && (
            <p className="text-white/70 mt-4">
              Selected: {templates.find(t => t.id === selectedTemplate)?.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;