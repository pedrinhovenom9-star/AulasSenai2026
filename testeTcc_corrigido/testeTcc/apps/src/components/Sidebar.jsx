import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, Wrench, ShoppingBag, Calendar, X, Menu, Star } from 'lucide-react';
import { Slider } from './components/ui/slider';

const Sidebar = ({ 
  selectedCategory, 
  onCategoryChange, 
  minRating, 
  onRatingChange,
  categoryCounts,
  onClearFilters,
  hasActiveFilters 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: 'Todos', icon: null, count: categoryCounts.total },
    { name: 'Alimentação', icon: UtensilsCrossed, count: categoryCounts['Alimentação'] || 0 },
    { name: 'Serviços', icon: Wrench, count: categoryCounts['Serviços'] || 0 },
    { name: 'Lojas', icon: ShoppingBag, count: categoryCounts['Lojas'] || 0 },
    { name: 'Eventos', icon: Calendar, count: categoryCounts['Eventos'] || 0 }
  ];

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const SidebarContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>Categorias</span>
        </h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.name;
            
            return (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategoryClick(category.name)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="w-5 h-5" />}
                  <span className="font-semibold">{category.name}</span>
                </div>
                <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                  isSelected
                    ? 'bg-white/20'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <span>Avaliação Mínima</span>
        </h3>
        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700 font-semibold">
              {minRating.toFixed(1)} estrelas ou mais
            </span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(minRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <Slider
            value={[minRating]}
            onValueChange={(value) => onRatingChange(value[0])}
            min={0}
            max={5}
            step={0.5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>0</span>
            <span>5</span>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-orange-50 border border-orange-200 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-900">Filtros Ativos</h4>
            <button
              onClick={onClearFilters}
              className="text-sm text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
            >
              Limpar tudo
            </button>
          </div>
          <div className="space-y-2">
            {selectedCategory !== 'Todos' && (
              <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg">
                <span className="text-sm text-gray-700">
                  Categoria: <span className="font-semibold">{selectedCategory}</span>
                </span>
              </div>
            )}
            {minRating > 0 && (
              <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg">
                <span className="text-sm text-gray-700">
                  Avaliação: <span className="font-semibold">{minRating.toFixed(1)}+ estrelas</span>
                </span>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block sticky top-6">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed right-0 top-0 bottom-0 w-80 bg-gray-50 shadow-2xl z-40 overflow-y-auto p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Filtros</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            <SidebarContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;