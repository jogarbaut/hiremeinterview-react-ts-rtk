import { ReactNode } from 'react';

/**
 * QuestionSetCardBase Component
 * ------------------------------
 * A flexible and reusable card layout for displaying question sets.
 * Supports dynamic action buttons via children (Start, Favorite, Edit, etc.).
 *
 * Props:
 * @param id - Unique identifier for the question set
 * @param title - Title of the question set to display
 * @param onCardClick - Function to navigate to the start page when the card is clicked
 * @param children - (Optional) Action buttons or additional controls to render inside the card
 *
 * Usage:
 * - Used by DefaultQuestionSetCard and UserQuestionSetCard
 * - Parent components provide any action buttons through children
 */

type Props = {
    id: string;
    title: string;
    questionCount: number;
    onCardClick: (id: string) => void;
    children?: ReactNode;
};

const QuestionSetCardBase = ({ id, title, onCardClick, children }: Props) => {
    const handleClick = () => {
        onCardClick(id);
    };

    return (
        <div
            onClick={handleClick}
            className="min-w-min cursor-pointer rounded-lg border-2 border-transparent bg-slate-100 p-4 drop-shadow-lg transition hover:-translate-y-1 hover:border-indigo-900/50 hover:bg-white"
        >
            <div className="my-8 flex items-center justify-center">{title}</div>
            <div className="flex w-full items-center justify-center gap-2">
                {/* Slot for actions like Start, Favorite, Edit */}
                {children}
            </div>
        </div>
    );
};

export default QuestionSetCardBase;
