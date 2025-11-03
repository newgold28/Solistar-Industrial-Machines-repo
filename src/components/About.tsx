import { Award, Wrench, TrendingUp, Shield, Hammer, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Industry-leading equipment built to last',
    },
    {
      icon: Wrench,
      title: 'Expert Support',
      description: '24/7 technical assistance and maintenance',
    },
    {
      icon: TrendingUp,
      title: 'Proven Performance',
      description: 'Trusted by thousands of businesses worldwide',
    },
    {
      icon: Clock,
      title: '2 Year Warranty',
      description: 'Full coverage on all equipment for complete peace of mind',
    },
    {
      icon: Hammer,
      title: 'Professional Installation',
      description: 'Expert installation service included with every purchase',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing ensures top-tier performance',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With over two decades of experience in the commercial kitchen equipment industry, we deliver exceptional
              quality and reliability. Our comprehensive range of machinery is designed to meet the demanding needs of
              modern food service operations.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From initial consultation to installation and ongoing support, we partner with you every step of the way
              to ensure your kitchen operates at peak efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300"
              >
                <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
