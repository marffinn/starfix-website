import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Company() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">O Nas</h1>
            <p className="text-lg text-red-100">
              Poznaj naszą firmę, misję i osiągnięcia
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Technika Zamocowań Amex</h2>
                <p className="text-gray-600 leading-relaxed">
                  Jesteśmy producentem wyrobów z tworzyw sztucznych, wykorzystywanych w systemach zamocowań w branży budowlanej. Nasza firma specjalizuje się w produkcji łączników do termoizolacji fasadowych jak i dachowych, które są przebadane i dopuszczone do wszystkich podłoży budowlanych.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nasze działania skupiają się na wdrażaniu nowych rozwiązań w dziedzinie zamocowań, doskonaleniu produkowanych wyrobów i podnoszeniu jakości świadczonych usług. Asortyment oferowany przez firmę AMEX obejmuje wiele segmentów zastosowania różnych mocowań, poczynając od zamocowań ogólnych, przez ramowe i przetykowe, przechodząc kolejno do zamocowań do suchej zabudowy wnętrz i kończąc na zamocowaniach do termoizolacji.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-none">
                  <CardContent className="pt-6 text-center">
                    <p className="text-4xl font-bold text-red-600 mb-2">20+</p>
                    <p className="text-gray-700 font-semibold">Lat Doświadczenia</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-none">
                  <CardContent className="pt-6 text-center">
                    <p className="text-4xl font-bold text-red-600 mb-2">100+</p>
                    <p className="text-gray-700 font-semibold">Produktów</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-none">
                  <CardContent className="pt-6 text-center">
                    <p className="text-4xl font-bold text-red-600 mb-2">1000+</p>
                    <p className="text-gray-700 font-semibold">Zadowolonych Klientów</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-none">
                  <CardContent className="pt-6 text-center">
                    <p className="text-4xl font-bold text-red-600 mb-2">5</p>
                    <p className="text-gray-700 font-semibold">Certyfikatów</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nasza Misja i Wartości</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-4 text-red-600">Misja</h3>
                  <p className="text-gray-600">
                    Dostarczać innowacyjne, wysokiej jakości rozwiązania w zamocowaniach budowlanych, które spełniają najwyższe standardy branży i wspierają sukces naszych klientów.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-4 text-red-600">Wizja</h3>
                  <p className="text-gray-600">
                    Być liderem rynku w produkcji łączników budowlanych, znanych z niezawodności, innowacyjności i doskonałej obsługi klienta.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-4 text-red-600">Wartości</h3>
                  <p className="text-gray-600">
                    Jakość, innowacyjność, uczciwość, odpowiedzialność społeczna i zaangażowanie w ciągłe doskonalenie.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nasze Osiągnięcia</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                  ★
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Diamenty Forbesa 2023</h3>
                  <p className="text-gray-600">
                    Wyróżnienie dla T.Z. Amex Sp.j. jako jednej z najdynamiczniej rozwijających się polskich firm sektora.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                  ★
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Certyfikat PRS Green Label</h3>
                  <p className="text-gray-600">
                    Certyfikat przyznawany przedsiębiorstwom biorącym aktywny udział w bezodpadowym zarządzaniu i ochronie środowiska.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                  ★
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Certyfikacje Produktów</h3>
                  <p className="text-gray-600">
                    Wszystkie nasze produkty posiadają niezbędne certyfikaty i dopuszczenia do wszystkich podłoży budowlanych.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                  ★
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Innowacyjne Produkty</h3>
                  <p className="text-gray-600">
                    Stale rozwijamy nowe rozwiązania techniczne dostosowane do zmieniających się potrzeb rynku.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nasz Zespół</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Nasz zespół składa się z doświadczonych profesjonalistów zaangażowanych w dostarczanie najwyższej jakości produktów i usług.
            </p>
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Szukamy talentów! Jeśli interesuje Cię praca w dynamicznym zespole, sprawdź nasze oferty pracy.
              </p>
              <Link href="#kariera">
                <Button className="bg-red-600 hover:bg-red-700">
                  Oferty Pracy <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Chcesz Współpracować z Nami?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem, aby omówić możliwości współpracy.
            </p>
            <Link href="/kontakt">
              <Button className="bg-red-600 hover:bg-red-700">
                Skontaktuj się
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
