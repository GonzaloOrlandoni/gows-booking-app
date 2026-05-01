import React, { useEffect } from "react";
import BookingWidget from "./components/BookingWidget";
import {
  Calendar,
  Phone,
  MapPin,
  Instagram,
  Stethoscope,
  Camera,
  ShieldCheck,
  MessageCircle,
  ArrowUp,
  Menu,
  X,
} from "lucide-react";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    const handleScroll = () => {
      const btn = document.getElementById("scroll-to-top");
      const progress = document.getElementById("scroll-progress");

      // Scroll to top button visibility
      if (window.scrollY > 300) {
        btn.style.display = "flex";
      } else {
        btn.style.display = "none";
      }

      // Progress bar logic
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (progress) progress.style.width = scrolled + "%";
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative selection:bg-primary-100 selection:text-primary-900">
      {/* Decorative Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-200/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-200/20 rounded-full blur-[100px] animate-bounce duration-[10s]"></div>
      </div>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
        <div
          id="scroll-progress"
          className="h-full bg-primary-600 transition-all duration-150 ease-out w-0"
        ></div>
      </div>

      <Toaster position="top-right" />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5491128831895"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group flex items-center justify-center"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-10 h-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
          ¿Tienes dudas? ¡Escríbenos!
        </span>
      </a>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-28 right-8 z-[50] bg-white text-primary-600 w-12 h-12 rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:bg-primary-50 transition-all"
        id="scroll-to-top"
        style={{ display: "none" }}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Navigation / Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="font-black text-xl text-gray-900 tracking-tight block leading-none">
                  LUMINA
                </span>
                <span className="text-xs text-primary-600 font-bold tracking-widest">
                  DENTAL CLINIC
                </span>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-8">
              <a
                href="#inicio"
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                Inicio
              </a>
              <a
                href="#clinica"
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                Clínica
              </a>
              <a
                href="#turnos"
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                Turnos
              </a>
              <a
                href="#pacientes"
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                Pacientes
              </a>
              <a
                href="#contacto"
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                Contacto
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+54112345678"
                className="flex items-center text-sm font-semibold text-gray-700 hover:text-primary-600"
              >
                <Phone className="w-4 h-4 mr-1.5" />
                (011) 4567-8900
              </a>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-md shadow-primary-500/20">
                Portal Paciente
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#inicio"
                  className="block px-3 py-4 text-lg font-bold text-gray-900 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  Inicio
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#clinica"
                  className="block px-3 py-4 text-lg font-bold text-gray-900 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  Clínica
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#turnos"
                  className="block px-3 py-4 text-lg font-bold text-gray-900 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  Turnos
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#pacientes"
                  className="block px-3 py-4 text-lg font-bold text-gray-900 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  Pacientes
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href="#contacto"
                  className="block px-3 py-4 text-lg font-bold text-gray-900 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  Contacto
                </a>
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg">
                    Portal Paciente
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000"
            alt="Clínica Odontológica"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-gray-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
            data-aos="fade-down"
          >
            Tu sonrisa en las mejores manos.
          </h1>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Reserva tu turno online de forma rápida y sencilla. Elige el
            tratamiento, el profesional y el horario que mejor se adapte a ti.
          </p>

          {/* Main Booking Widget Container */}
          <div
            className="mt-10"
            id="turnos"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Insurance / Social Proof */}
      <section className="bg-white py-12 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Trabajamos con las mejores coberturas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-black text-gray-800">OSDE</div>
            <div className="text-2xl font-black text-gray-800">
              Swiss Medical
            </div>
            <div className="text-2xl font-black text-gray-800">Galeno</div>
            <div className="text-2xl font-black text-gray-800">Medicus</div>
            <div className="text-2xl font-black text-gray-800">OMINT</div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="clinica" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Nuestras Instalaciones
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Tecnología de vanguardia para tu comodidad y seguridad.
              </p>
            </div>
            <div className="flex space-x-2" data-aos="fade-left">
              <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Camera className="w-4 h-4 mr-2" /> 4 Salas de Atención
              </span>
              <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <ShieldCheck className="w-4 h-4 mr-2" /> Esterilización UV
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800",
            ].map((img, i) => (
              <div
                key={i}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <img
                  src={img}
                  alt={`Clínica ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="pacientes"
        className="bg-gray-50 py-24 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Más de 5.000 sonrisas transformadas con éxito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Lucía Fernández",
                text: "La atención es impecable. Me hice un blanqueamiento y los resultados superaron mis expectativas. ¡Súper recomendado!",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
              },
              {
                name: "Ricardo Gómez",
                text: "El sistema de turnos online es lo mejor. Pude elegir a mi odontólogo y el horario sin tener que llamar por teléfono.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
              },
              {
                name: "Elena Martínez",
                text: "Me sentí muy segura desde que entré. Las instalaciones son de primer nivel y la Dra. María es una genia.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <span className="font-bold text-gray-900">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿Atienden obras sociales?",
                a: "Sí, trabajamos con las principales prepagas y obras sociales del país. Consulta por la tuya al solicitar el turno.",
              },
              {
                q: "¿Cómo puedo cancelar un turno?",
                a: "Puedes hacerlo desde el link que recibes por WhatsApp hasta 24 horas antes de la cita sin cargo.",
              },
              {
                q: "¿Tienen estacionamiento?",
                a: "Contamos con un convenio de estacionamiento gratuito para pacientes a media cuadra de la clínica.",
              },
              {
                q: "¿Realizan urgencias las 24hs?",
                a: "Atendemos urgencias en horario comercial y contamos con una guardia pasiva para fines de semana.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section
        id="contacto"
        className="bg-gray-900 py-24 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-extrabold mb-8">
                Estamos cerca tuyo.
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-600 p-3 rounded-xl mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Nuestra Dirección</h4>
                    <p className="text-gray-400">
                      Av. del Libertador 1234, Recoleta, CABA.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-600 p-3 rounded-xl mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Teléfono</h4>
                    <p className="text-gray-400">+54 11 4567-8900</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-600 p-3 rounded-xl mr-4">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Instagram</h4>
                    <p className="text-gray-400">@lumina.dental</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative rounded-3xl overflow-hidden h-96 shadow-2xl border-4 border-gray-800"
              data-aos="fade-left"
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                alt="Mapa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/10 mix-blend-multiply"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black mb-2">15+</div>
              <div className="text-primary-100 text-sm uppercase tracking-widest font-bold">
                Años de Exp.
              </div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">8.5k</div>
              <div className="text-primary-100 text-sm uppercase tracking-widest font-bold">
                Pacientes
              </div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">12</div>
              <div className="text-primary-100 text-sm uppercase tracking-widest font-bold">
                Especialistas
              </div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">100%</div>
              <div className="text-primary-100 text-sm uppercase tracking-widest font-bold">
                Garantía
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-6 h-6 text-primary-500" />
              <span className="font-black text-xl tracking-tight">LUMINA</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Tecnología y experiencia para crear las mejores sonrisas.
              Innovación dental al alcance de todos.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Solicitar Turno
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Nuestros Profesionales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Tratamientos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Portal Paciente
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" /> Av. Libertador 1234, CABA
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" /> (011) 4567-8900
              </li>
              <li className="flex items-center mt-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; 2026 Lumina Dental Clinic. Todos los derechos reservados.
          </p>
          <p className="mt-2 md:mt-0">
            Desarrollado por{" "}
            <a
              href="#"
              className="text-primary-500 font-semibold hover:text-primary-400"
            >
              GO Web Solutions
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
