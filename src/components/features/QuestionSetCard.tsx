import { QuestionSet } from '@/features/questionSets/questionSetsTypes';
import Button from '@/components/shared/Button';
import FavoriteToggle from './FavoriteToggle';
import { QuestionSetCardBase } from '../shared';
import { isUserSet } from '@/features/questionSets/utils';

type Props = {
    questionSet: QuestionSet;
    handleStart: (id: string) => void;
    handleEdit: (id: string) => void;
};

const QuestionSetCard = ({ questionSet, handleStart, handleEdit }: Props) => {
    const isUserDefined = isUserSet(questionSet);

    return (
        <QuestionSetCardBase
            id={questionSet.id}
            title={questionSet.title}
            questionCount={questionSet.questions.length}
            onCardClick={handleStart}
        >
            <Button
                primary
                onClick={(e) => {
                    e.stopPropagation();
                    handleStart(questionSet.id);
                }}
            >
                Start
            </Button>

            <Button viewOnly info>
                {questionSet.questions.length} Items
            </Button>

            <FavoriteToggle isFavorite={questionSet.isFavorite} id={questionSet.id} />

            {isUserDefined && (
                <Button
                    edit
                    onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(questionSet.id);
                    }}
                >
                    Edit
                </Button>
            )}
        </QuestionSetCardBase>
    );
};

export default QuestionSetCard;
