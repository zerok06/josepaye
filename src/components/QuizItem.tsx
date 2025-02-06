import React, { useState } from 'react'

interface OptionType {
  text: string
  correct: boolean
}

export interface QuizType {
  subtitle: string
  quiz: OptionType[]
  code?: string
}

const QuizItem: React.FC<QuizType> = ({ quiz, subtitle, code }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isQuizDisabled, setIsQuizDisabled] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleClick = () => {
    if (selectedOption !== null) {
      const isCorrect = quiz[selectedOption].correct
      setIsCorrect(isCorrect)
      setIsQuizDisabled(true)
    }
  }

  return (
    <section className="my-4 md:my-10">
      <div>
        <p className="text-black mb-2 leading-snug">{subtitle}</p>
        {code && (
          <pre>
            <code>{code}</code>
          </pre>
        )}
      </div>
      <div className="flex flex-col gap-2 select-none">
        {quiz.map((question, index) => (
          <div
            key={index}
            className={`inline-flex items-center hover:bg-white/70 rounded-xl transition duration-300 cursor-pointer ${
              isQuizDisabled ? 'opacity-50 pointer-events-none' : ''
            }`}
          >
            <label
              className="relative flex items-center p-3"
              htmlFor={subtitle + index}
            >
              <input
                name={subtitle}
                type="radio"
                autoComplete="off"
                className="peer h-5 not-prose w-5 cursor-pointer appearance-none rounded-full border border-primary-400 checked:border-primary-500 transition-all"
                id={subtitle + index}
                onChange={() => setSelectedOption(index)}
                disabled={isQuizDisabled}
              />
              <span className="absolute bg-primary-400 size-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
            </label>
            <label
              className="ml-4 text-black/70 cursor-pointer text-base py-1 md:py-3 w-full "
              htmlFor={subtitle + index}
            >
              {question.text}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleClick}
        className={`py-1 md:py-2 px-4 w-full mt-4 hover:bg-white/80 transition duration-300  text-primary-500 rounded-full ${
          isQuizDisabled ? 'opacity-50 pointer-events-none ' : ''
        } ${
          isCorrect == null
            ? 'bg-white'
            : isCorrect
            ? 'bg-green-500 text-white'
            : 'bg-red-500 text-white'
        }`}
        disabled={isQuizDisabled}
      >
        {isCorrect == null
          ? 'Comprobar'
          : isCorrect
          ? '¡Respuesta correcta!'
          : 'Respuesta incorrecta'}
      </button>
    </section>
  )
}

export default QuizItem
