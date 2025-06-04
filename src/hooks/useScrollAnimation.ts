import { useEffect, useState, useRef } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

interface ScrollAnimationReturn {
  isVisible: boolean
  elementRef: React.RefObject<HTMLElement | null>
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}): ScrollAnimationReturn => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { isVisible, elementRef }
}

interface ParallaxReturn {
  offset: number
  elementRef: React.RefObject<HTMLElement | null>
}

export const useParallax = (speed: number = 0.5): ParallaxReturn => {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = (): void => {
      if (!elementRef.current) return
      
      const rect = elementRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setOffset(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { offset, elementRef }
}

interface SmoothScrollReturn {
  scrollToElement: (elementId: string) => void
  scrollToTop: () => void
}

export const useSmoothScroll = (): SmoothScrollReturn => {
  const scrollToElement = (elementId: string): void => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return { scrollToElement, scrollToTop }
} 