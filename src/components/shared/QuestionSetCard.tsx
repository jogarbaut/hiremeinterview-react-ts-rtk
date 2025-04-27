import { DefaultQuestionSet } from '@/features/defaultQuestionSets/defaultQuestionSetsTypes';
import { UserQuestionSet } from '@/features/userQuestionSets/userQuestionSetsTypes';
import { useNavigate } from 'react-router-dom';
import QuestionActionBar from './QuestionActionBar';

type Props = {
    questionSet: DefaultQuestionSet | UserQuestionSet;
};

const QuestionSetCard = ({ questionSet }: Props) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`mock-interview/${questionSet.id}`);
    };

    const renderedActionBar = questionSet.isCustom ? (
        <QuestionActionBar
            isCustom
            questionCount={questionSet.questions.length}
            questionSetId={questionSet.id}
        />
    ) : (
        <QuestionActionBar
            questionCount={questionSet.questions.length}
            questionSetId={questionSet.id}
        />
    );

    return (
        <article
            key={questionSet.id}
            onClick={handleCardClick}
            className="min-w-min cursor-pointer rounded-lg border-2 border-transparent bg-slate-100 p-4 drop-shadow-lg transition hover:-translate-y-1 hover:rounded-lg hover:border-2 hover:border-indigo-900/50 hover:bg-white"
        >
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="my-8">{questionSet.title}</div>
                {renderedActionBar}
            </div>
        </article>
    );
};

export default QuestionSetCard;
