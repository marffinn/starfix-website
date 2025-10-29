import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Products() {
  usePageMeta({
    title: "Nasza Oferta - Starfix",
    description: "Kompleksowa gama wysokiej jakosci lacznikow dla branzy budowlanej. Produkty AMEX-Starfix do termoizolacji, zamocowań ogolnych i suchej zabudowy.",
    keywords: "oferta, produkty, laczniki, termoizolacja, AMEX, Starfix",
    ogTitle: "Nasza Oferta - Starfix",
    ogDescription: "Kompleksowa gama wysokiej jakosci lacznikow dla branzy budowlanej.",
    ogUrl: "https://www.starfix.eu/oferta",
    canonicalUrl: "https://www.starfix.eu/oferta",
  });
  const products = [
    {
      name: "Łączniki Ogólne",
      description: "Uniwersalne łączniki do różnych zastosowań budowlanych",
      items: ["DPK", "DPN", "KAXDN", "Śruby rozporowe"],
    },
    {
      name: "Łączniki Ramowe",
      description: "Specjalizowane łączniki do systemów ramowych",
      items: ["KA", "KAX", "KAXDN", "KAM"],
    },
    {
      name: "Łączniki Przetykowe",
      description: "Łączniki do montażu przytykowego",
      items: ["DPT", "DPT-M", "KAT", "KAXDT"],
    },
    {
      name: "Łączniki do Suchej Zabudowy",
      description: "Rozwiązania dla systemów suchej zabudowy wnętrz",
      items: ["Kołki do gipsu", "Kołki do drewna", "Kołki uniwersalne"],
    },
    {
      name: "Łączniki do Termoizolacji",
      description: "Łączniki specjalizowane do systemów termoizolacji",
      items: ["KAXDN ETICS", "DPK ETICS", "Tarcze rozpraszające"],
    },
    {
      name: "Akcesoria",
      description: "Dodatkowe akcesoria i komponenty",
      items: ["Tarcze montażowe", "Wkręty", "Haki", "Podkładki"],
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nasza Oferta</h1>
            <p className="text-lg text-red-100">
              Kompleksowa gama wysokiej jakości łączników dla branży budowlanej
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <p className="text-sm font-semibold opacity-75">Kategoria</p>
                      <p className="text-2xl font-bold">{index + 1}</p>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="space-y-2 mb-6">
                      {product.items.map((item, i) => (
                        <p key={i} className="text-sm text-gray-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                          {item}
                        </p>
                      ))}
                    </div>
                    <Link href="/konfigurator">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Konfigurator <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Cechy Naszych Produktów</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-bold mb-2">Certyfikowane</h3>
                <p className="text-gray-600">
                  Wszystkie produkty posiadają certyfikaty i dopuszczenia do wszystkich podłoży budowlanych.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-bold mb-2">Wysokiej Jakości</h3>
                <p className="text-gray-600">
                  Materiały najwyższej klasy i precyzyjny proces produkcji gwarantują trwałość.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-bold mb-2">Innowacyjne</h3>
                <p className="text-gray-600">
                  Stale rozwijamy nowe rozwiązania techniczne dostosowane do potrzeb rynku.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Zainteresowany Naszymi Produktami?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby uzyskać szczegółowe informacje, cenniki lub złożyć zamówienie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/konfigurator">
                <Button className="bg-red-600 hover:bg-red-700">
                  Użyj Konfiguratora
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button variant="outline">
                  Skontaktuj się
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
