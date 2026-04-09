import { motion } from 'framer-motion';

const skills = {
  design: [
    { name: 'Canva', level: 95 },
    { name: 'Photoshop', level: 90 },
  ],
  photography: [
    { name: 'Fotografi', level: 92 },
    { name: 'Editing Foto', level: 88 },
  ],
  creative: [
    { name: 'Content Creation', level: 90 },
    { name: 'Visual Storytelling', level: 85 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-blue-400">{level}%</span>
      </div>
      <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium mb-2 block">Keahlian</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            𝒔𝒌𝒊𝒍𝒍𝒔 & 𝒌𝒓𝒆𝒂𝒕𝒊𝒗𝒊𝒕𝒂𝒔
          </h2>
          <div className="w-20 h-1 bg-blue-300 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Design */}
          <motion.div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-blue-100 shadow-md hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-500 text-xl">
                ✦
              </div>
              <h3 className="font-display text-xl font-bold text-gray-800">Design</h3>
            </div>
            <div className="space-y-4">
              {skills.design.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Photography */}
          <motion.div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-blue-100 shadow-md hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-500 text-xl">
                ◌
              </div>
              <h3 className="font-display text-xl font-bold text-gray-800">Fotografi</h3>
            </div>
            <div className="space-y-4">
              {skills.photography.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Creative */}
          <motion.div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-blue-100 shadow-md hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-500 text-xl">
                ❖
              </div>
              <h3 className="font-display text-xl font-bold text-gray-800">Creative</h3>
            </div>
            <div className="space-y-4">
              {skills.creative.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}