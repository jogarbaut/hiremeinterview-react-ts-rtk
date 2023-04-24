import Button from "@/components/shared/Button";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
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

  const handleEditClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    navigate(`custom-set/edit/${questionSetId}`);
  };

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Button onClick={(e) => handleStartClick(e)} primary>
        Start
      </Button>
      <Button info>{`${questionCount.toString()} Items`}</Button>
      <Button onClick={(e) => handleFavoriteClick(e)} favorite>
        {isFavorite ? (
          <StarIconSolid className="h-5 w-5 font-light" />
        ) : (
          <StarIconOutline className="h-5 w-5 font-light" />
        )}
      </Button>
      {isCustom && <Button onClick={(e) => handleEditClick(e)} edit>Edit</Button>}
    </div>
  );
};

export default QuestionActionBar;
