import { useState } from 'react';
import { Header } from '@/components/layout';
import { useNavigate } from 'react-router-dom';
import { Section } from '@/components/features';
import { useAppSelector } from '@/app/hooks';
import {
    selectDefaultQuestionSets,
    selectUserQuestionSets,
} from '@/features/questionSets/questionSetsSelectors';

const ITEMS_PER_PAGE = 4;

const Home = () => {
    const navigate = useNavigate();

    const defaultSets = useAppSelector(selectDefaultQuestionSets);
    const userSets = useAppSelector(selectUserQuestionSets);

    const [filters, setFilters] = useState({
        defaultFavoritesOnly: false,
        userFavoritesOnly: false,
    });

    const [pages, setPages] = useState({
        default: 1,
        user: 1,
    });

    const handleToggleFavorites = (key: 'default' | 'user') => {
        setFilters((prev) => ({
            ...prev,
            [`${key}FavoritesOnly`]: !prev[`${key}FavoritesOnly` as keyof typeof prev],
        }));
        setPages((prev) => ({ ...prev, [key]: 1 }));
    };

    const handlePageChange = (key: 'default' | 'user', page: number) => {
        setPages((prev) => ({ ...prev, [key]: page }));
    };

    const handleStart = (id: string) => {
        navigate(`mock-interview/${id}`);
    };

    const handleEdit = (id: string) => {
        navigate(`user-set/edit/${id}`);
    };

    const handleCreateNewSet = () => {
        navigate('/user-set');
    };
    const sections = [
        {
            key: 'default' as const,
            title: 'Default Interview Question Sets',
            sets: filters.defaultFavoritesOnly
                ? defaultSets.filter((s) => s.isFavorite)
                : defaultSets,
            currentPage: pages.default,
            showNewButton: false,
        },
        {
            key: 'user' as const,
            title: 'User Question Sets',
            sets: filters.userFavoritesOnly ? userSets.filter((s) => s.isFavorite) : userSets,
            currentPage: pages.user,
            showNewButton: true,
        },
    ];

    return (
        <section id="home" className="h-full">
            <Header>Question Sets</Header>
            <div className="h-full w-full items-center justify-center bg-indigo-50 py-12">
                {sections.map(({ key, title, sets, currentPage, showNewButton }) => (
                    <Section
                        key={key}
                        title={title}
                        sets={sets}
                        displayFavorites={filters[`${key}FavoritesOnly`]}
                        toggleFavorites={() => handleToggleFavorites(key)}
                        currentPage={currentPage}
                        setCurrentPage={(page) => handlePageChange(key, page)}
                        itemsPerPage={ITEMS_PER_PAGE}
                        showNewButton={showNewButton}
                        handleStart={handleStart}
                        handleEdit={handleEdit}
                        handleCreateNewSet={handleCreateNewSet}
                    />
                ))}
            </div>
        </section>
    );
};

export default Home;
