import { ReactNode } from 'react';

/**
 * TimerButton Component
 * ----------------------
 * Reusable button for timer-related controls (Start, Stop, Reset).
 * Accepts children as label and click handlers.
 *
 * Props:
 * @param onClick - Function to execute on button click
 * @param disabled - Optional disabled state
 * @param children - Button content (text, icon, etc.)
 */
type Props = {
    onClick: () => void;
    disabled?: boolean;
    children: ReactNode;
};

const TimerButton = ({ onClick, disabled = false, children }: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="min-w-[75px] rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm font-light transition hover:border-2 hover:border-indigo-900/50 disabled:bg-indigo-50 disabled:text-gray-400"
        >
            {children}
        </button>
    );
};

export default TimerButton;
