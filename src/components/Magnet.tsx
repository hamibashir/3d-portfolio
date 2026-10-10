import { useEffect, useRef, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const inner = innerRef.current
    if (!wrapper || !inner) return

    function onMouseMove(e: MouseEvent) {
      const rect = wrapper!.getBoundingClientRect()

      const nearLeft   = e.clientX >= rect.left   - padding
      const nearRight  = e.clientX <= rect.right  + padding
      const nearTop    = e.clientY >= rect.top    - padding
      const nearBottom = e.clientY <= rect.bottom + padding

      if (nearLeft && nearRight && nearTop && nearBottom) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top  + rect.height / 2
        const dx = (e.clientX - centerX) / strength
        const dy = (e.clientY - centerY) / strength
        inner!.style.transition = activeTransition
        inner!.style.transform  = `translate3d(${dx}px, ${dy}px, 0)`
      } else {
        inner!.style.transition = inactiveTransition
        inner!.style.transform  = 'translate3d(0, 0, 0)'
      }
    }

    function onMouseLeave() {
      inner!.style.transition = inactiveTransition
      inner!.style.transform  = 'translate3d(0, 0, 0)'
    }

    window.addEventListener('mousemove', onMouseMove)
    wrapper.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      wrapper.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [padding, strength, activeTransition, inactiveTransition])

  return (
    <div ref={wrapperRef} className={className}>
      <div ref={innerRef} style={{ willChange: 'transform' }}>
        {children}
      </div>
    </div>
  )
}
