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
  const [previousDisabled, setPreviousDisabled] = useState<boolean>(true);
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
      <div className="flex-1">
        <button
          onClick={() => handlePreviousQuestion()}
          className="w-full rounded-lg border-2 border-transparent hover:border-slate-400 bg-slate-200 py-1.5 px-5 text-sm disabled:bg-slate-50 disabled:text-secondary transition duration-200 disabled:border-none"
          disabled={previousDisabled}
        >
          &lt;
        </button>
      </div>
      <div className="flex-1">
        <div className="w-full text-center text-sm font-light">
          {indexCurrentQuestion + 1} of {indexLastQuestion + 1}
        </div>
      </div>
      <div className="flex-1">
        <button
          onClick={() => handleNextQuestion()}
          className="w-full rounded-lg border-2 border-transparent hover:border-slate-400 bg-slate-200 py-1.5 px-5 text-sm disabled:bg-slate-50 disabled:text-secondary transition duration-200 disabled:border-none"
          disabled={nextDisabled}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default QuestionNavigation;
