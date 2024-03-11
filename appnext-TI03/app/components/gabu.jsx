// components/HeroSection.js

import React from 'react';

const GabuChiquito = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://i.pinimg.com/736x/74/9a/da/749ada121ee811a33ea2393b4b7eee99.jpg"
        alt="Gabu"
        className="w-64 h-64 object-cover mb-4"
      />
      <p className="text-lg text-center">Gabu dinosaurio de la serie -Dino Rey-.</p>
    </div>
  );
};

export default GabuChiquito;
