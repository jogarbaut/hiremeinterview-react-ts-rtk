import { RootState } from "@/app/store";
import FieldTitle from "@/components/shared/FieldTitle";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

type Props = {};

const MockInterview = (props: Props) => {
  useParams;
  const questionsSets = useSelector(
    (state: RootState) => state.questionSets.value
  );

  const { selectedQuestionSetId } = useParams();

  const selectedQuestionSet = questionsSets.find(
    (questionsSet) => questionsSet.id === selectedQuestionSetId
  );

  return (
    <section id="mockInterview">
      <div className="w-full bg-white">
        <div className="w-5/6 mx-auto max-w-5xl">
          <FieldTitle>Mock Interview</FieldTitle>
        </div>
      </div>
      <div className="mx-auto w-5/6 max-w-5xl rounded-lg bg-white my-12 px-4 md:py-28 py-8">
        {/* Question text */}
        <div className="flex items-center justify-center mt-16 mb-32 text-5xl">
          {selectedQuestionSet && selectedQuestionSet.title}
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Time Display */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="font-bold">1:00</div>
            <div className="font-light">Stopwatch | Countdown | Off</div>
          </div>
          {/* Next/Back */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <div className="font-bold">Left</div>
              <div className="font-bold">Random</div>
              <div className="font-bold">Right</div>
            </div>
            <div className="font-light">Question Select</div>
          </div>
          {/* Question count */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <div className="font-bold">1 of 5</div>
            </div>
            <div className="font-light">Question Number</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockInterview;
