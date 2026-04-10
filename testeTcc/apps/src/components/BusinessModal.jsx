import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, MapPin, Phone, Clock, Share2, Heart } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext.jsx';
import { useToast } from '@/hooks/use-toast';

const BusinessModal = ({ business, isOpen, onClose }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();
  const favorite = isFavorite(business.id);

  if (!business) return null;

  const handleFavoriteClick = () => {
    toggleFavorite(business.id);
  };

  const handleShare = () => {
    toast({
      title: "🚧 Recurso em desenvolvimento",
      description: "A funcionalidade de compartilhamento estará disponível em breve! 🚀"
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getDayName = (day) => {
    const days = {
      monday: 'Segunda',
      tuesday: 'Terça',
      wednesday: 'Quarta',
      thursday: 'Quinta',
      friday: 'Sexta',
      saturday: 'Sábado',
      sunday: 'Domingo'
    };
    return days[day] || day;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8">
              {/* Header Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>

                {/* Action Buttons */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <button
                    onClick={handleFavoriteClick}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                  >
                    <Heart
                      className={`w-6 h-6 transition-all duration-300 ${
                        favorite
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-700'
                      }`}
                    />
                  </button>
                  <button
                    onClick={handleShare}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                  >
                    <Share2 className="w-6 h-6 text-gray-700" />
                  </button>
                </div>

                {/* Business Name & Rating */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {business.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {renderStars(business.rating)}
                    </div>
                    <span className="text-white font-semibold text-lg">
                      {business.rating.toFixed(1)}
                    </span>
                    <span className="text-white/80 text-sm">
                      ({business.reviews?.length || 0} avaliações)
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Sobre
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {business.fullDescription || business.description}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="mb-8 grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                        <p className="text-gray-700 text-sm">{business.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                        <p className="text-gray-700 text-sm">{business.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Horário de Funcionamento
                    </h3>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-3">
                      {Object.entries(business.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700">
                            {getDayName(day)}:
                          </span>
                          <span className={`${
                            hours === 'Fechado' ? 'text-red-600' : 'text-gray-900'
                          } font-medium`}>
                            {hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Localização
                  </h3>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-12 border border-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-3" />
                      <p className="text-gray-700 font-semibold">
                        Mapa interativo em breve
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        {business.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reviews */}
                {business.reviews && business.reviews.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Avaliações dos Clientes
                    </h3>
                    <div className="space-y-4">
                      {business.reviews.map((review, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-xl p-5 border border-gray-200"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {review.author}
                              </h4>
                              <div className="flex gap-0.5 mt-1">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                          <p className="text-gray-700 mt-2">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BusinessModal;