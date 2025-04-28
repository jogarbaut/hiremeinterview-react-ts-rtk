import { RootState } from '@/app/store';
import { FavoriteToggle, QuestionNavigation } from '@/components/features';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/layout';
import { Button, TimerBase } from '@/components/shared';

/**
 * MockInterview Page
 * -------------------
 * Simulates a mock interview session.
 * Allows user to toggle between stopwatch and countdown modes, navigate through questions, and favorite sets.
 */

const MockInterview = () => {
    const { id } = useParams<{ id: string }>();
    const [indexCurrentQuestion, setIndexCurrentQuestion] = useState(0);
    const [displayTimer, setDisplayTimer] = useState(false);

    const defaultQuestionSets = useSelector(
        (state: RootState) => state.defaultQuestionSets.defaultQuestionSets,
    );
    const userQuestionSets = useSelector(
        (state: RootState) => state.userQuestionSets.userQuestionSets,
    );

    const questionSets = id?.startsWith('cus-') ? userQuestionSets : defaultQuestionSets;
    const questionSet = questionSets.find((set) => set.id === id);

    const currentQuestion =
        questionSet?.questions[indexCurrentQuestion]?.question || 'No Question Found';

    const indexLastQuestion = questionSet ? questionSet.questions.length - 1 : 0;

    const handleTimerToggle = () => {
        setDisplayTimer((prev) => !prev);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when navigating here
    }, []);

    if (!questionSet) {
        return (
            <section
                id="mockInterview"
                className="flex h-full flex-col items-center justify-center"
            >
                <Header>Mock Interview</Header>
                <p className="mt-12 text-lg">Question Set Not Found</p>
            </section>
        );
    }

    return (
        <section id="mockInterview" className="flex h-full flex-col">
            <Header>Mock Interview</Header>
            <div className="flex w-full flex-grow items-center justify-center bg-indigo-50">
                <div className="mx-auto w-5/6 max-w-5xl">
                    <div className="my-12 flex w-full flex-col gap-12 rounded-lg bg-white p-12 shadow-md">
                        {/* Top Bar - Timer Toggle + Favorite */}
                        <div className="flex w-full items-center justify-between">
                            <Button secondary onClick={handleTimerToggle}>
                                {displayTimer ? 'Timer' : 'Stopwatch'}
                            </Button>
                            <FavoriteToggle
                                isFavorite={questionSet.isFavorite}
                                id={questionSet.id}
                            />
                        </div>

                        {/* Current Question */}
                        <div className="flex items-center justify-center text-center text-lg sm:text-2xl md:my-16 md:text-3xl lg:text-4xl">
                            {currentQuestion}
                        </div>

                        {/* Timer and Navigation */}
                        <div className="flex flex-col items-center justify-center gap-6">
                            <div className="mx-auto w-full">
                                {displayTimer ? (
                                    <TimerBase mode="up" />
                                ) : (
                                    <TimerBase mode="down" initialMinutes={0} initialSeconds={10} />
                                )}
                            </div>

                            <div className="mx-auto w-full">
                                <QuestionNavigation
                                    indexCurrentQuestion={indexCurrentQuestion}
                                    indexLastQuestion={indexLastQuestion}
                                    setIndexCurrentQuestion={setIndexCurrentQuestion}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MockInterview;
