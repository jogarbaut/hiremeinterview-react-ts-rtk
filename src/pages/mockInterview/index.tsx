import { RootState } from "@/app/store"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

type Props = {}

const MockInterview = (props: Props) => {
  useParams
  const questionsSets = useSelector(
    (state: RootState) => state.questionSets.value
  )

  const { selectedQuestionSetId } = useParams()

  const selectedQuestionSet = questionsSets.find(questionsSet => questionsSet.id === selectedQuestionSetId)

  return (
    <section>
      {/* Main question display */}
      <div className="flex justify-center items-center">
      {selectedQuestionSet && selectedQuestionSet.title}
      </div>
      {/* Timer */}
      <div className="w-5/6 mx-auto">
        {/* Time Display */}
        <div className="font-bold">1:00</div>
        <div className="font-light">Stopwatch | Countdown</div>
      </div>
    </section>
  )
}

export default MockInterview