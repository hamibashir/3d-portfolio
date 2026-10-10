import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const MOON_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png'
const P59_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png'
const LEGO_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png'
const GROUP_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png'

const ABOUT_TEXT =
  "With 1+ years of experience in software engineering, I focus on mobile development, full-stack web applications, and backend systems. I love transforming complex problems into clean, intuitive applications and truly enjoy working with businesses that aim to stand out. Let's build something incredible together!"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center
                 px-5 sm:px-8 md:px-10 py-20"
    >
      {/* ── Corner decorative images ────────────────── */}

      {/* Top-left: Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]
                   w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img src={MOON_URL} alt="Moon icon" className="w-full h-auto" />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]
                   w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
      >
        <img src={P59_URL} alt="3D object" className="w-full h-auto" />
      </FadeIn>

      {/* Top-right: Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]
                   w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img src={LEGO_URL} alt="Lego icon" className="w-full h-auto" />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]
                   w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
      >
        <img src={GROUP_URL} alt="3D group" className="w-full h-auto" />
      </FadeIn>

      {/* ── Center content ──────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated paragraph */}
        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* CTA */}
        <ContactButton />
      </div>
    </section>
  )
}
