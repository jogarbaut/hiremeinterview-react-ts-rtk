import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useEffect, useState } from 'react';
import Pagination from '@/components/shared/Pagination';
import { UserQuestionSet } from '@/features/userQuestionSets/userQuestionSetsTypes';
import Header from '@/components/shared/Header';
import { useNavigate } from 'react-router-dom';
import { DefaultQuestionSet } from '@/features/defaultQuestionSets/defaultQuestionSetsTypes';
import QuestionSetCard from '@/components/shared/QuestionSetCard';

const Home = () => {
    const defaultQuestionSets = useSelector(
        (state: RootState) => state.defaultQuestionSets.defaultQuestionSets,
    );

    const userQuestionSets = useSelector(
        (state: RootState) => state.userQuestionSets.userQuestionSets,
    );

    const [displayFavorites, setDisplayFavorites] = useState<boolean>(false);
    const [filteredSets, setFilteredSets] = useState<DefaultQuestionSet[]>([]);

    const [displayuserFavorites, setDisplayuserFavorites] = useState<boolean>(false);
    const [filtereduserSets, setFiltereduserSets] = useState<UserQuestionSet[]>([]);

    const navigate = useNavigate();

    // Handle displayFavorite filter for defaultQuestionSets
    useEffect(() => {
        if (!displayFavorites) {
            setFilteredSets(defaultQuestionSets);
        } else {
            setFilteredSets(defaultQuestionSets.filter((set) => set.isFavorite === true));
        }
    }, [displayFavorites, defaultQuestionSets]);

    // Handle displayFavorite filter for userQuestionSets
    useEffect(() => {
        if (!displayuserFavorites) {
            setFiltereduserSets(userQuestionSets);
        } else {
            setFiltereduserSets(userQuestionSets.filter((set) => set.isFavorite === true));
        }
    }, [displayuserFavorites, userQuestionSets]);

    useEffect(() => {
        setCurrentPage(1);
    }, [displayFavorites]);

    useEffect(() => {
        setuserCurrentPage(1);
    }, [displayuserFavorites]);

    // Pagination for defaultQuestionSets
    const itemsPerPage: number = 4;
    const [currentPage, setCurrentPage] = useState<number>(1);
    let indexOfLastItem: number = currentPage * itemsPerPage;
    let indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    let currentItems = filteredSets?.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Pagination for userQuestionSets
    const [userCurrentPage, setuserCurrentPage] = useState<number>(1);
    let userIndexOfLastItem: number = userCurrentPage * itemsPerPage;
    let userIndexOfFirstItem: number = userIndexOfLastItem - itemsPerPage;
    let userCurrentItems = filtereduserSets?.slice(userIndexOfFirstItem, userIndexOfLastItem);
    const userPaginate = (pageNumber: number) => setuserCurrentPage(pageNumber);

    const activefilterStyles: string = 'bg-indigo-200 hover:border-transparent';
    const nonActiveFilterStyles: string = 'bg-slate-200 text-slate-400';
    const filterStyles =
        'border-transparent rounded-full border-2  px-4 py-2 text-sm hover:border-2 hover:border-indigo-900/50 transition duration-200';

    return (
        <section id="home" className="h-full">
            <Header>Question Sets</Header>
            <div className="h-full w-full items-center justify-center bg-indigo-50 py-12">
                {/* defaultQuestionSet Display */}
                <div className="mx-auto flex w-5/6 max-w-5xl flex-col gap-6">
                    <div className="flex flex-col justify-between gap-6 py-3 md:flex-row">
                        <div className="flex w-full items-center justify-center underline underline-offset-2 md:justify-start">
                            <h2>default Interview Question Sets</h2>
                        </div>
                        <div className="flex items-center justify-center gap-3 md:justify-end">
                            <button
                                className={`${
                                    displayFavorites ? activefilterStyles : nonActiveFilterStyles
                                } ${filterStyles}`}
                                onClick={() => setDisplayFavorites((prevState) => !prevState)}
                            >
                                Favorites
                            </button>
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {currentItems.map((set) => {
                            return <QuestionSetCard key={set.id} questionSet={set} />;
                        })}
                    </div>
                    <div className="flex items-center justify-center py-6 md:justify-end">
                        {filteredSets.length > itemsPerPage && (
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                totalItems={filteredSets.length}
                                paginate={paginate}
                                currentPage={currentPage}
                            />
                        )}
                    </div>
                </div>
                {/* user Question Display */}
                <div className="mx-auto flex w-5/6 max-w-5xl flex-col gap-12">
                    <div className="flex flex-col justify-between gap-6 py-6 md:flex-row">
                        <div className="flex items-center justify-center gap-6 underline underline-offset-2 md:justify-start">
                            <h2>Your user Question Sets</h2>
                        </div>
                        <div className="flex items-center justify-center gap-3 md:justify-end">
                            <button
                                className={`${
                                    displayuserFavorites
                                        ? activefilterStyles
                                        : nonActiveFilterStyles
                                } ${filterStyles}`}
                                onClick={() => setDisplayuserFavorites((prevState) => !prevState)}
                            >
                                Favorites
                            </button>
                            <button
                                className="rounded-full border-2 border-transparent bg-orange-200 px-4 py-2 text-sm transition hover:border-2 hover:border-orange-900/50"
                                onClick={() => {
                                    navigate('/user-set');
                                }}
                            >
                                New user Set
                            </button>
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {userCurrentItems.map((set) => {
                            return <QuestionSetCard key={set.id} questionSet={set} />;
                        })}
                    </div>
                    <div className="flex items-center justify-center py-6 md:justify-end">
                        {filtereduserSets.length > itemsPerPage && (
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                totalItems={filtereduserSets.length}
                                paginate={userPaginate}
                                currentPage={userCurrentPage}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
