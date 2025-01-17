import { AnimatePresence, type Variants } from 'motion/react'
import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'

interface Opinion {
  name: string
  title: string
  description: string
  image: string
  job: string
  linkedin: string
}

interface Props {
  opiniones: Opinion[]
}

const SlideOpiniones: React.FC<Props> = ({ opiniones = [] }) => {
  const length = opiniones.length
  const [position, setPosition] = useState(0)
  const handleNext = () => {
    if (position === length - 1) {
      setPosition(0)
    } else {
      const newPosition = position + 1
      setPosition(newPosition)
    }
  }
  const handlePrev = () => {
    if (position === 0) {
      setPosition(length - 1)
    } else {
      const newPosition = position - 1
      setPosition(newPosition)
    }
  }

  if (length === 0) {
    return null
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 7000)
    return () => clearInterval(interval)
  }, [position])

  const variants: Variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 100,
      opacity: 0,
    },
  }

  return (
    <section className=" text-white">
      <div className="max-w-[700px] mx-auto relative">
        <button
          onClick={handlePrev}
          className="absolute top-[calc(50%-20px)] -left-16 border border-white/10 h-10 w-10 bg-primary-900 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
            ></path>
          </svg>
        </button>
        <div className="text-white relative border border-white/20 rounded-2xl backdrop-blur bg-white/5 overflow-hidden">
          <AnimatePresence mode="wait">
            {opiniones[position] && (
              <motion.div key={opiniones[position].name}>
                <div className="p-6 flex gap-6">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut', delay: 0 }}
                    src={opiniones[position].image}
                    className="aspect-square h-[200px] bg-white object-top object-cover rounded-lg"
                    alt={opiniones[position].name}
                  />
                  <div className="flex flex-col justify-center gap-3">
                    <motion.h3
                      variants={variants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                        delay: 0,
                      }}
                      className="font-inter font-medium text-2xl"
                    >
                      {opiniones[position].name}
                    </motion.h3>
                    <motion.p
                      variants={variants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                        delay: 0.05,
                      }}
                      className="italic text-white/70 text-balance"
                    >
                      "{opiniones[position].description}"
                    </motion.p>
                    <motion.div
                      className="flex justify-between text-sm"
                      variants={variants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                        delay: 0.1,
                      }}
                    >
                      <p className="text-white/70">
                        {opiniones[position].title}
                      </p>
                      <p>{opiniones[position].job}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          onClick={handleNext}
          className="absolute top-[calc(50%-20px)] -right-16 rotate-180 border border-white/10 h-10 w-10 bg-primary-900 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default SlideOpiniones
