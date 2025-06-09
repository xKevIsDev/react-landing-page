import React from 'react';

const Hero: React.FC = () => {
  // Pexels image URL - Abstract light trails
  const imageUrl = "https://images.pexels.com/photos/358508/pexels-photo-358508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background opacity-70"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-text mb-6 leading-tight animate-fade-in-up">
          Build <span className="text-primary">Faster</span>, Deploy <span className="text-secondary">Smarter</span>
        </h1>
        <p className="text-xl text-textSecondary mb-10 max-w-2xl mx-auto animate-fade-in delay-200">
          Unlock the power of instant development environments and seamless collaboration with Bolt.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in delay-400">
          <a href="#get-started" className="px-8 py-3 bg-primary text-text font-semibold text-lg rounded-xl hover:bg-opacity-90 transition-colors duration-300 shadow-lg">
            Get Started
          </a>
          <a href="#learn-more" className="px-8 py-3 bg-surface text-textSecondary font-semibold text-lg rounded-xl border border-border hover:border-primary hover:text-primary transition-colors duration-300 shadow-lg">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
