import { Pagination, Button } from '@/components/shared';
import { QuestionSet } from '@/features/questionSets/questionSetsTypes';
import QuestionSetCard from './QuestionSetCard';

type Props = {
    title: string;
    sets: QuestionSet[];
    displayFavorites: boolean;
    toggleFavorites: () => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    itemsPerPage: number;
    showNewButton?: boolean;
    handleStart: (id: string) => void;
    handleEdit: (id: string) => void;
    handleCreateNewSet: () => void;
};

const ITEMS_PER_PAGE = 4;

const Section = ({
    title,
    sets,
    displayFavorites,
    toggleFavorites,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    showNewButton = false,
    handleStart,
    handleEdit,
    handleCreateNewSet,
}: Props) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSets = sets.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="mx-auto flex w-5/6 max-w-5xl flex-col gap-12 py-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row">
                <div className="flex items-center justify-center gap-6 underline underline-offset-2 md:justify-start">
                    <h2>{title}</h2>
                </div>
                <div className="flex items-center justify-center gap-3 md:justify-end">
                    <Button info onClick={toggleFavorites}>
                        {displayFavorites ? 'Show All' : 'Show Favorites'}
                    </Button>
                    {showNewButton && (
                        <Button edit onClick={handleCreateNewSet}>
                            New Set
                        </Button>
                    )}
                </div>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-2">
                {currentSets.map((set) => (
                    <QuestionSetCard
                        key={set.id}
                        questionSet={set}
                        handleStart={handleStart}
                        handleEdit={handleEdit}
                    />
                ))}
            </div>

            {/* Pagination */}
            {sets.length > itemsPerPage && (
                <div className="flex items-center justify-center py-6 md:justify-end">
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={sets.length}
                        paginate={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
            )}
        </div>
    );
};

export default Section;
