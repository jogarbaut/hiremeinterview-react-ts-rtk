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
  const [previousDisabled, setPreviousDisabled] = useState<boolean>(false);
  const [nextDisabled, setNextDisabled] = useState<boolean>(false);

  const handlePreviousQuestion = () => {
    setIndexCurrentQuestion((indexCurrentQuestion) => indexCurrentQuestion - 1);
    setNextDisabled(false);
  };

  const handleNextQuestion = () => {
    setIndexCurrentQuestion((indexCurrentQuestion) => indexCurrentQuestion + 1);
    setPreviousDisabled(false);
  };

  useEffect(() => {
    if (indexCurrentQuestion === indexLastQuestion) {
      setNextDisabled(true);
    }
    if (indexCurrentQuestion === 0) {
      setPreviousDisabled(true);
    }
  }, [indexCurrentQuestion, indexLastQuestion]);

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => handlePreviousQuestion()}
        className="rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm disabled:bg-indigo-50 disabled:text-gray-400"
        disabled={previousDisabled}
      >
        &lt;
      </button>
      <div className="text-center text-sm font-light">
        {indexCurrentQuestion + 1} of {indexLastQuestion + 1}
      </div>
      <button
        onClick={() => handleNextQuestion()}
        className="rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm disabled:bg-indigo-50 disabled:text-gray-400 "
        disabled={nextDisabled}
      >
        &gt;
      </button>
    </div>
  );
};

export default QuestionNavigation;
