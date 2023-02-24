import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import QuestionSetCard from "@/components/shared/QuestionSetCard";
import FieldTitle from "@/components/shared/FieldTitle";

const Home = () => {
  const questionSets = useSelector(
    (state: RootState) => state.questionSets.value
  );

  return (
    <section id="home">
      <div className="w-full bg-white">
        <div className="w-5/6 mx-auto max-w-5xl">
          <FieldTitle>Common Interview Questions</FieldTitle>
        </div>
      </div>
      <div className="w-full items-center justify-center bg-indigo-50 py-12">
        <div className="mx-auto w-5/6 max-w-5xl">
          <div className="py-6">
            <div className="border-indigo-900/50 border-b-2">
              Question Sets
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-">
            {questionSets.map((questionSet) => {
              return <QuestionSetCard key={questionSet.id} questionSet={questionSet} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
