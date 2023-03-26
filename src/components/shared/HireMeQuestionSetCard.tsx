import { useNavigate } from "react-router-dom";
import FavoriteToggle from "./FavoriteToggle";
import { HireMeQuestionSet } from "@/features/hireMeQuestionSets/hireMeQuestionSetsSlice";

type Props = {
  questionSet: HireMeQuestionSet;
};

const HireMeQuestionSetCard = ({ questionSet }: Props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`mock-interview/${questionSet.id}`);
  };

  return (
    <article
      key={questionSet.id}
      onClick={handleCardClick}
      className="min-w-min cursor-pointer rounded-lg border-2 border-transparent bg-slate-100 p-4 drop-shadow-lg transition hover:-translate-y-1 hover:rounded-lg hover:border-2 hover:border-indigo-900/50 hover:bg-white"
    >
      <div className="flex items-center justify-center">
        <div className="my-8">{questionSet.title}</div>
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        {/* Start button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
          className="rounded-full border-2 border-transparent bg-indigo-200 px-4 py-2 text-sm font-light hover:border-2 hover:border-indigo-900/50"
          type="button"
        >
          Start
        </button>
        {/* Question count */}
        <div className="flex cursor-default items-center justify-center rounded-full border-2 border-transparent bg-slate-200 px-4 py-2 text-sm">
          {questionSet.questions.length} Items
        </div>
        {/* Favorite toggle */}
        <FavoriteToggle
          isFavorite={questionSet.isFavorite}
          id={questionSet.id}
        />
      </div>
    </article>
  );
};

export default HireMeQuestionSetCard;
