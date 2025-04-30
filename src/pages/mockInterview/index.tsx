import { FavoriteToggle, QuestionNavigation } from '@/components/features';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/layout';
import { Button, TimerBase } from '@/components/shared';
import { useAppSelector } from '@/app/hooks';

/**
 * MockInterview Page
 * -------------------
 * Simulates a mock interview session.
 * Allows user to toggle between stopwatch and countdown modes, navigate through questions, and favorite sets.
 */

const MockInterview = () => {
    const { id } = useParams<{ id: string }>();
    const [indexCurrentQuestion, setIndexCurrentQuestion] = useState(0);
    const [displayTimer, setDisplayTimer] = useState(true);
    const [timerKey, setTimerKey] = useState(0); // used to force timer reset on toggle

    const questionSet = useAppSelector((state) =>
        state.questionSets.questionSets.find((set) => set.id === id),
    );

    const currentQuestion =
        questionSet?.questions[indexCurrentQuestion]?.text || 'No question found';
    const indexLastQuestion = questionSet?.questions.length ? questionSet.questions.length - 1 : 0;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleModeSwitch = (mode: 'countdown' | 'stopwatch') => {
        setDisplayTimer(mode === 'countdown');
        setTimerKey((prev) => prev + 1); // Reset timer when mode changes
    };

    if (!questionSet) {
        return (
            <section className="flex h-full flex-col items-center justify-center bg-indigo-50">
                <Header>Mock Interview</Header>
                <p className="mt-12 text-lg text-red-500">Question Set Not Found</p>
            </section>
        );
    }

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
                        {/* Top Controls */}
                        <div className="flex w-full items-center justify-between">
                            <div className="flex gap-3">
                                <Button
                                    secondary
                                    disabled={displayTimer}
                                    onClick={() => handleModeSwitch('countdown')}
                                >
                                    Countdown
                                </Button>
                                <Button
                                    secondary
                                    disabled={!displayTimer}
                                    onClick={() => handleModeSwitch('stopwatch')}
                                >
                                    Stopwatch
                                </Button>
                            </div>

                            <FavoriteToggle
                                isFavorite={questionSet.isFavorite}
                                id={questionSet.id}
                            />
                        </div>

                        {/* Current Question */}
                        <div className="flex items-center justify-center text-center text-lg sm:text-2xl md:my-16 md:text-3xl lg:text-4xl">
                            {currentQuestion}
                        </div>

                        {/* Timer + Navigation */}
                        <div className="flex flex-col items-center justify-center gap-6">
                            <div className="w-full">
                                {displayTimer ? (
                                    <TimerBase
                                        key={timerKey}
                                        mode="down"
                                        initialMinutes={2}
                                        initialSeconds={0}
                                    />
                                ) : (
                                    <TimerBase key={timerKey} mode="up" />
                                )}
                            </div>

                            <div className="w-full">
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
