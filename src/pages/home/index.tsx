import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import QuestionSetCard from "@/components/shared/QuestionSetCard";
import FieldTitle from "@/components/shared/FieldTitle";
import { useState } from "react";

const Home = () => {
  const questionSets = useSelector((state: RootState) => state.questionSets);

  const [displayFavorites, setDisplayFavorites] = useState<boolean>(false);
  const [displayCustoms, setDisplayCustoms] = useState<boolean>(false);

  return (
    <section id="home">
      <div className="w-full bg-white">
        <div className="mx-auto w-5/6 max-w-5xl">
          <FieldTitle>All Fields</FieldTitle>
        </div>
      </div>
      <div className="w-full items-center justify-center bg-indigo-50 py-12">
        <div className="mx-auto w-5/6 max-w-5xl">
          <div className="py-6 flex gap-14">
            <div className="border-b-2 border-indigo-900/50">Question Sets</div>
            <button
              onClick={() => setDisplayFavorites((prevState) => !prevState)}
            >
              Favorites
            </button>
            <button
              onClick={() => setDisplayCustoms((prevState) => !prevState)}
            >
              Custom
            </button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayFavorites && displayCustoms
              ? questionSets.questionSets.map((set) => {
                  if (set.isFavorite && set.isCustom)
                    return <QuestionSetCard key={set.id} questionSet={set} />;
                })
              : !displayFavorites && displayCustoms
              ? questionSets.questionSets.map((set) => {
                  if (!set.isFavorite && set.isCustom)
                    return <QuestionSetCard key={set.id} questionSet={set} />;
                })
              : displayFavorites && !displayCustoms
              ? questionSets.questionSets.map((set) => {
                  if (set.isFavorite && !set.isCustom)
                    return <QuestionSetCard key={set.id} questionSet={set} />;
                })
              : questionSets.questionSets.map((set) => {
                  return <QuestionSetCard key={set.id} questionSet={set} />;
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
