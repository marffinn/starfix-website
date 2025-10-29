import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Contact() {
  usePageMeta({
    title: "Kontakt - Starfix",
    description: "Skontaktuj sie z nami. Dane kontaktowe, formularz kontaktowy i informacje o godzinach pracy firmy Starfix.",
    keywords: "kontakt, telefon, email, formularz, Starfix",
    ogTitle: "Kontakt - Starfix",
    ogDescription: "Skontaktuj sie z nami. Dane kontaktowe i formularz kontaktowy.",
    ogUrl: "https://www.starfix.eu/kontakt",
    canonicalUrl: "https://www.starfix.eu/kontakt",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
            <p className="text-lg text-red-100">
              Skontaktuj się z nami - jesteśmy tutaj, aby Ci pomóc
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="border-none shadow-lg text-center">
                <CardContent className="pt-6">
                  <Phone className="h-8 w-8 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Telefon</h3>
                  <a href="tel:+48774726265" className="text-red-600 hover:text-red-700 font-semibold">
                    +48 77 472 62 65
                  </a>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg text-center">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Email</h3>
                  <a href="mailto:biuro@starfix.eu" className="text-red-600 hover:text-red-700 font-semibold break-all">
                    biuro@starfix.eu
                  </a>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Lokalizacja</h3>
                  <p className="text-gray-600">
                    Polska
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg text-center">
                <CardContent className="pt-6">
                  <Clock className="h-8 w-8 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Godziny</h3>
                  <p className="text-gray-600 text-sm">
                    Pon-Pt: 8:00-16:00<br/>
                    Sob-Nd: Zamknięte
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Wyślij Nam Wiadomość</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Imię i Nazwisko *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="jan@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="+48 77 472 62 65"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Temat *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Wybierz temat...</option>
                    <option value="inquiry">Zapytanie o produkty</option>
                    <option value="order">Zamówienie</option>
                    <option value="technical">Wsparcie techniczne</option>
                    <option value="partnership">Współpraca</option>
                    <option value="other">Inne</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Wiadomość *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Twoja wiadomość..."
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="bg-red-600 hover:bg-red-700">
                    Wyślij Wiadomość
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setFormData({ name: "", email: "", phone: "", subject: "", message: "" })}
                  >
                    Wyczyść
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Departamenty</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Sprzedaż</h3>
                    <p className="text-gray-600 text-sm">
                      Informacje o produktach, cenniki, zamówienia
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Wsparcie Techniczne</h3>
                    <p className="text-gray-600 text-sm">
                      Pomoc w wyborze produktów, konsultacje techniczne
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Współpraca B2B</h3>
                    <p className="text-gray-600 text-sm">
                      Możliwości partnerstwa i dystrybucji
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Szybkie Linki</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/konfigurator">
                      <span className="text-red-600 hover:text-red-700 cursor-pointer">→ Konfigurator Produktów</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/oferta">
                      <span className="text-red-600 hover:text-red-700 cursor-pointer">→ Nasza Oferta</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dokumentacja">
                      <span className="text-red-600 hover:text-red-700 cursor-pointer">→ Dokumentacja Techniczna</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/firma">
                      <span className="text-red-600 hover:text-red-700 cursor-pointer">→ O Nas</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
