import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-100 px-10 py-20">

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">

        {/* FOTO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white"
        >
          <img 
            src="/nyla.jpg"
            alt="foto nayla"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left max-w-xl"
        >
          <p className="text-blue-400 mb-2"> 𝒘𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝒎𝒚 𝒑𝒐𝒓𝒕𝒐𝒇𝒐𝒍𝒊𝒐 Ი︵𐑼 </p>

          <h1 className="text-4xl font-bold leading-tight">
            <span className="block tracking-widest">ｎａｙｌａ'ｓ</span>
           <span className="block tracking-wide text-blue-500">ｐｏｒｔｏｆｏｌｉｏ</span>
          </h1> 

          <p className="text-blue-700 mb-6">
            "𝐼 𝑏𝑒𝑙𝑖𝑒𝑣𝑒 𝑡ℎ𝑎𝑡 𝑒𝑣𝑒𝑟𝑦 𝑠𝑚𝑎𝑙𝑙 𝑠𝑡𝑒𝑝 𝑖𝑛 𝑙𝑒𝑎𝑟𝑛𝑖𝑛𝑔 𝑎𝑛𝑑 𝑐𝑟𝑒𝑎𝑡𝑖𝑛𝑔 𝑡𝑜𝑑𝑎𝑦 𝑤𝑖𝑙𝑙 𝑠ℎ𝑎𝑝𝑒 𝑎 𝑏𝑒𝑡𝑡𝑒𝑟, 𝑠𝑚𝑎𝑟𝑡𝑒𝑟, 𝑎𝑛𝑑 𝑚𝑜𝑟𝑒 𝑖𝑚𝑝𝑎𝑐𝑡𝑓𝑢𝑙 𝑓𝑢𝑡𝑢𝑟𝑒 𝑡𝑜𝑚𝑜𝑟𝑟𝑜𝑤."
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-6 py-2 bg-blue-400 text-white rounded-full shadow-md hover:bg-blue-500 transition">
              Lihat Projects
            </button>

            <button className="px-6 py-2 border border-blue-300 text-blue-500 rounded-full hover:bg-blue-100 transition">
              Hubungi Saya
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}