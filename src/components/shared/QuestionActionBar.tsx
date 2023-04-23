import { toggleFavoriteQuestionSet } from "@/features/customQuestionSets/customQuestionSetsSlice";
import { toggleFavoriteHireMeQuestionSet } from "@/features/hireMeQuestionSets/hireMeQuestionSetsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type Props = {
  isCustom?: boolean;
  isFavorite: boolean;
  questionCount: number;
  questionSetId: string;
};

const QuestionActionBar = ({
  isCustom,
  isFavorite,
  questionCount,
  questionSetId,
}: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStartClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    navigate(`mock-interview/${questionSetId}`);
  };

  const handleFavoriteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    questionSetId.startsWith("cus-")
      ? dispatch(toggleFavoriteQuestionSet(questionSetId))
      : dispatch(toggleFavoriteHireMeQuestionSet(questionSetId));
  };

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    navigate(`custom-set/edit/${questionSetId}`);
  }

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <button onClick={(e) => handleStartClick(e)}>Start</button>
      <button>{questionCount}</button>
      <button onClick={(e) => handleFavoriteClick(e)}>Favorite</button>
      {isCustom && <button onClick={(e) => handleEditClick(e)}>Edit</button>}
    </div>
  );
};

export default QuestionActionBar;
