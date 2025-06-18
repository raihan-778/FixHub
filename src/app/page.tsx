"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  Laptop,
  Shield,
  Smartphone,
  Tablet,
  Wrench,
  Zap,
} from "lucide-react";
import React, { useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

  interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

  interface ProcessStep {
    step: string;
    title: string;
    description: string;
  }

  const services: Service[] = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Phone Repair",
      description:
        "Screen replacements, battery fixes, water damage recovery for all phone models",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Laptop Repair",
      description:
        "Hardware diagnostics, software troubleshooting, and component replacements",
    },
    {
      icon: <Tablet className="w-8 h-8" />,
      title: "Tablet Repair",
      description:
        "Touch screen repairs, charging port fixes, and software restoration",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio Devices",
      description:
        "Headphone repairs, speaker fixes, and audio equipment restoration",
    },
  ];

  const features: Feature[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Most repairs completed within 24-48 hours",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Warranty Guaranteed",
      description: "90-day warranty on all repairs and parts",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years experience",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      step: "01",
      title: "Book Online",
      description:
        "Schedule your repair appointment through our easy online booking system",
    },
    {
      step: "02",
      title: "Free Diagnosis",
      description:
        "Our experts will diagnose the issue and provide a detailed quote",
    },
    {
      step: "03",
      title: "Expert Repair",
      description:
        "Certified technicians fix your device with premium quality parts",
    },
    {
      step: "04",
      title: "Quality Check",
      description: "Thorough testing to ensure your device works perfectly",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen relative flex items-center justify-center"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
          style={{ y: backgroundY }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto px-4"
          style={{ y: textY }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FixHub Pro
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium device repair services with lightning-fast turnaround times
            and unmatched quality
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Book Repair Now
            </button>
            <button className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
              Get Free Quote
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional repair services for all your electronic devices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Features Section */}
      <section
        ref={aboutRef}
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With over a decade of experience and thousands of satisfied
                customers, we&apos;re the trusted choice for device repairs.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 grid grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    15K+
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">
                    Repairs
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    98%
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">
                    Success Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    24h
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">
                    Avg Turnaround
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Animated floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl opacity-20"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl opacity-30"
                  animate={{
                    rotate: [360, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-2xl">
                      <Smartphone className="w-12 h-12 text-blue-400 mb-4" />
                      <h4 className="font-semibold">Mobile Devices</h4>
                    </div>
                    <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 p-6 rounded-2xl">
                      <Laptop className="w-12 h-12 text-green-400 mb-4" />
                      <h4 className="font-semibold">Laptops</h4>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-2xl">
                      <Tablet className="w-12 h-12 text-purple-400 mb-4" />
                      <h4 className="font-semibold">Tablets</h4>
                    </div>
                    <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-6 rounded-2xl">
                      <Headphones className="w-12 h-12 text-orange-400 mb-4" />
                      <h4 className="font-semibold">Audio</h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={processRef}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple, transparent process from booking to device pickup
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <motion.div
                    className="relative mx-auto mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto relative z-10">
                      {step.step}
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-blue-500/50 transform translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Ready to Fix Your Device?
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get your device back to perfect condition with our expert repair
            services
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-200 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Repair <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now: (555) 123-4567
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
