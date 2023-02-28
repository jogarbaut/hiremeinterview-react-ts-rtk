import { useNavigate } from "react-router-dom";
import { QuestionSet } from "@/features/questionSets/questionSetSlice";
import FavoriteToggle from "./ToggleFavorite";

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
      className="cursor-pointer rounded-lg border-2 border-transparent bg-slate-100 p-4 drop-shadow-lg transition duration-200 hover:-translate-y-1 hover:rounded-lg hover:border-2 hover:border-indigo-900/50 hover:bg-white"
    >
      <div className="flex items-center justify-start">
        <div className="text-sm font-light">
          {questionSet.isCustom ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`custom-set/edit/${questionSet.id}`)
              }}
            >
              Edit
            </button>
          ) : (
            <div>&nbsp;</div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="my-8 font-medium">{questionSet.title}</div>
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        {/* Preview button */}
        <div className="flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="rounded-full border-2 border-transparent bg-indigo-200 px-4 py-2 text-sm font-light transition hover:border-2 hover:border-indigo-900/50"
          >
            Start
          </button>
        </div>
        {/* Question count */}
        <div className="flex cursor-default items-center justify-center rounded-full border-2 border-transparent bg-slate-200 px-4 py-2 text-sm font-light">
          {questionSet.questions.length} Items
        </div>
        <FavoriteToggle
          isFavorite={questionSet.isFavorite}
          id={questionSet.id}
        />
      </div>
    </article>
  );
};

export default QuestionSetCard;
