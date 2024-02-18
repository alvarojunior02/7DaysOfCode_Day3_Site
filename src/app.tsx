/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { FirstQuestion } from "./assets/components/first-question"
import { SecondQuestion } from "./assets/components/second-question"
import { ThirdQuestion } from "./assets/components/third-question"
import { FourthQuestion } from "./assets/components/fourth-question"
import { CheckCircle } from 'lucide-react'

export function App() {
  const [sequence, setSequence] = useState(1)
  const [firstAnswer, setFirstAnswer] = useState('')
  const [secondAnswer, setSecondAnswer] = useState('')
  const [thirdAnswer, setThirdAnswer] = useState('')
  const [fourthAnswers, setFourthAnswers] = useState<string[]>([])

  return (
    <div className='max-w-xl w-screen space-y-4 flex flex-col items-center'>
      <h1 className="font-bold text-2xl">Quiz de Perguntas</h1>
      {
        sequence === 1 ? (
          <FirstQuestion sequence={sequence} setSequence={setSequence} setFirstAnswer={setFirstAnswer} />
        ) : sequence === 2 ? (
          <SecondQuestion sequence={sequence} setSequence={setSequence} firstAnswer={firstAnswer} setSecondAnswer={setSecondAnswer} />
        ) : sequence === 3 ? (
          <ThirdQuestion sequence={sequence} setSequence={setSequence} firstAnswer={firstAnswer} setThirdAnswer={setThirdAnswer} />
        ) : sequence === 4 ? (
          <FourthQuestion sequence={sequence} setSequence={setSequence} fourthAnswers={fourthAnswers} setFourthAnswers={setFourthAnswers} />
        ) : (
          <div className='w-full p-4 rounded-md space-y-8 bg-white'>
            <div className="flex flex-row space-x-2">
              <CheckCircle className="text-slate-900" />
              <p className="text-xl text-slate-900">Obrigado por participar do Quiz</p>
            </div>

            <div className="w-full flex flex-col items-start justify-center text-md text-slate-900">
              <p className="font-bold">Suas respostas:</p>
              <br />

              <p className="font-semibold">Deseja seguir a área de Front-end ou Back-end?</p>
              <p className="font-regular">R: {firstAnswer === 'front' ? 'Front-end' : 'Back-end'}.</p>
              <br />

              <p className="font-semibold">{firstAnswer === 'front' ? 'Deseja aprender React.js ou Vue.js?' : 'Deseja aprender C# ou Java?'}</p>
              <p className="tont-regular">
                R:
                {
                  secondAnswer === 'react' ? ' React.js' :
                    secondAnswer === 'vue' ? ' Vue.js' :
                      secondAnswer === 'c#' ? ' C#' : ' Java'
                }.
              </p>
              <br />

              <p className="font-semibold"> Deseja especializar-se em {firstAnswer === 'front' ? 'Front-end' : 'Back-end'} ou tornar-se FullStack?</p>
              <p className="font-regular">R: {thirdAnswer === 'continue' ? firstAnswer === 'front' ? ' Front-end' : 'Back-end' : ' FullStack'}.</p>
              <br />

              <p className="font-semibold"> Demais tecnologias que deseja aprender:</p>
              <ul className="font-regular list-disc list-inside">
                {
                  fourthAnswers.map((answer, index) => {
                    return (
                      <li key={index} className="font-regular">{answer}{index === (fourthAnswers.length - 1) ? '.' : ';'}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        )
      }
    </div >
  )
}