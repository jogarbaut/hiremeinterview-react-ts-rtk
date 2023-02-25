import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

type Props = {};

const FavoriteToggle = (props: Props) => {
  return (
    <div className="flex h-auto items-center justify-center rounded-full border-2 border-transparent bg-yellow-200 px-4 py-2 text-sm transition hover:border-2 hover:border-yellow-900/50">
      <StarIconOutline className="h-5 w-5 font-light" />
    </div>
  );
};

export default FavoriteToggle;
