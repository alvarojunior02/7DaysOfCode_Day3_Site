import { HelpCircle } from 'lucide-react'

interface SecondQuestionParams {
  sequence: number,
  setSequence: (number: number) => void,
  firstAnswer: string,
  setSecondAnswer: (answer: string) => void,
}

export function SecondQuestion({ sequence, setSequence, firstAnswer, setSecondAnswer }: SecondQuestionParams) {
  function handleAddSequence() {
    setSequence(sequence + 1)
  }

  function handleSecondAnswer(answer: string) {
    handleAddSequence()
    setSecondAnswer(answer)
  }

  return (
    <div className='w-full p-4 rounded-md space-y-8 bg-white'>
      {
        firstAnswer === 'front' ? (
          <>
            <div className="flex flex-row space-x-2">
              <HelpCircle className="text-slate-900" />
              <p className="text-xl text-slate-900">Deseja aprender React.js ou Vue.js?</p>
            </div>

            <div className="w-full flex flex-row items-center justify-center space-x-2">
              <button
                className="bg-slate-900 text-slate-50 w-1/2 h-10 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900 rounded-sm"
                onClick={() => handleSecondAnswer('react')}
              >
                React.js
              </button>

              <button
                className="bg-slate-900 text-slate-50 w-1/2 h-10 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900 rounded-sm"
                onClick={() => handleSecondAnswer('vue')}
              >
                Vue.js
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row space-x-2">
              <HelpCircle className="text-slate-900" />
              <p className="text-xl text-slate-900">Deseja aprender C# ou Java?</p>
            </div>

            <div className="w-full flex flex-row items-center justify-center space-x-2">
              <button
                className="bg-slate-900 text-slate-50 w-1/2 h-10 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900 rounded-sm"
                onClick={() => handleSecondAnswer('c#')}
              >
                C#
              </button>

              <button
                className="bg-slate-900 text-slate-50 w-1/2 h-10 transition-all hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-900 rounded-sm"
                onClick={() => handleSecondAnswer('java')}
              >
                Java
              </button>
            </div>
          </>
        )
      }

    </div>
  )
}