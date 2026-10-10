interface LiveProjectButtonProps {
  href?: string
  className?: string
}

export default function LiveProjectButton({
  href = '#',
  className = '',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA]
        font-medium uppercase tracking-widest text-[#D7E2EA] cursor-pointer
        px-8 py-3 text-sm
        sm:px-10 sm:py-3.5 sm:text-base
        transition-colors duration-200 hover:bg-[#D7E2EA]/10
        ${className}`}
    >
      Live Project
    </a>
  )
}
