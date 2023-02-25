import { useEffect, useState } from "react";

type Props = {
  indexCurrentQuestion: number;
  setIndexCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  indexLastQuestion: number;
};

const QuestionNavigation = ({
  indexCurrentQuestion,
  setIndexCurrentQuestion,
  indexLastQuestion,
}: Props) => {
  const [previousDisabled, setPreviousDisabled] = useState<boolean>(false)
  const [nextDisabled, setNextDisabled] = useState<boolean>(false)

  const handlePreviousQuestion = () => {
    setIndexCurrentQuestion((indexCurrentQuestion) => indexCurrentQuestion - 1);
    setNextDisabled(false)
  };

  const handleNextQuestion = () => {
    setIndexCurrentQuestion((indexCurrentQuestion) => indexCurrentQuestion + 1);
    setPreviousDisabled(false)
  };

  useEffect(() => {
    if (indexCurrentQuestion === indexLastQuestion) {
      setNextDisabled(true)
    }
    if (indexCurrentQuestion === 0 ) {
      setPreviousDisabled(true)
    }
  }, [indexCurrentQuestion, indexLastQuestion])

  return (
    <div className="flex flex-col gap-1">
      <div className="text-center font-light text-sm">
        Question {indexCurrentQuestion + 1} of {indexLastQuestion + 1}
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => handlePreviousQuestion()}
          className="rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm disabled:bg-indigo-50 disabled:text-gray-400"
          disabled={previousDisabled}
        >
          Previous
        </button>
        <button
          onClick={() => handleNextQuestion()}
          className="rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm disabled:bg-indigo-50 disabled:text-gray-400 "
          disabled={nextDisabled}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionNavigation;
