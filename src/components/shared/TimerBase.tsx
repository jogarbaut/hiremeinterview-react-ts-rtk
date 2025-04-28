import { useState, useEffect, useRef } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import TimerButton from './TimerButton';

/**
 * TimerBase Component
 * ---------------------
 * Flexible timer component that can count up or down based on props.
 *
 * Props:
 * @param mode - 'up' | 'down' (count direction)
 * @param initialMinutes - (Optional) starting minutes (only for countdown mode)
 * @param initialSeconds - (Optional) starting seconds (only for countdown mode)
 */
type Props = {
    mode: 'up' | 'down';
    initialMinutes?: number;
    initialSeconds?: number;
};

const TimerBase = ({ mode, initialMinutes = 0, initialSeconds = 0 }: Props) => {
    const initialTime = initialMinutes * 60 + initialSeconds;
    const [time, setTime] = useState(mode === 'down' ? initialTime : 0);
    const [isRunning, setIsRunning] = useState(false);

    const timerId = useRef<ReturnType<typeof setInterval> | null>(null);

    const startTimer = () => {
        if (timerId.current) return; // Already running
        setIsRunning(true);
        timerId.current = setInterval(() => {
            setTime((prev) => (mode === 'down' ? prev - 1 : prev + 1));
        }, 1000);
    };

    const stopTimer = () => {
        if (timerId.current) {
            clearInterval(timerId.current);
            timerId.current = null;
        }
        setIsRunning(false);
    };

    const resetTimer = () => {
        stopTimer();
        setTime(mode === 'down' ? initialTime : 0);
    };

    useEffect(() => {
        if (mode === 'down' && time <= 0 && isRunning) {
            stopTimer();
        }
    }, [time, isRunning, mode]);

    useEffect(() => {
        // When mode changes, reset timer cleanly
        stopTimer();
        setTime(mode === 'down' ? initialMinutes * 60 + initialSeconds : 0);
    }, [mode, initialMinutes, initialSeconds]);

    useEffect(() => {
        return () => {
            if (timerId.current) {
                clearInterval(timerId.current);
            }
        };
    }, []);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
                <motion.div
                    animate={isRunning ? { scale: [1, 1.05, 1] } : {}}
                    transition={isRunning ? { repeat: Infinity, duration: 1 } : {}}
                    className="h-6 w-6 text-sm font-light"
                >
                    <ClockIcon />
                </motion.div>

                <div className="flex items-center justify-center gap-0.5 text-center text-sm font-light">
                    {formatTime(time)}
                </div>
            </div>

            <div className="flex items-center justify-center gap-2">
                <TimerButton onClick={isRunning ? stopTimer : startTimer}>
                    {isRunning ? 'Stop' : 'Start'}
                </TimerButton>

                <TimerButton
                    onClick={resetTimer}
                    disabled={!isRunning && (mode === 'up' ? time === 0 : time === initialTime)}
                >
                    Reset
                </TimerButton>
            </div>
        </div>
    );
};

export default TimerBase;
