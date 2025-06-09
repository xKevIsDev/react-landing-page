import React from 'react';
import { Zap, Code, Cloud, Shield } from 'lucide-react'; // Feature icons

const features = [
  {
    icon: Zap,
    title: 'Instant Environments',
    description: 'Spin up full-stack development environments in seconds, right in your browser.',
  },
  {
    icon: Code,
    title: 'Seamless Collaboration',
    description: 'Work together in real-time with shared environments and live code editing.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native',
    description: 'Built on modern cloud infrastructure for scalability and reliability.',
  },
  {
    icon: Shield,
    title: 'Secure & Isolated',
    description: 'Each environment is isolated, ensuring security and preventing conflicts.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-background text-text">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface p-8 rounded-xl shadow-lg border border-border flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:border-primary"
            >
              <feature.icon size={48} className="text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-textSecondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
