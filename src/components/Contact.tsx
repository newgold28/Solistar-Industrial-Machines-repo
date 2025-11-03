import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to upgrade your kitchen? Contact us for a consultation and quote
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
            <p className="text-slate-600">+1 (555) 123-4567</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-600">info@solistar.com</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Visit Us</h3>
            <p className="text-slate-600">123 Industrial Blvd, Suite 100</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841248624047!2d-73.98731492346442!3d40.75889363525951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1698765432123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
