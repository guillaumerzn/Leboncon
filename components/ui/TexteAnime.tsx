'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface AnimatedTitleProps {
  text: string
  className?: string
}

export default function TexteAnime({ text, className = '' }: AnimatedTitleProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <h1 className={`font-bold text-3xl ${className}`} aria-label={text}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-0.5 h-6 bg-current ml-1 align-middle"
        aria-hidden="true"
      />
    </h1>
  )
}

