import { useNavigate } from "react-router-dom";
import { QuestionSet } from "./types";

type Props = {
  questionSet: QuestionSet;
};

const QuestionSetCard = ({ questionSet }: Props) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`mock-interview/${questionSet.id}`)
  }

  return (
    <article key={questionSet.id} onClick={handleCardClick}>
      <div className="rounded-lg border-[1px] border-stone-900 px-4 py-2">
        <div className="flex w-full items-center justify-evenly">
          {/* Preview button */}
          <div className="flex items-center justify-center">
            <button className="rounded-lg bg-orange-500 px-4 py-2">
              Preview
            </button>
          </div>
          {/* Question count */}
          <div className="flex items-center justify-center rounded-lg bg-slate-400 px-4 py-2">
            <p>{questionSet.questions.length} Questions</p>
          </div>
          {/* Like icon */}
          <div className="flex items-center justify-center">*</div>
        </div>
        <div className="flex items-center justify-center">
          <h3>{questionSet.title}</h3>
        </div>
        <div className="flex items-center justify-center">
          <p>Category: {questionSet.category}</p>
        </div>
        {/* {questionSet.questions.map((question) => {
          return <p key={question.id}>{question.question}</p>;
        })} */}
      </div>
    </article>
  );
};

export default QuestionSetCard;
