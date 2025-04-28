import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useState } from 'react';
import { Header } from '@/components/layout';
import { useNavigate } from 'react-router-dom';
import { Section } from '@/components/features';

const Home = () => {
    const navigate = useNavigate();

    const defaultQuestionSets = useSelector(
        (state: RootState) => state.defaultQuestionSets.defaultQuestionSets,
    );

    const userQuestionSets = useSelector(
        (state: RootState) => state.userQuestionSets.userQuestionSets,
    );

    const [displayFavorites, setDisplayFavorites] = useState({
        default: false,
        user: false,
    });

    const [currentPage, setCurrentPage] = useState({
        default: 1,
        user: 1,
    });

    const handleStart = (id: string) => {
        navigate(`mock-interview/${id}`);
    };

    const handleEdit = (id: string) => {
        navigate(`custom-set/edit/${id}`);
    };

    const handleCreateNewSet = () => {
        navigate('/user-set');
    };

    const sections = [
        {
            key: 'default',
            title: 'Default Interview Question Sets',
            sets: defaultQuestionSets,
            displayFavorites: displayFavorites.default,
            toggleFavorites: () => {
                setDisplayFavorites((prev) => ({ ...prev, default: !prev.default }));
                setCurrentPage((prev) => ({ ...prev, default: 1 }));
            },
            currentPage: currentPage.default,
            setCurrentPage: (page: number) =>
                setCurrentPage((prev) => ({ ...prev, default: page })),
        },
        {
            key: 'user',
            title: 'Your User Question Sets',
            sets: userQuestionSets,
            displayFavorites: displayFavorites.user,
            toggleFavorites: () => {
                setDisplayFavorites((prev) => ({ ...prev, user: !prev.user }));
                setCurrentPage((prev) => ({ ...prev, user: 1 }));
            },
            currentPage: currentPage.user,
            setCurrentPage: (page: number) => setCurrentPage((prev) => ({ ...prev, user: page })),
            showNewButton: true,
            handleCreateNewSet: handleCreateNewSet,
        },
    ];

    return (
        <section id="home" className="h-full">
            <Header>Question Sets</Header>
            <div className="h-full w-full items-center justify-center bg-indigo-50 py-12">
                {sections.map((section) => (
                    <Section
                        key={section.key}
                        title={section.title}
                        sets={section.sets}
                        displayFavorites={section.displayFavorites}
                        toggleFavorites={section.toggleFavorites}
                        currentPage={section.currentPage}
                        setCurrentPage={section.setCurrentPage}
                        showNewButton={section.showNewButton}
                        handleStart={handleStart}
                        handleEdit={handleEdit}
                        handleCreateNewSet={section.handleCreateNewSet}
                    />
                ))}
            </div>
        </section>
    );
};

export default Home;
