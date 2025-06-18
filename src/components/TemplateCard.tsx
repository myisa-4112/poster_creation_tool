
import React from 'react';
import { Check } from 'lucide-react';

interface Template {
  id: number;
  name: string;
  preview: string;
  type: string;
  features: string[];
}

interface TemplateCardProps {
  template: Template;
  isSelected: boolean;
  onSelect: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, isSelected, onSelect }) => {
  return (
    <div 
      className={`relative bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isSelected ? 'ring-4 ring-red-500 shadow-2xl' : 'hover:shadow-xl'
      }`}
      onClick={onSelect}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-4 right-4 z-10 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="w-5 h-5 text-white" />
        </div>
      )}
      
      {/* Template Preview */}
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <img 
          src={template.preview} 
          alt={template.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Mars Logo Overlay */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Mars Logo" className="h-10 w-10" />
          </div>
        </div>
      </div>
      
      {/* Template Info */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h4>
        <p className="text-sm text-gray-600 mb-4 capitalize">{template.type} Template</p>
        
        {/* Features */}
        <div className="space-y-2">
          {template.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Selection Overlay */}
      {isSelected && (
        <div className="absolute inset-0 bg-red-500/10 pointer-events-none"></div>
      )}
    </div>
  );
};

export default TemplateCard;
