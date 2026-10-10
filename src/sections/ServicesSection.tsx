import FadeIn from '../components/FadeIn'

const services = [
  {
    num: '01',
    name: 'Mobile Development',
    desc: 'Cross-platform mobile apps built with Flutter & Dart, delivering native-quality performance and beautiful UI for both Android and iOS.',
  },
  {
    num: '02',
    name: 'Frontend Development',
    desc: 'Modern, responsive web interfaces with React, TypeScript, and Next.js — pixel-perfect, fast, and conversion-focused.',
  },
  {
    num: '03',
    name: 'Backend Engineering',
    desc: 'Scalable REST APIs and server-side systems with Laravel, Node.js, and PHP, designed for performance and long-term maintainability.',
  },
  {
    num: '04',
    name: 'Machine Learning & AI',
    desc: 'AI-powered solutions from computer vision to data pipelines, built with Python, PyTorch, and Scikit-Learn to solve real-world problems.',
  },
  {
    num: '05',
    name: 'Full-Stack Web Apps',
    desc: 'End-to-end web application development combining clean frontend design with robust backend architecture for complete digital products.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
                 px-5 sm:px-8 md:px-10
                 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center
                     mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      {/* Service list */}
      <ul className="max-w-5xl mx-auto">
        {services.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={30}>
            <li
              className="flex items-center gap-6
                         py-8 sm:py-10 md:py-12
                         border-t border-[rgba(12,12,12,0.15)]
                         last:border-b last:border-[rgba(12,12,12,0.15)]"
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                aria-hidden="true"
              >
                {svc.num}
              </span>

              {/* Name + Description */}
              <div className="flex flex-col gap-2">
                <span
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {svc.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {svc.desc}
                </span>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>
    </section>
  )
}
