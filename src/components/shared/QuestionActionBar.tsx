import Button from '@/components/shared/Button';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { toggleFavoriteUserQuestionSet } from '@/features/userQuestionSets/userQuestionSetsSlice';
import { toggleFavoriteDefaultQuestionSet } from '@/features/defaultQuestionSets/defaultQuestionSetsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/app/store';
import { selectUserQuestionSetById } from '@/features/userQuestionSets/userQuestionSetsSelectors';
import { selectDefaultQuestionSetById } from '@/features/defaultQuestionSets/defaultQuestionSetsSelectors';

type Props = {
    isCustom?: boolean;
    questionCount: number;
    questionSetId: string;
};

const QuestionActionBar = ({ isCustom, questionCount, questionSetId }: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Dynamically pull fresh isFavorite status from Redux
    const isFavorite = useSelector((state: RootState) => {
        if (isCustom) {
            const userSet = selectUserQuestionSetById(state, questionSetId);
            return userSet?.isFavorite ?? false;
        } else {
            const defaultSet = selectDefaultQuestionSetById(state, questionSetId);
            return defaultSet?.isFavorite ?? false;
        }
    });

    const handleStartClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        navigate(`mock-interview/${questionSetId}`);
    };

    const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        questionSetId.startsWith('cus-')
            ? dispatch(toggleFavoriteUserQuestionSet(questionSetId))
            : dispatch(toggleFavoriteDefaultQuestionSet(questionSetId));
    };

    const handleEditClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        navigate(`user-set/edit/${questionSetId}`);
    };

    return (
        <div className="flex w-full items-center justify-center gap-2">
            <Button onClick={(e) => handleStartClick(e)} primary>
                Start
            </Button>
            <Button info>{`${questionCount.toString()} Items`}</Button>
            <Button onClick={(e) => handleFavoriteClick(e)} favorite>
                {isFavorite ? (
                    <StarIconSolid className="h-5 w-5 font-light" />
                ) : (
                    <StarIconOutline className="h-5 w-5 font-light" />
                )}
            </Button>
            {isCustom && (
                <Button onClick={(e) => handleEditClick(e)} edit>
                    Edit
                </Button>
            )}
        </div>
    );
};

export default QuestionActionBar;
