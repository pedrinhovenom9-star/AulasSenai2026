import React, { useState, useMemo, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { businesses } from './data/businesses.js';
import BusinessCard from './components/BusinessCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const BusinessExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [minRating, setMinRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter businesses
  const filteredBusinesses = useMemo(() => {
    return businesses.filter(business => {
      // Category filter
      const categoryMatch = selectedCategory === 'Todos' || business.category === selectedCategory;
      
      // Rating filter
      const ratingMatch = business.rating >= minRating;
      
      // Search filter
      const searchMatch = searchTerm === '' || 
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return categoryMatch && ratingMatch && searchMatch;
    });
  }, [selectedCategory, minRating, searchTerm]);

  // Featured businesses (from filtered results)
  const featuredBusinesses = useMemo(() => {
    return filteredBusinesses.filter(b => b.featured).slice(0, 5);
  }, [filteredBusinesses]);

  // Regular businesses (excluding featured)
  const regularBusinesses = useMemo(() => {
    return filteredBusinesses.filter(b => !b.featured);
  }, [filteredBusinesses]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = {
      total: businesses.length,
      'Alimentação': businesses.filter(b => b.category === 'Alimentação').length,
      'Serviços': businesses.filter(b => b.category === 'Serviços').length,
      'Lojas': businesses.filter(b => b.category === 'Lojas').length,
      'Eventos': businesses.filter(b => b.category === 'Eventos').length
    };
    return counts;
  }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleClearFilters = () => {
    setSelectedCategory('Todos');
    setMinRating(0);
    setSearchTerm('');
  };

  const hasActiveFilters = selectedCategory !== 'Todos' || minRating > 0;

  return (
    <>
      <Helmet>
        <title>{`Explorar Negócios - Lá da Vendinha`}</title>
        <meta 
          name="description" 
          content="Explore todos os negócios locais do seu bairro. Filtre por categoria, avaliação e encontre exatamente o que você procura." 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Explore Negócios Locais
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Descubra os melhores estabelecimentos do seu bairro
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <SearchBar onSearch={handleSearch} resultCount={filteredBusinesses.length} />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <Sidebar
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                minRating={minRating}
                onRatingChange={setMinRating}
                categoryCounts={categoryCounts}
                onClearFilters={handleClearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </aside>

            {/* Business Grid */}
            <main className="flex-1">
              {/* Featured Businesses */}
              {featuredBusinesses.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Negócios em Destaque
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredBusinesses.map((business, index) => (
                      <motion.div
                        key={business.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      >
                        <BusinessCard business={business} />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Regular Businesses */}
              {regularBusinesses.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {featuredBusinesses.length > 0 ? 'Todos os Negócios' : 'Resultados'}
                    </h2>
                    <span className="text-gray-600 font-semibold">
                      {regularBusinesses.length} {regularBusinesses.length === 1 ? 'negócio' : 'negócios'}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularBusinesses.map((business, index) => (
                      <motion.div
                        key={business.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.05, duration: 0.6 }}
                      >
                        <BusinessCard business={business} />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* No Results */}
              {filteredBusinesses.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-center py-20"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">🔍</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Nenhum resultado encontrado
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Tente ajustar seus filtros ou buscar por outros termos
                    </p>
                    {hasActiveFilters && (
                      <button
                        onClick={handleClearFilters}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Limpar Filtros
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BusinessExplorer;