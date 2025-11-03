import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProductCard({ icon: Icon, title, description }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
