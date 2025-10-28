import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Lock, Users, TrendingUp, Zap } from "lucide-react";

export default function B2B() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container py-4">
            <Link href="/">
              <span className="text-sm text-gray-600 hover:text-red-600 cursor-pointer flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Wróć do strony głównej
              </span>
            </Link>
          </div>
        </div>

        {/* Page Header */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Portal B2B</h1>
            <p className="text-lg text-red-100">
              Platforma zakupowa dla partnerów biznesowych
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Rozwijaj Swoją Biznes z Nami</h2>
                <p className="text-gray-600 leading-relaxed">
                  Nasza platforma B2B oferuje partnerom biznesowym dostęp do kompleksowych narzędzi do zarządzania zamówieniami, śledzenia dostaw i zarządzania kontami.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <span>Dostęp do katalogów produktów</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <span>Zarządzanie zamówieniami online</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <span>Śledzenie dostaw w czasie rzeczywistym</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <span>Specjalne ceny dla partnerów</span>
                  </li>
                </ul>
                <a href="https://b2b.starfix.eu" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-red-600 hover:bg-red-700">
                    Zaloguj się do Portalu
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6 text-center">
                    <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Partnerzy</h3>
                    <p className="text-2xl font-bold text-red-600">500+</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6 text-center">
                    <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Wzrost</h3>
                    <p className="text-2xl font-bold text-red-600">+30%</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Funkcjonalności Portalu</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6 text-center">
                  <Lock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Bezpieczny Dostęp</h3>
                  <p className="text-sm text-gray-600">
                    Zaawansowana autentykacja i szyfrowanie danych
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6 text-center">
                  <Zap className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Szybkie Zamówienia</h3>
                  <p className="text-sm text-gray-600">
                    Intuicyjny interfejs do szybkiego składania zamówień
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Raporty</h3>
                  <p className="text-sm text-gray-600">
                    Szczegółowe raporty sprzedaży i historii zamówień
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Wsparcie</h3>
                  <p className="text-sm text-gray-600">
                    Dedykowany zespół wsparcia dla partnerów
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Register */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Jak Się Zarejestrować?</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Wypełnij Formularz</h3>
                  <p className="text-gray-600">
                    Przejdź do portalu B2B i kliknij "Rejestracja". Wypełnij formularz z danymi Twojej firmy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Weryfikacja</h3>
                  <p className="text-gray-600">
                    Nasz zespół zweryfikuje Twoje dane. Proces weryfikacji trwa zwykle 1-2 dni robocze.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Aktywacja Konta</h3>
                  <p className="text-gray-600">
                    Po weryfikacji otrzymasz dostęp do portalu. Możesz natychmiast rozpocząć składanie zamówień.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Zacznij Handlować</h3>
                  <p className="text-gray-600">
                    Korzystaj z pełnych funkcjonalności portalu, dostępu do specjalnych cen i wsparcia dedykowanego zespołu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Wymagania do Rejestracji</h2>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span>Zarejestrowana firma z ważnym numerem NIP/VAT</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span>Adres siedziby firmy w Polsce lub UE</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span>Ważny adres email i numer telefonu</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span>Zgodę na warunki handlowe i politykę prywatności</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Gotowy do Rozpoczęcia?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Zaloguj się do portalu B2B lub skontaktuj się z nami, aby uzyskać więcej informacji o możliwościach współpracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://b2b.starfix.eu" target="_blank" rel="noopener noreferrer">
                <Button className="bg-red-600 hover:bg-red-700">
                  Przejdź do Portalu B2B
                </Button>
              </a>
              <Link href="/kontakt">
                <Button variant="outline">
                  Skontaktuj się z Nami
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
