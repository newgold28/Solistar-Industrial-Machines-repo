import { Croissant, Building2, Utensils, ShoppingCart, Store, Coffee, Factory } from 'lucide-react';
import ProductCard from './ProductCard';

export default function Products() {
  const products = [
    {
      icon: Croissant,
      title: 'Bakery Equipment',
      description: 'Professional ovens, mixers, proofing cabinets, and dough preparation equipment for artisan and commercial bakeries.',
    },
    {
      icon: Building2,
      title: 'Hotel Equipment',
      description: 'Complete kitchen solutions for hotels including commercial ranges, refrigeration systems, and food preparation stations.',
    },
    {
      icon: Utensils,
      title: 'Fast Food Equipment',
      description: 'High-speed fryers, grills, warming equipment, and automated cooking systems designed for quick-service restaurants.',
    },
    {
      icon: ShoppingCart,
      title: 'Supermarket Equipment',
      description: 'Display cases, deli equipment, meat processing machinery, and commercial refrigeration for retail food operations.',
    },
    {
      icon: Store,
      title: 'Shopping Mall Equipment',
      description: 'Compact and efficient food court equipment, beverage dispensers, and multi-purpose cooking stations.',
    },
    {
      icon: Coffee,
      title: 'Eatery Equipment',
      description: 'Versatile cooking equipment, prep tables, dishwashing systems, and storage solutions for restaurants and cafes.',
    },
    {
      icon: Factory,
      title: 'Food Processing Lines',
      description: 'Industrial-scale processing equipment, packaging machinery, conveyor systems, and automated production lines.',
    },
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive solutions for every commercial kitchen need, from small eateries to large-scale food production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
