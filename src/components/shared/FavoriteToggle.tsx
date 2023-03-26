import { toggleFavoriteQuestionSet } from "@/features/customQuestionSets/customQuestionSetsSlice";
import { toggleFavoriteHireMeQuestionSet } from "@/features/hireMeQuestionSets/hireMeQuestionSetsSlice";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";

type Props = {
  isFavorite: boolean;
  id: string;
};

const FavoriteToggle = ({ isFavorite, id }: Props) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    if(id.startsWith("cus-")){
      dispatch(toggleFavoriteQuestionSet(id));
    } else {
      dispatch(toggleFavoriteHireMeQuestionSet(id))
    }
  };

  return (
    <button
      onClick={(e) => {
        handleToggle();
        e.stopPropagation();
      }}
      type="button"
      className="flex h-auto items-center justify-center rounded-full border-2 border-transparent bg-yellow-200 px-4 py-2 text-sm transition hover:border-2 hover:border-yellow-900/50"
    >
      {isFavorite === false ? (
        <StarIconOutline className="h-5 w-5 font-light" />
      ) : (
        <StarIconSolid className="h-5 w-5 font-light" />
      )}
    </button>
  );
};

export default FavoriteToggle;
