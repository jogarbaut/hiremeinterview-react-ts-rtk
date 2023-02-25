import { useState, useRef } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

type Props = {};

const Timer = (props: Props) => {
  const [seconds, setSeconds] = useState<number>(0);
  const timerId = useRef<ReturnType<typeof setInterval>>();
  const [startDisabled, setStartDisabled] = useState<boolean>(false);
  const [stopDisabled, setStopDisabled] = useState<boolean>(true);
  const [resetDisabled, setResetDisabled] = useState<boolean>(true);

  const startTimer = () => {
    setStartDisabled(true);
    setStopDisabled(false);
    setResetDisabled(false);
    timerId.current = setInterval(() => {
      setSeconds((previousState) => previousState + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setStartDisabled(false);
    setStopDisabled(true);
    clearInterval(timerId.current);
    timerId.current = setInterval(() => 0);
  };

  const resetTimer = () => {
    setStartDisabled(false);
    setStopDisabled(true);
    setResetDisabled(true);
    stopTimer();
    if (seconds) {
      setSeconds(0);
    }
  };

  const formatTime = () => {
    const formattedSeconds = `0${seconds % 60}`.slice(-2);
    const formattedMinutes = `0${Math.floor(seconds / 60) % 60}`.slice(-2);
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2 items-center justify-center">
        <div className="h-6 w-6 font-light text-sm"><ClockIcon /></div>
        <div className="font-light text-center text-sm">{formatTime()}</div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => startTimer()}
          className="rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm disabled:bg-indigo-50 disabled:text-gray-400"
          disabled={startDisabled}
        >
          Start
        </button>
        <button
          onClick={() => stopTimer()}
          className="rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm disabled:bg-indigo-50 disabled:text-gray-400"
          disabled={stopDisabled}
        >
          Stop
        </button>
        <button
          onClick={() => resetTimer()}
          className="rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm disabled:bg-indigo-50 disabled:text-gray-400"
          disabled={resetDisabled}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
