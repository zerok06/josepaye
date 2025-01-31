import React from 'react'
import type { QuizType } from './QuizItem'
import QuizItem from './QuizItem'

interface Props {
  title: string
  desc: string
  questions: QuizType[]
}
const QuizPost: React.FC<Props> = ({ title, desc, questions }) => {
  return (
    <section className="w-full py-6 bg-[hsl(256,85%,57%,0.2)] px-8 border border-primary-200 rounded-3xl not-prose relative">
      <img
        src="/assets/logos/logo_black.svg"
        alt=""
        className="absolute top-10 right-10 rotate-[15deg] size-40 z-[-1] opacity-10"
      />
      <h4 className="text-2xl mb-3 md:text-3xl font-semibold">{title}</h4>
      <p className="text-black/50">{desc}</p>
      {questions.map((question, index) => (
        <QuizItem key={index} {...question} />
      ))}
    </section>
  )
}

export default QuizPost
