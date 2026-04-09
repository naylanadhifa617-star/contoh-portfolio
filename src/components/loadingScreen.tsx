import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100">

      {/* CONTAINER */}
      <div className="flex flex-col items-center gap-6">

        {/* LOGO / TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
         className="text-3xl md:text-4xl font-bold text-blue-800 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
        >
          Nayla Portfolio ✨
        </motion.h1>

        {/* LOADING DOTS */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 rounded-full bg-blue-400"
            />
          ))}
        </div>

        {/* SPINNER */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
          className="w-10 h-10 border-4 border-blue-200 border-t-blue-500 rounded-full"
        />

        {/* SUBTEXT */}
        <p className="text-blue-600 text-sm">
          loading your world...
        </p>
      </div>
    </div>
  );
}