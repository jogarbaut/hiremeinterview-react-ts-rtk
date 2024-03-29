import { RootState } from "@/app/store";
import FavoriteToggle from "@/components/shared/FavoriteToggle";
import QuestionNavigation from "@/components/shared/QuestionNavigation";
import Timer from "@/components/shared/Timer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "@/components/shared/Header";
import CountDownTimer from "@/components/shared/CountDownTimer";
import Button from "@/components/shared/Button";

const MockInterview = () => {
  const { id } = useParams();
  let questionSets;
  if (id?.startsWith("cus-")) {
    questionSets = useSelector(
      (state: RootState) => state.customQuestionSets.customQuestionSets
    );
  } else {
    questionSets = useSelector(
      (state: RootState) => state.hireMeQuestionSets.hireMeQuestionSets
    );
  }

  const questionSet = questionSets.find(
    (questionsSet) => questionsSet.id === id
  );

  if (!questionSet) return <p>Question Set Not Found</p>;

  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState<number>(0);
  const [indexLastQuestion, setIndexLastQuestion] = useState<number>(1);
  const [controlsToggled, setControlsToggled] = useState<boolean>(true);
  const [displayTimer, setDisplayTimer] = useState<boolean>(false);

  const currentQuestion = questionSet.questions[indexCurrentQuestion].question;

  useEffect(() => {
    if (questionSet) {
      setIndexLastQuestion(questionSet.questions.length - 1);
    }
  }, []);

  const handleTimerToggleClick = () => {
    setDisplayTimer((previousState) => !previousState);
  };

  return (
    <section id="mockInterview" className="flex h-full flex-col">
      <Header>Mock Interview</Header>
      <div className="flex w-full flex-grow items-center justify-center bg-indigo-50">
        <div className="mx-auto w-5/6 max-w-5xl">
          <div className="my-12 flex w-full flex-col gap-12 rounded-lg bg-white p-12">
            <div className="flex w-full items-center justify-between">
              <Button secondary onClick={() => handleTimerToggleClick()}>
                {displayTimer ? "Timer" : "Stopwatch"}
              </Button>
              <FavoriteToggle
                isFavorite={questionSet?.isFavorite}
                id={questionSet?.id}
              />
            </div>
            <div className="flex items-center justify-center text-center text-lg sm:text-2xl md:my-16 md:text-3xl lg:text-4xl">
              {questionSet && currentQuestion}
            </div>
            <div
              className={`${
                controlsToggled ? "" : "hidden"
              } flex flex-col items-center justify-center gap-4 transition duration-500`}
            >
              <div className="mx-auto w-full bg-">
                {displayTimer ? (
                  <Timer />
                ) : (
                  <CountDownTimer initialMinutes={2} initialSeconds={0} />
                )}
              </div>
              <div className="mx-auto w-full">
                <QuestionNavigation
                  indexCurrentQuestion={indexCurrentQuestion}
                  indexLastQuestion={indexLastQuestion}
                  setIndexCurrentQuestion={setIndexCurrentQuestion}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockInterview;
