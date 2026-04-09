import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '🛒',
    color: 'from-blue-200 to-blue-400',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description:
      'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
    image: '📚',
    color: 'from-sky-200 to-blue-300',
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Dashboard analytics untuk social media dengan real-time data visualization dan reporting.',
    tags: ['React', 'D3.js', 'Firebase', 'Tailwind'],
    image: '📊',
    color: 'from-blue-100 to-cyan-300',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description:
      'Tool untuk generate konten menggunakan AI dengan integrasi berbagai model language.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    image: '🤖',
    color: 'from-cyan-200 to-blue-400',
    github: '#',
    demo: '#',
  },
];

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (isHover) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHover]);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-blue-500 font-medium mb-2 block">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-blue-900">
            Projects &amp; Karya
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full" />
        </div>

        {/* CAROUSEL */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-4 rounded-2xl shadow-lg bg-white border border-blue-100"
            >
              {/* IMAGE */}
              <div
                className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${projects[index].color}`}
              >
                <span className="text-6xl">
                  {projects[index].image}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="font-display text-xl font-bold mb-2 text-blue-900">
                {projects[index].title}
              </h3>

              {/* DESC */}
              <p className="text-base text-blue-700 mb-4">
                {projects[index].description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[index].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <div className="flex gap-2">
                {projects[index].github !== '#' && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                    asChild
                  >
                    <a href={projects[index].github}>
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                )}

                {projects[index].demo !== '#' && (
                  <Button
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    asChild
                  >
                    <a href={projects[index].demo}>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* NAV */}
          <Button
            size="icon"
            variant="outline"
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 border-blue-200"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4 text-blue-600" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 border-blue-200"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4 text-blue-600" />
          </Button>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full cursor-pointer transition-all ${
                  i === index
                    ? 'w-5 bg-blue-500'
                    : 'w-1.5 bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}