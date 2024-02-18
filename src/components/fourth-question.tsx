import { HelpCircle, ArrowBigRight } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import Swal from 'sweetalert2'

interface FourthQuestionParams {
  sequence: number,
  setSequence: (number: number) => void,
  fourthAnswers: string[],
  setFourthAnswers: (answer: string[]) => void,
}

export function FourthQuestion({ sequence, setSequence, fourthAnswers, setFourthAnswers }: FourthQuestionParams) {
  const [shouldShowStopMessage, setShouldShowStopMessage] = useState(false)
  const [fourthAnswerString, setFourthAnswerString] = useState('')

  function handleAddSequence() {
    setSequence(sequence + 1)
  }

  function handleGetOtherFourthAnswer(getOther: boolean) {
    if (getOther) {
      setShouldShowStopMessage(false)
    } else {
      setShouldShowStopMessage(false)
      handleAddSequence()
    }
  }

  function handleFourthAnswer() {
    if (fourthAnswerString !== '') {
      setFourthAnswers([...fourthAnswers, fourthAnswerString])
      setShouldShowStopMessage(!shouldShowStopMessage)

      Swal.fire({
        title: 'Muito bem!',
        text: `Vejo que deseja aprender ${fourthAnswerString}. Boa sorte em seus estudos!`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })

      setFourthAnswerString('')
    } else {
      toast.warning('Escreva o nome da tecnologia para avançar no quiz.')
    }
  }

  return (
    <div className='w-full p-4 rounded-md space-y-8 bg-white'>
      {
        !shouldShowStopMessage ? (
          <>
            <div className="flex flex-row space-x-2">
              <HelpCircle className="text-slate-900" />
              <p className="text-xl text-slate-900">Qual outra tecnologia que você gostaria de aprender? (Responda apenas uma)</p>
            </div>

            <div className="w-full flex flex-row items-center justify-center space-x-2">
              <input
                className='w-5/6 p-1.5 outline-none border-2 border-slate-900 text-slate-900' placeholder='Digite aqui...'
                value={fourthAnswerString}
                onChange={(e) => setFourthAnswerString(e.target.value)}
              />
              <button
                className="bg-slate-900 text-slate-50 w-1/6 h-10 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900 rounded-sm flex justify-center items-center"
                onClick={() => handleFourthAnswer()}
              >
                <ArrowBigRight />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row space-x-2">
              <HelpCircle className="text-slate-900" />
              <p className="text-xl text-slate-900">Tem mais alguma tecnologia que você gostaria de aprender?</p>
            </div>

            <div className="w-full flex flex-row items-center justify-center space-x-2">
              <button
                className="bg-slate-900 text-slate-50 w-1/2 h-10 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900 rounded-sm"
                onClick={() => handleGetOtherFourthAnswer(true)}
              >
                Sim
              </button>

              <button
                className="bg-slate-900 text-slate-50 w-1/2 h-10 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900 rounded-sm"
                onClick={() => handleGetOtherFourthAnswer(false)}
              >
                Nao
              </button>
            </div>
          </>
        )
      }
    </div>
  )
}