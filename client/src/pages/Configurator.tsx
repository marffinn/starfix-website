import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Configurator() {
  usePageMeta({
    title: "Konfigurator Lacznikow - Starfix",
    description: "Konfigurator produktow AMEX-Starfix. Znajdz idealny lacznik dla Twojego projektu termoizolacyjnego.",
    keywords: "konfigurator, laczniki, termoizolacja, AMEX, Starfix",
    ogTitle: "Konfigurator Lacznikow - Starfix",
    ogDescription: "Konfigurator produktow AMEX-Starfix do termoizolacji.",
    ogUrl: "https://www.starfix.eu/konfigurator",
    canonicalUrl: "https://www.starfix.eu/konfigurator",
  });
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Konfigurator Łączników</h1>
            <p className="text-lg text-red-100">
              Znajdź idealny łącznik AMEX-Starfix dla Twojego projektu
            </p>
          </div>
        </section>

        {/* Configurator Embed */}
        <section className="py-12">
          <div className="container">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://marffinn.github.io/sf-configurator/"
                title="Konfigurator Łączników AMEX-Starfix"
                className="w-full h-screen min-h-[800px] border-0"
                allow="fullscreen"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Jak Korzystać z Konfiguratora?</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nasz konfigurator został zaprojektowany, aby ułatwić Ci wybór odpowiedniego łącznika dla Twojego projektu. Wystarczy postępować zgodnie z instrukcjami krok po kroku:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li><strong>Wybierz podłoże:</strong> Określ typ podłoża, na którym będą montowane łączniki (beton, cegła, drewno, itp.)</li>
                  <li><strong>Typ izolacji:</strong> Wybierz rodzaj termoizolacji, którą będziesz używać</li>
                  <li><strong>Grubość izolacji:</strong> Podaj grubość warstwy izolacyjnej</li>
                  <li><strong>Grubość warstwy kleju:</strong> Określ grubość warstwy kleju</li>
                  <li><strong>Montaż zaglębiony:</strong> Wybierz, czy łącznik będzie montowany zaglębionym</li>
                  <li><strong>Rekomendacja:</strong> Otrzymaj rekomendację idealnego łącznika dla Twoich parametrów</li>
                </ol>
                <p className="mt-6">
                  Po otrzymaniu rekomendacji możesz skontaktować się z naszym zespołem, aby uzyskać więcej informacji lub złożyć zamówienie.
                </p>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-2">Potrzebujesz Pomocy?</h3>
                <p className="text-blue-800 mb-4">
                  Jeśli masz pytania dotyczące konfiguratora lub potrzebujesz profesjonalnej konsultacji, skontaktuj się z naszym zespołem.
                </p>
                <Link href="/kontakt">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Skontaktuj się z nami
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
