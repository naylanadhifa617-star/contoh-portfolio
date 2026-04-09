import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">

      <div className="flex flex-col items-center gap-5">

        <h1 className="text-2xl font-bold text-blue-600">
          nayla.dev
        </h1>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-10 h-10 border-4 border-blue-200 border-t-blue-500 rounded-full"
        />

        <p className="text-blue-500 text-sm">
          loading...
        </p>

      </div>

    </div>
  );
}