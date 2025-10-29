import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Documentation() {
  usePageMeta({
    title: "Dokumentacja Techniczna - Starfix",
    description: "Pobierz karty techniczne, certyfikaty i instrukcje montazu dla produktow AMEX-Starfix.",
    keywords: "dokumentacja, karty techniczne, certyfikaty, instrukcje, Starfix",
    ogTitle: "Dokumentacja Techniczna - Starfix",
    ogDescription: "Karty techniczne, certyfikaty i instrukcje montazu dla produktow AMEX-Starfix.",
    ogUrl: "https://www.starfix.eu/dokumentacja",
    canonicalUrl: "https://www.starfix.eu/dokumentacja",
  });
  const docs = [
    {
      title: "Katalog Produktów",
      description: "Pełny katalog wszystkich produktów Starfix z opisami i specyfikacjami",
      category: "Katalogi",
      format: "PDF",
    },
    {
      title: "Karty Techniczne KAXDN",
      description: "Szczegółowe karty techniczne dla łączników KAXDN",
      category: "Karty Techniczne",
      format: "PDF",
    },
    {
      title: "Karty Techniczne DPK/DPN",
      description: "Specyfikacje techniczne dla łączników DPK i DPN",
      category: "Karty Techniczne",
      format: "PDF",
    },
    {
      title: "Certyfikat PRS Green Label",
      description: "Certyfikat potwierdzający naszą zaangażowanie w ochronę środowiska",
      category: "Certyfikaty",
      format: "PDF",
    },
    {
      title: "Zatwierdzenia Systemowe",
      description: "Dokumenty zatwierdzenia dla systemów termoizolacji",
      category: "Zatwierdzenia",
      format: "PDF",
    },
    {
      title: "Instrukcje Montażu",
      description: "Szczegółowe instrukcje montażu dla różnych typów łączników",
      category: "Instrukcje",
      format: "PDF",
    },
  ];

  const categories = ["Wszystkie", "Katalogi", "Karty Techniczne", "Certyfikaty", "Zatwierdzenia", "Instrukcje"];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dokumentacja Techniczna</h1>
            <p className="text-lg text-red-100">
              Pobierz karty techniczne, certyfikaty i instrukcje montażu
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container">
            <p className="text-sm font-semibold text-gray-600 mb-4">Filtruj według kategorii:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={cat === "Wszystkie" ? "default" : "outline"}
                  className={cat === "Wszystkie" ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docs.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-24 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-red-600" />
                  </div>
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <div className="mb-4 flex-1">
                      <p className="text-xs font-semibold text-red-600 mb-2 uppercase">{doc.category}</p>
                      <h3 className="font-bold text-lg mb-2">{doc.title}</h3>
                      <p className="text-gray-600 text-sm">{doc.description}</p>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700 mt-4">
                      <Download className="h-4 w-4 mr-2" />
                      Pobierz {doc.format}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Potrzebujesz Więcej Informacji?</h2>
              <p className="text-gray-600 mb-6">
                Jeśli nie znalazłeś szukanego dokumentu lub masz pytania dotyczące naszych produktów, skontaktuj się z naszym zespołem technicznym.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">Email</h3>
                    <a href="mailto:biuro@starfix.eu" className="text-red-600 hover:text-red-700">
                      biuro@starfix.eu
                    </a>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <h3 className="font-bold mb-2">Telefon</h3>
                    <a href="tel:+48774726265" className="text-red-600 hover:text-red-700">
                      +48 77 472 62 65
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Gotowy do Konfiguracji?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Skorzystaj z naszego konfiguratora, aby wybrać idealny łącznik dla Twojego projektu.
            </p>
            <Link href="/konfigurator">
              <Button className="bg-red-600 hover:bg-red-700">
                Otwórz Konfigurator
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
