import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  User,
  Stethoscope,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Clock,
  Sparkles,
  Smile,
} from "lucide-react";
import {
  services,
  professionals,
  generateAvailableTimeSlots,
} from "../data/mockData";
import { format, addDays, startOfToday, isSameDay } from "date-fns";
import { es } from "date-fns/locale";
import toast, { Toaster } from "react-hot-toast";

const getIcon = (iconName) => {
  switch (iconName) {
    case "stethoscope":
      return <Stethoscope className="w-6 h-6 text-primary-500" />;
    case "sparkles":
      return <Sparkles className="w-6 h-6 text-primary-500" />;
    case "smile":
      return <Smile className="w-6 h-6 text-primary-500" />;
    default:
      return <Stethoscope className="w-6 h-6 text-primary-500" />;
  }
};

const BookingWidget = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: null,
    professional: null,
    date: null,
    time: null,
    patientName: "",
    patientPhone: "",
  });

  const [isSearching, setIsSearching] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleServiceSelect = (service) => {
    setFormData({ ...formData, service });
    nextStep();
  };

  const handleProfessionalSelect = (professional) => {
    setFormData({ ...formData, professional });
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      nextStep();
    }, 1200);
  };

  const handleDateTimeSelect = (date, time) => {
    setFormData({ ...formData, date, time });
    nextStep();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.patientPhone) {
      toast.error("Por favor completa tus datos.");
      return;
    }

    // Simulate API call
    toast.loading("Confirmando turno...", { id: "booking" });
    setTimeout(() => {
      toast.success("¡Turno confirmado con éxito!", { id: "booking" });
      nextStep();
    }, 1500);
  };

  const steps = [
    { num: 1, label: "Servicio" },
    { num: 2, label: "Profesional" },
    { num: 3, label: "Fecha y Hora" },
    { num: 4, label: "Datos" },
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <Toaster position="top-center" />

      {/* Header / Stepper */}
      {step < 5 && (
        <div className="bg-gray-50 border-b border-gray-100 p-6">
          <div className="flex items-center justify-between">
            {steps.map((s, idx) => (
              <div
                key={s.num}
                className="flex flex-col items-center relative z-10 flex-1"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors duration-300 ${
                    step >= s.num
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > s.num ? <CheckCircle2 className="w-6 h-6" /> : s.num}
                </div>
                <span
                  className={`text-xs mt-2 font-medium ${step >= s.num ? "text-primary-800" : "text-gray-400"}`}
                >
                  {s.label}
                </span>
                {idx < steps.length - 1 && (
                  <div
                    className={`absolute top-5 left-1/2 w-full h-1 -z-10 transition-colors duration-300 ${
                      step > s.num ? "bg-primary-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="p-6 md:p-10 min-h-[400px] relative">
        {step > 1 && step < 5 && (
          <button
            onClick={prevStep}
            className="absolute top-6 left-6 flex items-center text-gray-500 hover:text-primary-600 transition-colors text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Volver
          </button>
        )}

        <AnimatePresence mode="wait">
          {isSearching && (
            <motion.div
              key="searching"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 border-4 border-primary-100 border-t-primary-600 rounded-full animate-spin mb-4"></div>
              <p className="text-primary-800 font-bold text-lg animate-pulse">
                Consultando disponibilidad...
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Estamos conectando con la agenda de{" "}
                {formData.professional?.name}
              </p>
            </motion.div>
          )}

          {/* STEP 1: SERVICES */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mt-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                ¿Qué tratamiento necesitas?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className="group border border-gray-200 rounded-xl p-5 hover:border-primary-500 hover:shadow-md transition-all cursor-pointer bg-white"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary-50 p-3 rounded-lg group-hover:bg-primary-100 transition-colors">
                          {getIcon(service.icon)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg">
                            {service.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="flex items-center text-sm text-gray-600 font-medium">
                        <Clock className="w-4 h-4 mr-1.5 text-gray-400" />
                        {service.duration}
                      </span>
                      <span className="font-bold text-primary-600">
                        {service.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: PROFESSIONALS */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mt-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Elige tu profesional
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {professionals.map((prof) => (
                  <div
                    key={prof.id}
                    onClick={() => handleProfessionalSelect(prof)}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary-500 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={prof.image}
                        alt={prof.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-xl">{prof.name}</h3>
                        <p className="text-sm text-gray-200">
                          {prof.specialty}
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-white flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600 flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Ver disponibilidad
                      </span>
                      <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: DATE AND TIME */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mt-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Selecciona Fecha y Hora
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Simulated Calendar */}
                <div className="border border-gray-200 rounded-xl p-5 bg-white">
                  <h3 className="font-semibold text-gray-700 mb-4 flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-2 text-primary-500" />
                    Próximos días disponibles
                  </h3>
                  <div className="space-y-3">
                    {[0, 1, 2, 3, 4].map((offset) => {
                      const date = addDays(startOfToday(), offset);
                      // Skip weekends for mock
                      if (date.getDay() === 0 || date.getDay() === 6)
                        return null;

                      const isSelected =
                        formData.date && isSameDay(formData.date, date);

                      return (
                        <div
                          key={offset}
                          onClick={() =>
                            setFormData({ ...formData, date, time: null })
                          }
                          className={`p-3 rounded-lg border cursor-pointer transition-colors flex justify-between items-center ${
                            isSelected
                              ? "border-primary-500 bg-primary-50 text-primary-800 font-medium"
                              : "border-gray-200 hover:border-primary-300 text-gray-700"
                          }`}
                        >
                          <span className="capitalize">
                            {format(date, "EEEE d, MMMM", { locale: es })}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="w-5 h-5 text-primary-500" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Simulated Time Slots */}
                <div
                  className={`transition-opacity duration-300 ${formData.date ? "opacity-100" : "opacity-50 pointer-events-none"}`}
                >
                  <h3 className="font-semibold text-gray-700 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary-500" />
                    Horarios{" "}
                    {formData.date &&
                      "para el " + format(formData.date, "d/MM")}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {generateAvailableTimeSlots().map((time) => (
                      <button
                        key={time}
                        onClick={() =>
                          handleDateTimeSelect(formData.date, time)
                        }
                        className={`py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${
                          formData.time === time
                            ? "bg-primary-600 text-white border-primary-600"
                            : "bg-white border-gray-200 text-gray-700 hover:border-primary-500 hover:text-primary-600"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: DETAILS */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mt-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Completa tus datos
              </h2>

              <div className="bg-primary-50 rounded-xl p-5 mb-8 border border-primary-100">
                <h3 className="font-semibold text-primary-900 mb-3">
                  Resumen de tu turno:
                </h3>
                <ul className="space-y-2 text-sm text-primary-800">
                  <li className="flex items-center">
                    <Stethoscope className="w-4 h-4 mr-2" />{" "}
                    <strong>Servicio:</strong> {formData.service?.name}
                  </li>
                  <li className="flex items-center">
                    <User className="w-4 h-4 mr-2" />{" "}
                    <strong>Profesional:</strong> {formData.professional?.name}
                  </li>
                  <li className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2" />{" "}
                    <strong>Fecha:</strong>{" "}
                    {formData.date &&
                      format(formData.date, "EEEE d, MMMM", {
                        locale: es,
                      })}{" "}
                    a las {formData.time}
                  </li>
                  <li className="flex items-center text-primary-600 font-semibold mt-2 border-t border-primary-200 pt-2">
                    Total a abonar en clínica: {formData.service?.price}
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) =>
                      setFormData({ ...formData, patientName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.patientPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, patientPhone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                    placeholder="Ej. +54 9 11 1234 5678"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary-500/30 transition-all active:scale-[0.98] mt-4"
                >
                  Confirmar Turno
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 5: SUCCESS */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ¡Turno Confirmado!
              </h2>
              <p className="text-gray-600 max-w-md mx-auto mb-8 text-lg">
                Gracias, <strong>{formData.patientName}</strong>. Te hemos
                enviado un mensaje de WhatsApp al{" "}
                <strong>{formData.patientPhone}</strong> con los detalles de tu
                turno para el{" "}
                {formData.date && format(formData.date, "d/MM/yyyy")} a las{" "}
                {formData.time}.
              </p>

              <button
                onClick={() => {
                  setStep(1);
                  setFormData({
                    service: null,
                    professional: null,
                    date: null,
                    time: null,
                    patientName: "",
                    patientPhone: "",
                  });
                }}
                className="text-primary-600 font-semibold hover:text-primary-800"
              >
                Solicitar otro turno
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BookingWidget;
