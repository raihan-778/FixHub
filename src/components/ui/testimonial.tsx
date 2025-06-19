import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle,
  Quote,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      avatar: "SC",
      rating: 5,
      text: "FixHub Pro saved my iPhone when I thought it was completely dead. Water damage repair in just 24 hours - absolutely incredible service!",
      service: "iPhone Water Damage",
      timeAgo: "2 days ago",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Freelance Designer",
      company: "Self-Employed",
      avatar: "MJ",
      rating: 5,
      text: "My MacBook Pro was running incredibly slow. They diagnosed and fixed it the same day. Now it's running better than when I first bought it!",
      service: "MacBook Performance",
      timeAgo: "1 week ago",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Student",
      company: "NYU",
      avatar: "ER",
      rating: 5,
      text: "Cracked my iPad screen the night before a big presentation. They had it fixed by morning with a warranty. Lifesavers!",
      service: "iPad Screen Repair",
      timeAgo: "3 days ago",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Small Business Owner",
      company: "Kim's Electronics",
      avatar: "DK",
      rating: 5,
      text: "I've sent over 20 devices here for my customers. Consistently excellent work, fair pricing, and always on time. Highly recommend!",
      service: "Multiple Devices",
      timeAgo: "1 day ago",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "15,000+",
      label: "Happy Customers",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      value: "24hr",
      label: "Avg Turnaround",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: CheckCircle,
      value: "90 Days",
      label: "Warranty",
      color: "from-orange-500 to-red-500",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-blue-300">Trusted by Thousands</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real stories from real customers who trust us with their devices
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center relative overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={sectionInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-96 rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-3xl"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-8 lg:p-12 h-full flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[activeTestimonial].avatar}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {testimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-gray-400">
                          {testimonials[activeTestimonial].role} at{" "}
                          {testimonials[activeTestimonial].company}
                        </p>
                        <div className="flex items-center gap-1 mt-2">
                          {[
                            ...Array(testimonials[activeTestimonial].rating),
                          ].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                          <span className="text-sm text-gray-500 ml-2">
                            {testimonials[activeTestimonial].timeAgo}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Quote className="w-12 h-12 text-blue-400/30" />
                  </div>

                  <blockquote className="text-2xl lg:text-3xl text-white leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>

                  <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 w-fit">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-blue-300">
                      {testimonials[activeTestimonial].service}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-blue-500 w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Auto-play indicator */}
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div
                className={`w-2 h-2 rounded-full ${
                  isAutoPlaying ? "bg-green-400" : "bg-gray-500"
                }`}
              ></div>
              {isAutoPlaying ? "Auto-playing" : "Paused"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
