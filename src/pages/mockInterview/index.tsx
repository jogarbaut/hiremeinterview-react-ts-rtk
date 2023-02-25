import { RootState } from "@/app/store";
import FavoriteToggle from "@/components/shared/FavoriteToggle";
import FieldTitle from "@/components/shared/FieldTitle";
import QuestionNavigation from "@/components/shared/QuestionNavigation";
import Timer from "@/components/shared/Timer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

type Props = {};

const MockInterview = (props: Props) => {
  const questionsSets = useSelector(
    (state: RootState) => state.questionSets.value
  );
  const { selectedQuestionSetId } = useParams();
  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState<number>(0);
  const [indexLastQuestion, setIndexLastQuestion] = useState<number>(1);

  const selectedQuestionSet = questionsSets.find(
    (questionsSet) => questionsSet.id === selectedQuestionSetId
  );

  useEffect(() => {
    if (selectedQuestionSet) {
      setIndexLastQuestion(selectedQuestionSet.questions.length - 1);
    }
  }, []);

  return (
    <section id="mockInterview">
      <div className="w-full bg-white">
        <div className="mx-auto w-5/6 max-w-5xl">
          <FieldTitle>Mock Interview</FieldTitle>
        </div>
      </div>
      <div className="mx-auto my-12 w-11/12 max-w-5xl rounded-lg bg-white px-4 py-4 md:py-28 drop-shadow-lg">
        {/* Question text */}
        <div className="mx-auto my-8 w-5/6 text-center text-lg sm:text-xl md:my-16 md:text-3xl lg:text-5xl">
          {selectedQuestionSet &&
            selectedQuestionSet.questions[indexCurrentQuestion].question}
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-evenly">
          {/* Next/Back */}
          <div className="grid place-content-center">
            <QuestionNavigation
              indexCurrentQuestion={indexCurrentQuestion}
              indexLastQuestion={indexLastQuestion}
              setIndexCurrentQuestion={setIndexCurrentQuestion}
            />
          </div>
          {/* Time Display */}
          <div className="grid place-content-center">
            <Timer />
          </div>
          {/* Favorite */}
          <div className="grid place-content-center">
            <FavoriteToggle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockInterview;
