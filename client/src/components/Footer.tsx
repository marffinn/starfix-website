import { Link } from "wouter";
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Starfix</h3>
            <p className="text-sm mb-4">
              Producent wysokiej jakości łączników do termoizolacji fasadowej i dachowej.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Nawigacja</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <span className="hover:text-red-600 transition cursor-pointer">Strona Główna</span>
                </Link>
              </li>
              <li>
                <Link href="/konfigurator">
                  <span className="hover:text-red-600 transition cursor-pointer">Konfigurator</span>
                </Link>
              </li>
              <li>
                <Link href="/oferta">
                  <span className="hover:text-red-600 transition cursor-pointer">Oferta</span>
                </Link>
              </li>
              <li>
                <Link href="/firma">
                  <span className="hover:text-red-600 transition cursor-pointer">O Nas</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-4">Zasoby</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dokumentacja">
                  <span className="hover:text-red-600 transition cursor-pointer">Dokumentacja</span>
                </Link>
              </li>
              <li>
                <Link href="/b2b">
                  <span className="hover:text-red-600 transition cursor-pointer">B2B Portal</span>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <span className="hover:text-red-600 transition cursor-pointer">Kontakt</span>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">Kariera</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-red-600" />
                <a href="tel:+48774726265" className="hover:text-red-600 transition">
                  +48 77 472 62 65
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-red-600" />
                <a href="mailto:biuro@starfix.eu" className="hover:text-red-600 transition">
                  biuro@starfix.eu
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-red-600" />
                <span>Polska</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 Starfix. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-600 transition">Polityka Prywatności</a>
            <a href="#" className="hover:text-red-600 transition">Warunki Użytkowania</a>
            <a href="#" className="hover:text-red-600 transition">Mapa Strony</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
