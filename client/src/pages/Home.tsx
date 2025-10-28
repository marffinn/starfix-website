import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Award, Zap, Shield, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white py-20 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Nowoczesne Rozwiązania w Zamocowaniach
                </h1>
                <p className="text-lg md:text-xl text-red-100">
                  Producent wysokiej jakości łączników do termoizolacji fasadowej i dachowej. Innowacyjne rozwiązania dla branży budowlanej.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/konfigurator">
                    <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 w-full sm:w-auto">
                      Konfigurator <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/oferta">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                      Poznaj Ofertę
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative h-96 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <img 
                      src="/starfix-logo.svg" 
                      alt="Starfix Logo" 
                      className="h-32 mx-auto mb-4 opacity-90"
                    />
                    <p className="text-white/80">Amex-Starfix</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasze Atuty</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specjalizujemy się w produkcji wysokiej jakości łączników dla branży budowlanej z ponad 20 latami doświadczenia.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-red-600" />
                  <h3 className="font-bold mb-2">Certyfikacje</h3>
                  <p className="text-sm text-gray-600">
                    Wszystkie produkty posiadają niezbędne certyfikaty i dopuszczenia.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-red-600" />
                  <h3 className="font-bold mb-2">Innowacyjność</h3>
                  <p className="text-sm text-gray-600">
                    Stale wdrażamy nowe rozwiązania techniczne i ulepszamy produkty.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-red-600" />
                  <h3 className="font-bold mb-2">Jakość</h3>
                  <p className="text-sm text-gray-600">
                    Najwyższe standardy jakości w każdym etapie produkcji.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-red-600" />
                  <h3 className="font-bold mb-2">Wsparcie</h3>
                  <p className="text-sm text-gray-600">
                    Profesjonalne wsparcie dla naszych klientów i partnerów.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Aktualności</h2>
              <p className="text-lg text-gray-600">Najnowsze wiadomości z naszej firmy</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <Award className="h-16 w-16 text-white opacity-50" />
                </div>
                <CardContent className="pt-6">
                  <p className="text-sm text-red-600 font-semibold mb-2">29 maja 2023</p>
                  <h3 className="font-bold text-lg mb-2">Diamenty Forbesa 2023</h3>
                  <p className="text-gray-600 text-sm">
                    T.Z. Amex Sp.j. otrzymała wyróżnienie jako jedna z najdynamiczniej rozwijających się polskich firm.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-white opacity-50" />
                </div>
                <CardContent className="pt-6">
                  <p className="text-sm text-green-600 font-semibold mb-2">19 grudnia 2022</p>
                  <h3 className="font-bold text-lg mb-2">Certyfikat PRS Green Label</h3>
                  <p className="text-gray-600 text-sm">
                    Nasza firma otrzymała certyfikat za aktywny udział w bezodpadowym zarządzaniu.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Zap className="h-16 w-16 text-white opacity-50" />
                </div>
                <CardContent className="pt-6">
                  <p className="text-sm text-blue-600 font-semibold mb-2">4 września 2022</p>
                  <h3 className="font-bold text-lg mb-2">Nowy Produkt KAXDN 8mm</h3>
                  <p className="text-gray-600 text-sm">
                    Wszechstronne łączniki ramowe KAXDN dostępne w nowych rozmiarach i długościach.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">O Nas</h2>
                <p className="text-gray-600 leading-relaxed">
                  Jesteśmy producentem wyrobów z tworzyw sztucznych, wykorzystywanych w systemach zamocowań w branży budowlanej. Specjalizujemy się w produkcji łączników do termoizolacji fasadowych jak i dachowych, które są przebadane i dopuszczone do wszystkich podłoży budowlanych.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nasze działania skupiają się na wdrażaniu nowych rozwiązań w dziedzinie zamocowań, doskonaleniu produkowanych wyrobów i podnoszeniu jakości świadczonych usług. Asortyment oferowany przez firmę AMEX obejmuje wiele segmentów zastosowania różnych mocowań.
                </p>
                <Link href="/firma">
                  <Button className="bg-red-600 hover:bg-red-700">
                    Dowiedz się więcej <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-red-600 mb-2">20+</p>
                  <p className="text-gray-600">Lat doświadczenia</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-red-600 mb-2">100+</p>
                  <p className="text-gray-600">Produktów</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-red-600 mb-2">1000+</p>
                  <p className="text-gray-600">Zadowolonych klientów</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-red-600 mb-2">5</p>
                  <p className="text-gray-600">Certyfikatów</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="container text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Gotowy do Konfiguracji?</h2>
            <p className="text-lg text-red-100 max-w-2xl mx-auto">
              Skorzystaj z naszego zaawansowanego konfiguratora, aby znaleźć idealny łącznik dla Twojego projektu.
            </p>
            <Link href="/konfigurator">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                Otwórz Konfigurator <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
