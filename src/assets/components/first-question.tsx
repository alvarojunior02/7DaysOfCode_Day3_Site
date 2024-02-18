import { HelpCircle } from 'lucide-react'

interface FirstQuestionParams {
  sequence: number,
  setSequence: (number: number) => void,
  setFirstAnswer: (answer: string) => void,
}

export function FirstQuestion({ sequence, setSequence, setFirstAnswer }: FirstQuestionParams) {
  function handleAddSequence() {
    setSequence(sequence + 1)
  }

  function handleFirstAnswer(answer: string) {
    handleAddSequence()
    setFirstAnswer(answer)
  }

  return (
    <div className='w-full p-4 rounded-md space-y-8 bg-white'>
      <div className="flex flex-row space-x-2">
        <HelpCircle className="text-slate-900" />
        <p className="text-xl text-slate-900">Deseja seguir a área de Front-end ou Back-end?</p>
      </div>

      <div className="w-full flex flex-row items-center justify-center space-x-2">
        <button
          className="bg-slate-900 text-slate-50 w-1/2 h-10 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900 rounded-sm"
          onClick={() => handleFirstAnswer('front')}
        >
          Front-end
        </button>

        <button
          className="bg-slate-900 text-slate-50 w-1/2 h-10 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900 rounded-sm"
          onClick={() => handleFirstAnswer('back')}
        >
          Back-end
        </button>
      </div>
    </div>
  )
}