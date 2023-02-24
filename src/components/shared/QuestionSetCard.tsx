import { useNavigate } from "react-router-dom";
import { QuestionSet } from "./types";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

type Props = {
  questionSet: QuestionSet;
};

const QuestionSetCard = ({ questionSet }: Props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`mock-interview/${questionSet.id}`);
  };

  return (
    <article
      key={questionSet.id}
      onClick={handleCardClick}
      className="cursor-pointer rounded-lg border-2 border-transparent bg-slate-100 p-4 drop-shadow-lg hover:rounded-lg hover:border-2 hover:border-indigo-900/50 transition hover:bg-white"
    >
      <div className="flex items-center justify-center">
        <div className="my-8 font-medium">{questionSet.title}</div>
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        {/* Preview button */}
        <div className="flex items-center justify-center">
          <button
            onClick={(e) => {
              console.log("hello");
              e.stopPropagation();
            }}
            className="rounded-full border-2 border-transparent bg-indigo-200 px-4 py-2 text-sm font-light hover:border-2 hover:border-indigo-900/50 transition"
          >
            Preview
          </button>
        </div>
        {/* Question count */}
        <div
          className="flex cursor-default items-center justify-center rounded-full border-2 border-transparent bg-slate-200 px-4 py-2 text-sm font-light"
          onClick={(e) => e.stopPropagation()}
        >
          {questionSet.questions.length} Items
        </div>
        {/* Like icon */}
        <div
          onClick={(e) => {
            console.log("favorited");
            e.stopPropagation();
          }}
          className="flex h-auto items-center justify-center rounded-full border-2 border-transparent bg-yellow-200 px-4 py-2 text-sm hover:border-2 hover:border-yellow-900/50 transition"
        >
          <StarIconOutline className="h-5 w-5 font-light" />
        </div>
      </div>

      {/* {questionSet.questions.map((question) => {
          return <p key={question.id}>{question.question}</p>;
        })} */}
    </article>
  );
};

export default QuestionSetCard;
