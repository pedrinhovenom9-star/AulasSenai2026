import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('laVendinhaFavorites');
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('laVendinhaFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (businessId) => {
    setFavorites(prev => {
      if (!prev.includes(businessId)) {
        return [...prev, businessId];
      }
      return prev;
    });
  };

  const removeFavorite = (businessId) => {
    setFavorites(prev => prev.filter(id => id !== businessId));
  };

  const isFavorite = (businessId) => {
    return favorites.includes(businessId);
  };

  const toggleFavorite = (businessId) => {
    if (isFavorite(businessId)) {
      removeFavorite(businessId);
    } else {
      addFavorite(businessId);
    }
  };

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};