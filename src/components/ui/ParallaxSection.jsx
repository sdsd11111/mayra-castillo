import React from 'react';

const ParallaxSection = ({ backgroundImage, children }) => {
  return (
    <section
      className="py-20 bg-fixed bg-center bg-cover relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;