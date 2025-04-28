import { TimerBase } from '@/components/shared';

/**
 * CountDownTimer Component
 * -------------------------
 * Wrapper for TimerBase to count down from custom initial time.
 *
 * Props:
 * @param initialMinutes - Starting minutes
 * @param initialSeconds - Starting seconds
 */

type Props = {
    initialMinutes: number;
    initialSeconds: number;
};

const CountDownTimer = ({ initialMinutes, initialSeconds }: Props) => {
    return (
        <TimerBase mode="down" initialMinutes={initialMinutes} initialSeconds={initialSeconds} />
    );
};

export default CountDownTimer;
