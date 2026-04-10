import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, MapPin, Phone, Clock } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext.jsx';
import BusinessModal from '@/components/BusinessModal.jsx';

const BusinessCard = ({ business }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(business.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(business.id);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Alimentação': 'bg-orange-100 text-orange-700 border-orange-200',
      'Serviços': 'bg-blue-100 text-blue-700 border-blue-200',
      'Lojas': 'bg-green-100 text-green-700 border-green-200',
      'Eventos': 'bg-purple-100 text-purple-700 border-purple-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {business.featured && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              Destaque
            </div>
          )}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${
                favorite
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-600 hover:text-red-500'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category Badge */}
          <div className="mb-3">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(business.category)}`}>
              {business.category}
            </span>
          </div>

          {/* Business Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {business.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-0.5">
              {renderStars(business.rating)}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {business.rating.toFixed(1)}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {business.description}
          </p>

          {/* Info */}
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" />
              <span className="line-clamp-1">{business.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="w-4 h-4 flex-shrink-0 text-green-600" />
              <span>{business.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 flex-shrink-0 text-orange-600" />
              <span className="line-clamp-1">
                {business.hours[Object.keys(business.hours).find(day => 
                  business.hours[day] !== 'Fechado'
                )] || 'Consultar horários'}
              </span>
            </div>
          </div>

          {/* View Details Button */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors duration-300">
              Ver detalhes completos →
            </span>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <BusinessModal
        business={business}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default BusinessCard;