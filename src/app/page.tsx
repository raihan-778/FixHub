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
      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent_100%)] bg-[length:50px_50px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent_100%)] bg-[length:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              State-of-the-art tools and precision instruments for flawless
              repairs
            </p>
          </motion.div>

          {/* Interactive Tech Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔧",
                title: "Micro Soldering",
                description: "Advanced microscopic repair capabilities",
                color: "from-blue-500 to-cyan-500",
                metrics: "99.2% Success Rate",
              },
              {
                icon: "⚡",
                title: "Ultrasonic Cleaning",
                description: "Deep component cleaning technology",
                color: "from-purple-500 to-pink-500",
                metrics: "Nano-level Clean",
              },
              {
                icon: "🔍",
                title: "AI Diagnostics",
                description: "Machine learning fault detection",
                color: "from-green-500 to-teal-500",
                metrics: "95% Accuracy",
              },
              {
                icon: "🛡️",
                title: "Data Recovery",
                description: "Advanced data rescue protocols",
                color: "from-orange-500 to-red-500",
                metrics: "90% Recovery Rate",
              },
              {
                icon: "📱",
                title: "Screen Calibration",
                description: "Factory-level display optimization",
                color: "from-indigo-500 to-blue-500",
                metrics: "Perfect Color Match",
              },
              {
                icon: "🔋",
                title: "Battery Analysis",
                description: "Complete power system diagnostics",
                color: "from-yellow-500 to-orange-500",
                metrics: "Full Health Report",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                />

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-transparent group-hover:bg-gray-800/50">
                  {/* Floating Icon */}
                  <motion.div
                    className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {tech.icon}
                  </motion.div>

                  <h3
                    className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                    style={{
                      "--tw-gradient-from": tech.color.split(" ")[1],
                      "--tw-gradient-to": tech.color.split(" ")[3],
                    }}
                  >
                    {tech.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {tech.description}
                  </p>

                  {/* Metric Badge */}
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} text-white text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity`}
                  >
                    {tech.metrics}
                  </div>

                  {/* Animated Progress Bar */}
                  <motion.div
                    className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${85 + Math.random() * 15}%` }}
                      transition={{ duration: 2, delay: 0.8 + index * 0.1 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Hub Visualization */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block">
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold mx-auto relative z-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="text-white">⚙️</div>
              </motion.div>

              {/* Orbiting Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-white rounded-full opacity-60"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0 0",
                  }}
                  animate={{
                    rotate: [0, 360],
                    x: [0, 80 * Math.cos((i * Math.PI) / 3)],
                    y: [0, 80 * Math.sin((i * Math.PI) / 3)],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Integrated Repair Ecosystem
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              All our advanced technologies work together seamlessly to deliver
              the fastest, most reliable repair experience possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Device Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-purple-900/20 relative overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Devices We Repair
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Watch our repair magic in action - interactive demonstrations of
              our expertise
            </p>
          </motion.div>

          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: Interactive Device Display */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 flex items-center justify-center">
                {/* Main Device - iPhone */}
                <motion.div
                  className="absolute z-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl"
                  style={{ width: 180, height: 360 }}
                  animate={{
                    y: [0, -10, 0],
                    rotateY: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 15,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Screen */}
                  <div className="bg-black rounded-[2rem] h-full relative overflow-hidden">
                    <motion.div
                      className="absolute inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[1.5rem] flex items-center justify-center"
                      animate={{
                        background: [
                          "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))",
                          "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))",
                          "linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(239, 68, 68, 0.2))",
                          "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <motion.div
                        className="text-4xl"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        📱
                      </motion.div>
                    </motion.div>

                    {/* Repair Progress Indicator */}
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 bg-gray-800/50 rounded-full p-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <motion.div
                        className="h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />
                      <div className="text-xs text-white mt-1 text-center">
                        Repair Progress
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Repair Tools */}
                {[
                  {
                    icon: "🔧",
                    color: "from-blue-400 to-cyan-400",
                    delay: 0,
                    radius: 120,
                    speed: 8,
                  },
                  {
                    icon: "⚡",
                    color: "from-yellow-400 to-orange-400",
                    delay: 1,
                    radius: 140,
                    speed: -6,
                  },
                  {
                    icon: "🔍",
                    color: "from-green-400 to-emerald-400",
                    delay: 2,
                    radius: 100,
                    speed: 10,
                  },
                  {
                    icon: "🛠️",
                    color: "from-purple-400 to-pink-400",
                    delay: 3,
                    radius: 160,
                    speed: -7,
                  },
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center text-2xl shadow-xl`}
                    animate={{
                      rotate: [0, 360],
                      x: [
                        0,
                        tool.radius * Math.cos(Date.now() * 0.001 * tool.speed),
                      ],
                      y: [
                        0,
                        tool.radius * Math.sin(Date.now() * 0.001 * tool.speed),
                      ],
                    }}
                    transition={{
                      duration: Math.abs(tool.speed),
                      repeat: Infinity,
                      delay: tool.delay,
                      ease: "linear",
                    }}
                    whileHover={{ scale: 1.2, zIndex: 30 }}
                  >
                    {tool.icon}
                  </motion.div>
                ))}

                {/* Orbit Rings */}
                {[100, 140, 180].map((radius, index) => (
                  <motion.div
                    key={index}
                    className="absolute border border-white/10 rounded-full"
                    style={{
                      width: radius * 2,
                      height: radius * 2,
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20 + index * 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right: Device Categories */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                {
                  device: "Smartphones",
                  icon: "📱",
                  repairs: [
                    "Screen Replacement",
                    "Battery Swap",
                    "Camera Fix",
                    "Water Damage",
                  ],
                  color: "from-blue-500 to-purple-500",
                  count: "5,000+",
                },
                {
                  device: "Laptops",
                  icon: "💻",
                  repairs: [
                    "Keyboard Repair",
                    "Screen Fix",
                    "Motherboard",
                    "SSD Upgrade",
                  ],
                  color: "from-green-500 to-teal-500",
                  count: "3,200+",
                },
                {
                  device: "Tablets",
                  icon: "📱",
                  repairs: [
                    "Touch Screen",
                    "Charging Port",
                    "Speaker Fix",
                    "Button Repair",
                  ],
                  color: "from-orange-500 to-red-500",
                  count: "2,800+",
                },
                {
                  device: "Gaming Consoles",
                  icon: "🎮",
                  repairs: [
                    "HDMI Port",
                    "Controller Fix",
                    "Overheating",
                    "Disc Reader",
                  ],
                  color: "from-purple-500 to-pink-500",
                  count: "1,500+",
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-transparent transition-all duration-500 group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    background: `linear-gradient(135deg, rgba(55, 65, 81, 0.7), rgba(17, 24, 39, 0.7))`,
                  }}
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl mr-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <div>
                      <h3
                        className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${
                            category.color.split(" ")[1]
                          }, ${category.color.split(" ")[3]})`,
                        }}
                      >
                        {category.device}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {category.count} repairs completed
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {category.repairs.map((repair, repairIndex) => (
                      <motion.div
                        key={repairIndex}
                        className="bg-gray-700/30 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-gray-600/50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + repairIndex * 0.1 }}
                      >
                        {repair}
                      </motion.div>
                    ))}
                  </div>

                  {/* Success Rate Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Success Rate</span>
                      <span>{95 + Math.floor(Math.random() * 5)}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${95 + Math.floor(Math.random() * 5)}%`,
                        }}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Interactive Elements */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "15K+", label: "Devices Repaired", icon: "🔧" },
                { number: "24H", label: "Average Turnaround", icon: "⚡" },
                { number: "98%", label: "Success Rate", icon: "✅" },
                { number: "5★", label: "Customer Rating", icon: "⭐" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="text-3xl mb-2"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Card Staging Design Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 via-black to-gray-900 relative overflow-hidden">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(120,119,198,0.05)_60deg,transparent_120deg,rgba(168,85,247,0.05)_180deg,transparent_240deg,rgba(59,130,246,0.05)_300deg,transparent_360deg)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Premium Repair Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of professional repair solutions,
              each crafted with precision and care
            </p>
          </motion.div>

          {/* Main Card Staging Layout */}
          <div className="relative">
            {/* Background Cards (Depth Layer 1) */}
            <div className="absolute inset-0 transform translate-x-8 translate-y-8 opacity-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl"
                  ></div>
                ))}
              </div>
            </div>

            {/* Middle Cards (Depth Layer 2) */}
            <div className="absolute inset-0 transform translate-x-4 translate-y-4 opacity-40">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-80 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl blur-sm"
                  ></div>
                ))}
              </div>
            </div>

            {/* Front Cards (Main Content) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Screen Restoration",
                  subtitle: "Crystal Clear Display",
                  description:
                    "Professional screen replacement with premium OLED panels and lifetime color accuracy guarantee",
                  icon: "📱",
                  gradient: "from-blue-500 via-purple-500 to-pink-500",
                  features: [
                    "4K OLED Panels",
                    "Touch Calibration",
                    "Lifetime Warranty",
                    "Same-day Service",
                  ],
                  price: "From $89",
                  popular: false,
                  delay: 0,
                },
                {
                  title: "Complete Restoration",
                  subtitle: "Like New Performance",
                  description:
                    "Full device overhaul including hardware diagnostics, component replacement, and optimization",
                  icon: "⚡",
                  gradient: "from-emerald-500 via-teal-500 to-cyan-500",
                  features: [
                    "Full Diagnostics",
                    "Hardware Upgrade",
                    "Performance Boost",
                    "Data Protection",
                  ],
                  price: "From $199",
                  popular: true,
                  delay: 0.2,
                },
                {
                  title: "Water Damage Recovery",
                  subtitle: "Advanced Recovery",
                  description:
                    "Specialized liquid damage treatment using ultrasonic cleaning and component-level repair",
                  icon: "💧",
                  gradient: "from-orange-500 via-red-500 to-pink-500",
                  features: [
                    "Ultrasonic Clean",
                    "Component Repair",
                    "Data Recovery",
                    "Rush Available",
                  ],
                  price: "From $149",
                  popular: false,
                  delay: 0.4,
                },
                {
                  title: "Battery Optimization",
                  subtitle: "Extended Life",
                  description:
                    "Premium battery replacement with advanced power management and health monitoring",
                  icon: "🔋",
                  gradient: "from-yellow-500 via-orange-500 to-red-500",
                  features: [
                    "OEM Batteries",
                    "Health Monitor",
                    "Fast Charging",
                    "3-Year Warranty",
                  ],
                  price: "From $69",
                  popular: false,
                  delay: 0.6,
                },
                {
                  title: "Motherboard Repair",
                  subtitle: "Micro-Level Precision",
                  description:
                    "Advanced micro-soldering and component-level repair for complex hardware issues",
                  icon: "🔧",
                  gradient: "from-indigo-500 via-purple-500 to-pink-500",
                  features: [
                    "Micro Soldering",
                    "Component Replace",
                    "Logic Board Fix",
                    "Expert Level",
                  ],
                  price: "From $299",
                  popular: false,
                  delay: 0.8,
                },
                {
                  title: "Express Service",
                  subtitle: "Priority Repair",
                  description:
                    "Fastest turnaround with dedicated technician assignment and real-time progress tracking",
                  icon: "🚀",
                  gradient: "from-pink-500 via-rose-500 to-orange-500",
                  features: [
                    "1-Hour Service",
                    "Priority Queue",
                    "Live Tracking",
                    "Rush Guarantee",
                  ],
                  price: "From $50",
                  popular: false,
                  delay: 1.0,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{
                    opacity: 0,
                    y: 100,
                    rotateX: 15,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: service.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -20,
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  style={{ perspective: 1000 }}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: service.delay + 0.5 }}
                    >
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                        ⭐ Most Popular
                      </div>
                    </motion.div>
                  )}

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}
                  ></div>

                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon}
                      </motion.div>

                      <motion.div
                        className="text-right"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: service.delay + 0.3 }}
                      >
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                        >
                          {service.price}
                        </div>
                        <div className="text-sm text-gray-400">
                          Starting price
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3
                        className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${service.gradient
                            .replace("from-", "")
                            .replace("via-", "")
                            .replace("to-", "")
                            .split(" ")
                            .map((c) => `var(--${c})`)
                            .join(", ")})`,
                        }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-lg font-medium text-gray-300 mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: service.delay + 0.4 + featureIndex * 0.1,
                            }}
                          >
                            <motion.div
                              className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: featureIndex * 0.3,
                              }}
                            />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.button
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: service.delay + 0.6 }}
                    >
                      Book This Service
                    </motion.button>

                    {/* Animated Border */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 rounded-2xl`}
                      style={{
                        background: `conic-gradient(from 0deg, transparent, ${
                          service.gradient.split(" ")[1]
                        }, transparent)`,
                        padding: "2px",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "exclude",
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-white/10 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, 10, 0],
                      scale: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our expert technicians will diagnose your device for free and
              recommend the best repair solution
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Diagnosis
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
