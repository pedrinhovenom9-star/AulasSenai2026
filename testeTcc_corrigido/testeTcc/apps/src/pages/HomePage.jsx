import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed, Wrench, ShoppingBag, Calendar, Star, MapPin } from 'lucide-react';
import { businesses } from './data/businesses.js';
import BusinessCard from './components/BusinessCard.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const HomePage = () => {
  const featuredBusinesses = businesses.filter(b => b.featured).slice(0, 4);

  const categories = [
    {
      name: 'Alimentação',
      icon: UtensilsCrossed,
      description: 'Restaurantes, cafés, padarias e muito mais',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      name: 'Serviços',
      icon: Wrench,
      description: 'Profissionais qualificados para suas necessidades',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      name: 'Lojas',
      icon: ShoppingBag,
      description: 'Comércio local com produtos únicos',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      name: 'Eventos',
      icon: Calendar,
      description: 'Acontecimentos e atividades do bairro',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lá da Vendinha - Descubra os Melhores Negócios Locais</title>
        <meta 
          name="description" 
          content="Descubra os melhores negócios locais do seu bairro. Restaurantes, serviços, lojas e eventos perto de você. Apoie o comércio local!" 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnpNNiAzNGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-semibold">Seu Bairro, Seus Negócios</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Descubra os Melhores<br />
                <span className="text-orange-400">Negócios Locais</span><br />
                do Seu Bairro
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Conecte-se com restaurantes, serviços, lojas e eventos incríveis perto de você. Apoie o comércio local!
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  Explorar Negócios
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
            </svg>
          </div>
        </section>

        {/* Featured Businesses */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4 border border-orange-200">
                <Star className="w-4 h-4 fill-orange-500" />
                <span className="text-sm font-semibold">Destaques</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Negócios em Destaque
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conheça os estabelecimentos mais bem avaliados e populares do bairro
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBusinesses.map((business, index) => (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <BusinessCard business={business} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mt-12"
            >
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-lg transition-colors duration-300"
              >
                Ver todos os negócios
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Explore por Categoria
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Encontre exatamente o que você procura
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Link to="/explore">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -8 }}
                        className={`${category.bgColor} border ${category.borderColor} rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl cursor-pointer group`}
                      >
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {category.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {category.description}
                        </p>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-500 to-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para Descobrir?
              </h2>
              <p className="text-xl md:text-2xl text-green-100 mb-10 leading-relaxed">
                Explore centenas de negócios locais, encontre seus favoritos e apoie a economia do seu bairro!
              </p>
              <Link
                to="/explore"
                className="inline-flex items-center gap-3 bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Começar Agora
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;