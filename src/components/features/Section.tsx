import { QuestionSetCardBase, Pagination, Button } from '@/components/shared';
import { FavoriteToggle } from '@/components/features';
import { isUserQuestionSet } from '@/features/questionSets/utils';

type Props = {
    title: string;
    sets: any[];
    displayFavorites: boolean;
    toggleFavorites: () => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    showNewButton?: boolean;
    handleStart: (id: string) => void;
    handleEdit: (id: string) => void;
    handleCreateNewSet?: () => void;
};

const ITEMS_PER_PAGE = 4;

const Section = ({
    title,
    sets,
    displayFavorites,
    toggleFavorites,
    currentPage,
    setCurrentPage,
    showNewButton,
    handleStart,
    handleEdit,
    handleCreateNewSet,
}: Props) => {
    const filteredSets = displayFavorites ? sets.filter((set) => set.isFavorite) : sets;

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = filteredSets.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="mx-auto flex w-5/6 max-w-5xl flex-col gap-12">
            {/* Header */}
            <div className="flex flex-col justify-between gap-6 py-6 md:flex-row">
                <div className="flex items-center justify-center gap-6 underline underline-offset-2 md:justify-start">
                    <h2>{title}</h2>
                </div>
                <div className="flex items-center justify-center gap-3 md:justify-end">
                    <button
                        className={`${
                            displayFavorites ? 'bg-indigo-200' : 'bg-slate-200 text-slate-400'
                        } rounded-full border-2 border-transparent px-4 py-2 text-sm transition duration-200 hover:border-indigo-900/50`}
                        onClick={toggleFavorites}
                    >
                        Favorites
                    </button>
                    {showNewButton && handleCreateNewSet && (
                        <button
                            className="rounded-full border-2 border-transparent bg-orange-200 px-4 py-2 text-sm transition hover:border-orange-900/50"
                            onClick={handleCreateNewSet}
                        >
                            New User Set
                        </button>
                    )}
                </div>
            </div>

            {/* Question Cards */}
            <div className="grid gap-6 md:grid-cols-2">
                {currentItems.map((set) => (
                    <QuestionSetCardBase
                        key={set.id}
                        id={set.id}
                        title={set.title}
                        questionCount={set.questions.length}
                        onCardClick={handleStart}
                    >
                        <Button
                            primary
                            onClick={(e) => {
                                e.stopPropagation();
                                handleStart(set.id);
                            }}
                        >
                            Start
                        </Button>

                        <FavoriteToggle isFavorite={set.isFavorite} id={set.id} />

                        <Button viewOnly info>
                            {set.questions.length} Items
                        </Button>

                        {isUserQuestionSet(set) && (
                            <Button
                                edit
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleEdit(set.id);
                                }}
                            >
                                Edit
                            </Button>
                        )}
                    </QuestionSetCardBase>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center py-6 md:justify-end">
                {filteredSets.length > ITEMS_PER_PAGE && (
                    <Pagination
                        itemsPerPage={ITEMS_PER_PAGE}
                        totalItems={filteredSets.length}
                        paginate={setCurrentPage}
                        currentPage={currentPage}
                    />
                )}
            </div>
        </div>
    );
};

export default Section;
