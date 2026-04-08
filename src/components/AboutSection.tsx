import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Coffee,
  Rocket,
  ChevronDown,
  Sparkles,
  GraduationCap,
  Target,
} from 'lucide-react';

const STATS = [
  { icon: Coffee, value: '1000+', label: 'Cangkir Cafe Latte' },
  { icon: Rocket, value: '200+', label: 'Tinta Pulpen' },
];

const ACCORDION_DATA = [
  {
    id: 'edu',
    icon: <GraduationCap className="w-5 h-5" />,
    title: "𝔦𝔫𝔱𝔯𝔬𝔡𝔲𝔠𝔱𝔦𝔬𝔫 & 𝔢𝔡𝔲𝔠𝔞𝔱𝔦𝔬𝔫",
    content:
      " 𝖨 𝖺𝗆 𝖭𝖺𝗒𝗅𝖺 𝖭𝖺𝖽𝗁𝗂𝖿𝖺, 𝖨 𝗐𝖺𝗌 𝖻𝗈𝗋𝗇 𝗂𝗇 𝖡𝖺𝗇𝖽𝖺 𝖠𝖼𝖾𝗁, 𝖲𝖾𝗉𝗍𝖾𝗆𝖻𝖾𝗋 𝟤𝟧, 𝟤𝟢𝟢𝟫. 𝖨'𝗆 𝖺 𝟣𝟢𝗍𝗁-𝗀𝗋𝖺𝖽𝖾 𝗁𝗂𝗀𝗁 𝗌𝖼𝗁𝗈𝗈𝗅 𝗌𝗍𝗎𝖽𝖾𝗇𝗍. 𝖨 𝖺𝗍𝗍𝖾𝗇𝖽 𝖬𝖠𝖭 𝟣 𝖬𝗈𝖽𝖾𝗅 𝗂𝗇 𝖡𝖺𝗇𝖽𝖺 𝖠𝖼𝖾𝗁 𝖢𝗂𝗍𝗒. 𝖨'𝗆 𝖼𝗎𝗋𝗋𝖾𝗇𝗍𝗅𝗒 𝗌𝗍𝗎𝖽𝗒𝗂𝗇𝗀 𝖼𝗈𝖽𝗂𝗇𝗀 𝖺𝗇𝖽 𝗐𝖺𝗌 𝖺𝗌𝗌𝗂𝗀𝗇𝖾𝖽 𝗍𝗈 𝖼𝗋𝖾𝖺𝗍𝖾 𝖺 𝗐𝖾𝖻𝗌𝗂𝗍𝖾 𝖼𝗈𝗇𝗍𝖺𝗂𝗇𝗂𝗇𝗀 𝗆𝗒 𝗈𝗐𝗇 𝗉𝗈𝗋𝗍𝖿𝗈𝗅𝗂𝗈",
  },
  {
    id: 'vision',
    icon: <Target className="w-5 h-5" />,
    title: "𝖛𝖎𝖘𝖎𝖔𝖓 & 𝖎𝖉𝖊𝖆𝖑𝖘",
    content:
      "𝖨 𝗁𝗈𝗉𝖾 𝖨 𝖼𝖺𝗇 𝖼𝗈𝗇𝗍𝗂𝗇𝗎𝖾 𝗍𝗈 𝖽𝖾𝗏𝖾𝗅𝗈𝗉 𝗆𝗒𝗌𝖾𝗅𝖿 𝗂𝗇 𝗏𝖺𝗋𝗂𝗈𝗎𝗌 𝗐𝖺𝗒𝗌, 𝖿𝗋𝗈𝗆 𝖺𝗇𝗒 𝖺𝗌𝗉𝖾𝖼𝗍.",
  },
];

export default function AboutSection({ isDark }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="about"
      className={`relative py-24 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#93c5fd]'
          : 'bg-gradient-to-br from-[#f8fbff] via-[#e0f2fe] to-[#dbeafe]'
      }`}
    >
      {/* BACKGROUND ORNAMEN */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="flex items-center justify-center gap-2 text-blue-500 font-bold tracking-widest uppercase text-sm mb-3">
            <Sparkles size={16} />
            ᯓ 𝖌𝖊𝖙 𝖙𝖔 𝖐𝖓𝖔𝖜 𝖒𝖔𝖗𝖊 𝖈𝖑𝖔𝖘𝖊𝖑𝖞 ★
          </span>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-blue-900'
            }`}
          >
            𝕒𝕓𝕠𝕦𝕥 𝕞𝕖 ۶ৎ
          </h2>

          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* FOTO */}
          <div className="space-y-8">
            <div className="relative group mx-auto w-fit">
              {/* GLOW */}
              <div className="absolute -inset-3 rounded-3xl blur-2xl opacity-70 bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-300"></div>

              {/* FRAME */}
              <div className="relative p-[4px] rounded-3xl bg-white/40 shadow-xl">
                <div className="w-72 h-[480px] md:w-80 md:h-[520px] rounded-3xl overflow-hidden">
                  <img
                    src="/nayla pto (6).jpg"
                    alt="foto nayla"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl text-center bg-white/60 text-blue-900 shadow-lg backdrop-blur-md"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-6 p-6 rounded-2xl bg-white/40 backdrop-blur-md shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              𝕨𝕙𝕠 𝕚 𝕒'𝕞?
            </h3>

            <p className="text-lg text-blue-800">
              𝐇𝐞𝐥𝐥𝐨! 𝐈'𝐦 𝐍𝐚𝐲𝐥𝐚 𝐍𝐚𝐝𝐡𝐢𝐟𝐚. 𝐈 𝐚𝐦 𝐚 𝐬𝐭𝐮𝐝𝐞𝐧𝐭 𝐚𝐭 𝐌𝐀𝐍 𝟏 𝐁𝐚𝐧𝐝𝐚 𝐀𝐜𝐞𝐡..
            </p>

            {/* ACCORDION */}
            <div className="space-y-3">
              {ACCORDION_DATA.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl overflow-hidden shadow-md"
                >
                  <button
                    onClick={() =>
                      setExpanded(expanded === item.id ? null : item.id)
                    }
                    className="w-full flex justify-between items-center p-4 bg-white/70 text-blue-900 hover:bg-white transition"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="font-semibold">{item.title}</span>
                    </div>

                    <ChevronDown
                      className={`transition ${
                        expanded === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expanded === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="p-4 text-blue-800">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}