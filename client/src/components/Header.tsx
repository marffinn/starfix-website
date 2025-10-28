import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Strona Główna", href: "/" },
    { label: "Konfigurator", href: "/konfigurator" },
    { label: "Oferta", href: "/oferta" },
    { label: "Firma", href: "/firma" },
    { label: "Dokumentacja", href: "/dokumentacja" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "B2B", href: "/b2b" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-gray-900">Starfix</p>
                <p className="text-xs text-gray-600">Amex</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" className="text-gray-700 hover:text-red-600">
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+48774726265" className="text-sm font-semibold text-gray-700 hover:text-red-600">
              +48 77 472 62 65
            </a>
            <a href="mailto:biuro@starfix.eu">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Kontakt
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden border-t border-gray-200 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a href="tel:+48774726265" className="block px-4 py-2 text-gray-700 hover:text-red-600">
                +48 77 472 62 65
              </a>
              <a href="mailto:biuro@starfix.eu" className="block">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Kontakt
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
