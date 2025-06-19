import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const StatsDashboard = () => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Animated Counter Hook
  const useAnimatedCounter = (end, duration = 2, startDelay = 0) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (isInView && !hasStarted) {
        setHasStarted(true);
        setTimeout(() => {
          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min(
              (currentTime - startTime) / (duration * 1000),
              1
            );

            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }, startDelay * 1000);
      }
    }, [isInView, end, duration, startDelay, hasStarted]);

    return count;
  };

  // Progress Ring Component
  const ProgressRing = ({
    percentage,
    color,
    size = 120,
    strokeWidth = 8,
    duration = 2,
  }) => {
    const [progress, setProgress] = useState(0);
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;

    useEffect(() => {
      if (isInView) {
        setTimeout(() => {
          setProgress(percentage);
        }, 500);
      }
    }, [isInView, percentage]);

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset:
                circumference - (progress / 100) * circumference,
            }}
            transition={{ duration, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    );
  };

  // Animated stats data
  const mainStats = [
    {
      id: "repairs",
      number: useAnimatedCounter(15000, 2.5, 0.2),
      target: 15000,
      label: "Successful Repairs",
      icon: "🔧",
      gradient: "from-blue-500 to-cyan-500",
      description: "Devices restored to perfect condition",
    },
    {
      id: "customers",
      number: useAnimatedCounter(8500, 2.8, 0.4),
      target: 8500,
      label: "Happy Customers",
      icon: "😊",
      gradient: "from-green-500 to-emerald-500",
      description: "Satisfied clients across the region",
    },
    {
      id: "experience",
      number: useAnimatedCounter(12, 2.2, 0.6),
      target: 12,
      label: "Years Experience",
      icon: "⭐",
      gradient: "from-yellow-500 to-orange-500",
      description: "Professional repair expertise",
    },
    {
      id: "rating",
      number: (useAnimatedCounter(498, 2.3, 0.8) / 100).toFixed(1),
      target: 4.98,
      label: "Average Rating",
      icon: "⭐",
      gradient: "from-purple-500 to-pink-500",
      description: "Customer satisfaction score",
    },
  ];

  const progressStats = [
    {
      label: "Success Rate",
      percentage: 98,
      color: "url(#gradient1)",
      description: "First-time fix rate",
    },
    {
      label: "Customer Return",
      percentage: 94,
      color: "url(#gradient2)",
      description: "Repeat customers",
    },
    {
      label: "Same Day Service",
      percentage: 89,
      color: "url(#gradient3)",
      description: "Quick turnaround",
    },
  ];

  const realTimeMetrics = [
    {
      label: "Live Queue",
      value: Math.floor(Math.random() * 12) + 3,
      unit: "devices",
      trend: "+2",
      color: "text-blue-400",
    },
    {
      label: "Avg Wait Time",
      value: Math.floor(Math.random() * 20) + 15,
      unit: "min",
      trend: "-5",
      color: "text-green-400",
    },
    {
      label: "Today Completed",
      value: Math.floor(Math.random() * 15) + 25,
      unit: "repairs",
      trend: "+8",
      color: "text-purple-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 via-black to-purple-900/20 relative overflow-hidden"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(34,197,94,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* SVG Gradients */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time metrics showcasing our commitment to excellence and
            customer satisfaction
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="group relative"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              onHoverStart={() => setHoveredStat(stat.id)}
              onHoverEnd={() => setHoveredStat(null)}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}
              ></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center transition-all duration-300 group-hover:border-gray-500/50">
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center text-4xl shadow-lg`}
                  animate={
                    hoveredStat === stat.id
                      ? {
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Number */}
                <motion.div
                  className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  animate={
                    hoveredStat === stat.id ? { scale: 1.1 } : { scale: 1 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {typeof stat.number === "string"
                    ? stat.number
                    : stat.number.toLocaleString()}
                  {stat.id === "rating" ? "" : "+"}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${
                      stat.gradient.split(" ")[1]
                    }, transparent)`,
                    padding: "1px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "exclude",
                  }}
                  animate={{
                    rotate: hoveredStat === stat.id ? [0, 360] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredStat === stat.id ? Infinity : 0,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Rings Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {progressStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <motion.div
                className="mb-6 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <ProgressRing
                  percentage={stat.percentage}
                  color={stat.color}
                  duration={2 + index * 0.2}
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Real-time Metrics */}
        <motion.div
          className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Live Metrics Dashboard
            </h3>
            <p className="text-gray-400">
              Real-time updates from our repair center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {realTimeMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-600/30"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                  <span className="text-2xl text-gray-400 ml-2">
                    {metric.unit}
                  </span>
                </div>
                <div className="text-lg text-white mb-2">{metric.label}</div>
                <div className="flex items-center justify-center">
                  <span
                    className={`text-sm ${
                      metric.trend.startsWith("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {metric.trend} from yesterday
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Live Status Indicator */}
          <motion.div
            className="flex items-center justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-3 h-3 bg-green-400 rounded-full mr-3"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-400 font-medium">
              Live Data • Updated every 30 seconds
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Join Thousands of Satisfied Customers
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the difference of professional repair services backed by
            proven results
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Repair Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsDashboard;
