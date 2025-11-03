import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative text-white overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://t3.ftcdn.net/jpg/06/10/80/38/360_F_610803802_IJEJltyEjdBrBcIRV3u84NViX5mSlZbd.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Industrial Kitchen
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              Equipment Solutions
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Premium commercial kitchen machinery for bakeries, hotels, restaurants, and food processing facilities
          </p>
          <button
            onClick={scrollToProducts}
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explore Our Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
