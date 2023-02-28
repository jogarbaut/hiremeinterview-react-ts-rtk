import { RootState } from "@/app/store";
import FavoriteToggle from "@/components/shared/ToggleFavorite";
import FieldTitle from "@/components/shared/FieldTitle";
import QuestionNavigation from "@/components/shared/QuestionNavigation";
import Timer from "@/components/shared/Timer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MockInterview = () => {
  const questionsSets = useSelector(
    (state: RootState) => state.questionSets.questionSets
  );
  const { id } = useParams();

  const questionSet = questionsSets.find(
    (questionsSet) => questionsSet.id === id
  );

  if (!questionSet) return <p>Question Set Not Found</p>;

  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState<number>(0);
  const [indexLastQuestion, setIndexLastQuestion] = useState<number>(1);
  const [controlsToggled, setControlsToggled] = useState<boolean>(true);

  useEffect(() => {
    if (questionSet) {
      setIndexLastQuestion(questionSet.questions.length - 1);
    }
  }, []);

  return (
    <section id="mockInterview">
      <div className="w-full bg-white">
        <div className="mx-auto w-5/6 max-w-5xl">
          <FieldTitle>Mock Interview</FieldTitle>
        </div>
      </div>
      <div className="relative w-full h-full">
        <div className="relative w-11/12 bg-white dark:bg-slate-500 mx-auto p-16">
          <div className="grid place-content-end">
            <FavoriteToggle
              isFavorite={questionSet?.isFavorite}
              id={questionSet?.id}
            />
          </div>
          <div className="mx-auto my-8 w-5/6 content-start text-center text-lg sm:text-2xl md:my-16 md:text-3xl lg:text-4xl">
            {questionSet &&
              questionSet.questions[indexCurrentQuestion].question}
          </div>
          <div
            className={`${
              controlsToggled ? "" : "hidden"
            } flex flex-col content-end items-center justify-center gap-4 transition duration-500`}
          >
            <div className="grid place-content-center">
              <Timer />
            </div>
            <div className="w-full">
              <QuestionNavigation
                indexCurrentQuestion={indexCurrentQuestion}
                indexLastQuestion={indexLastQuestion}
                setIndexCurrentQuestion={setIndexCurrentQuestion}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto my-12 flex w-11/12 max-w-5xl flex-col gap-12 rounded-lg bg-white px-4 py-4 drop-shadow-lg md:py-28">

      </div> */}
    </section>
  );
};

export default MockInterview;
