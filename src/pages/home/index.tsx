import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import QuestionSetCard from "@/components/shared/QuestionSetCard";

const Home = () => {
  const questionSets = useSelector(
    (state: RootState) => state.questionSets.value
  );

  return (
    <div>
      <h1>Home</h1>
      <div className="grid grid-cols-3 gap-4">
        {questionSets.map((questionSet) => {
          return <QuestionSetCard questionSet={questionSet} />;
        })}
      </div>
    </div>
  );
};

export default Home;
