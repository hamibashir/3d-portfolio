import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

const projects = [
  {
    num: '01',
    name: 'NutriScan',
    type: 'App Dev · Full Stack',
    tech: 'Flutter · Dart · Firebase · AI',
    year: '2026',
    github: 'https://github.com/hamibashir/nutriscan',
    col1: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    ],
    col2: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '02',
    name: 'Game Mint',
    type: 'App Dev · Full Stack',
    tech: 'Flutter · PHP · Vue.js · MySQL',
    year: '2026',
    github: 'https://github.com/hamibashir/gamemint',
    col1: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    ],
    col2: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '03',
    name: 'Smart Agriculture',
    type: 'Full Stack · ML',
    tech: 'Flutter · Python · Machine Learning',
    year: '2026',
    github: 'https://github.com/hamibashir',
    col1: [
      'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
    ],
    col2: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '04',
    name: 'Qalb: Islamic Advisor',
    type: 'App Dev · Full Stack',
    tech: 'Flutter · PHP · Vue.js · Android',
    year: '2026',
    github: 'https://github.com/hamibashir',
    col1: [
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80',
    ],
    col2: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '05',
    name: 'POS & Online Store',
    type: 'Full Stack',
    tech: 'Laravel · Blade · MySQL',
    year: '2026',
    github: 'https://github.com/hamibashir',
    col1: [
      'https://images.unsplash.com/photo-1556742049-0a670fc8077c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    ],
    col2: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '06',
    name: 'Smart Attendance',
    type: 'Full Stack · ML',
    tech: 'JavaScript · Face Recognition',
    year: '2025',
    github: 'https://github.com/hamibashir',
    col1: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    ],
    col2: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '07',
    name: 'FitFlex',
    type: 'App Development',
    tech: 'Flutter · Dart · SQLite',
    year: '2025',
    github: 'https://github.com/hamibashir/fitflex',
    col1: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510519138161-58441d82595d?auto=format&fit=crop&w=800&q=80',
    ],
    col2: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '08',
    name: 'DevFolio',
    type: 'Frontend',
    tech: 'React · TypeScript · Tailwind CSS',
    year: '2025',
    github: 'https://github.com/hamibashir/devfolio',
    col1: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    ],
    col2: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '09',
    name: 'TaskFlow',
    type: 'Full Stack',
    tech: 'Laravel · Vue.js · MySQL · Tailwind CSS',
    year: '2025',
    github: 'https://github.com/hamibashir/taskflow',
    col1: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    ],
    col2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '10',
    name: 'Image Classification AI',
    type: 'Machine Learning',
    tech: 'Python · PyTorch · OpenCV',
    year: '2025',
    github: 'https://github.com/hamibashir/image-classifier',
    col1: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80',
    ],
    col2: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
  },
]

const TOTAL = projects.length
const SCALE_STEP = 0.015
const CARD_OFFSET = 20

interface ProjectCardProps {
  project: (typeof projects)[0]
  index: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}

function ProjectCard({ project, index, scrollYProgress }: ProjectCardProps) {
  const targetScale = 1 - (TOTAL - 1 - index) * SCALE_STEP
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      className="sticky"
      style={{ top: `calc(${index * CARD_OFFSET}px + 5rem)`, height: '85vh' }}
    >
      <motion.div
        style={{ scale }}
        className="h-full rounded-[32px] sm:rounded-[40px] md:rounded-[50px]
                   border-2 border-[#D7E2EA] bg-[#0C0C0C]
                   p-4 sm:p-5 md:p-6 flex flex-col gap-4 origin-top overflow-hidden"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 flex-shrink-0">
          {/* Left: number + type + tech */}
          <div className="flex flex-col leading-none gap-1 flex-shrink-0">
            <span
              className="font-black hero-heading leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              {project.num}
            </span>
            <span
              className="text-[#D7E2EA] font-medium uppercase tracking-wider mt-0.5"
              style={{ fontSize: 'clamp(0.6rem, 1.1vw, 0.85rem)' }}
            >
              {project.type}
            </span>
            <span
              className="text-[#D7E2EA]/50 font-light"
              style={{ fontSize: 'clamp(0.55rem, 0.9vw, 0.75rem)' }}
            >
              {project.tech}
            </span>
          </div>

          {/* Center: project name */}
          <h3
            className="text-[#D7E2EA] font-black uppercase tracking-tight leading-none text-center flex-1 px-2"
            style={{ fontSize: 'clamp(1rem, 3vw, 3rem)' }}
          >
            {project.name}
          </h3>

          {/* Right: button + year */}
          <div className="flex flex-col gap-2 items-end flex-shrink-0">
            <LiveProjectButton href={project.github} />
            <span
              className="text-[#D7E2EA]/40 font-mono text-right"
              style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.8rem)' }}
            >
              {project.year}
            </span>
          </div>
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0 overflow-hidden">
          {/* Left column — 40% wide, two stacked images */}
          <div
            className="flex flex-col gap-3 sm:gap-4 min-h-0 overflow-hidden"
            style={{ width: '40%' }}
          >
            <img
              src={project.col1[0]}
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] flex-1 min-h-0"
              loading="lazy"
            />
            <img
              src={project.col1[1]}
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] min-h-0"
              style={{ flex: '1.4 1 0' }}
              loading="lazy"
            />
          </div>

          {/* Right column — 60% wide, one tall image */}
          <div className="flex-1 min-h-0 overflow-hidden">
            <img
              src={project.col2}
              alt={`${project.name} main preview`}
              className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
                 -mt-10 sm:-mt-12 md:-mt-14 relative z-10
                 px-5 sm:px-8 md:px-10
                 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Stacking cards */}
      <div ref={containerRef}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={index}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
