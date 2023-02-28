import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useState } from "react";
import FieldTitle from "@/components/shared/FieldTitle";
import NewCustomSetForm from "@/pages/CustomSet/NewCustomSetForm";
import QuestionSetCard from "@/components/shared/QuestionSetCard";

type Props = {};

const CustomSet = (props: Props) => {
  const questionSets = useSelector((state: RootState) => state.questionSets);

  const [displayFavorites, setDisplayFavorites] = useState<boolean>(false);

  return (
    <section id="customSets">
      <div className="w-full bg-white">
        <div className="mx-auto w-5/6 max-w-5xl">
          <FieldTitle>Manage Custom Sets</FieldTitle>
        </div>
      </div>
      <div className="w-full items-center justify-center bg-indigo-50 py-12">
        <div className="mx-auto w-5/6 max-w-5xl">
          <div className="flex gap-14 py-6">
            <div className="border-b-2 border-indigo-900/50">
              New Custom Set
            </div>
            <button
              onClick={() => setDisplayFavorites((prevState) => !prevState)}
            >
              Existing Custom Sets
            </button>
          </div>
          <NewCustomSetForm />
        </div>
      </div>

      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayFavorites
              ? questionSets.questionSets.map((set) => {
                  if (set.isFavorite && set.isCustom)
                    return <QuestionSetCard key={set.id} questionSet={set} />;
                })
              : questionSets.questionSets.map((set) => {
                if (set.isCustom)
                  return <QuestionSetCard key={set.id} questionSet={set} />;
                })}
          </div> */}
    </section>
  );
};

export default CustomSet;
