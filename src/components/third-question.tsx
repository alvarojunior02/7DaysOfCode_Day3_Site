import { HelpCircle } from 'lucide-react'
import Swal from 'sweetalert2'

interface ThirdQuestionParams {
  sequence: number,
  setSequence: (number: number) => void,
  firstAnswer: string,
  setThirdAnswer: (answer: string) => void,
}

export function ThirdQuestion({ sequence, setSequence, firstAnswer, setThirdAnswer }: ThirdQuestionParams) {
  function handleAddSequence() {
    setSequence(sequence + 1)
  }

  function handleThirdAnswer(answer: string) {
    handleAddSequence()
    setThirdAnswer(answer)

    if (answer === 'continue') {
      Swal.fire({
        title: 'Muito bem!',
        text: `Vejo que deseja especializar-se em ${firstAnswer === 'front' ? 'Front-end' : 'Back-end'}. Boa sorte em seus estudos!`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    } else {
      Swal.fire({
        title: 'Muito bem!',
        text: `Para tornar-se FullStack, agora você precisa aprender sobre ${firstAnswer === 'back' ? 'Front-end' : 'Back-end'}. Boa sorte em seus estudos!`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
  }

  return (
    <div className='w-full p-4 rounded-md space-y-8 bg-white'>
      <div className="flex flex-row space-x-2">
        <HelpCircle className="text-slate-900" />
        <p className="text-xl text-slate-900">Deseja especializar-se em {firstAnswer === 'front' ? 'Front-end' : 'Back-end'} ou tornar-se FullStack?</p>
      </div>

      <div className="w-full flex flex-row items-center justify-center space-x-2">
        <button
          className="bg-slate-900 text-slate-50 w-1/2 h-10 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900 rounded-sm"
          onClick={() => handleThirdAnswer('continue')}
        >
          {firstAnswer === 'front' ? 'Front-end' : 'Back-end'}
        </button>

        <button
          className="bg-slate-900 text-slate-50 w-1/2 h-10 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900 rounded-sm"
          onClick={() => handleThirdAnswer('fullstack')}
        >
          FullStack
        </button>
      </div>
    </div>
  )
}