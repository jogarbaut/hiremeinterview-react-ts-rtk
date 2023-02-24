import { QuestionSet } from "../shared/types"

type Props = {
  questionSet: QuestionSet
}

const QuestionSetCard = ({ questionSet }: Props) => {
  return (
    <article key={questionSet.id}>
      <h2>Category: {questionSet.category}</h2>
      <p>Set Title: {questionSet.title}</p>
      {
        questionSet.questions.map(question => {
          return <p key={question.id}>{question.question}</p>
        })
      }
    </article>
  )
}

export default QuestionSetCard