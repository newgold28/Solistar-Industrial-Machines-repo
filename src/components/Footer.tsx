import { ChefHat, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-s-removebg-preview.png" alt="Solistar" className="w-10 h-10" />
              <span className="text-xl font-bold">Solistar Industrial Machines</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-2xl">
              Your trusted partner for premium commercial kitchen equipment and food processing solutions
            </p>
            <div className="border-t border-slate-800 pt-6 w-full">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Solistar Industrial Machines. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/message/YUVRLBR2RAEAH1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </>
  );
}
