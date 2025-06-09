import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-text text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Join thousands of developers building amazing things with Bolt. Sign up today and experience the future of development.
        </p>
        <a href="#signup" className="px-10 py-4 bg-text text-accent font-semibold text-lg rounded-xl hover:bg-opacity-90 transition-colors duration-300 shadow-lg">
          Sign Up for Free
        </a>
      </div>
    </section>
  );
};

export default CTA;
