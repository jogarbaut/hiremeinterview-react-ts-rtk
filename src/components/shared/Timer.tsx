import { useState, useRef } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

const Timer = () => {
  const [time, setTime] = useState<number>(0);

  const timerId = useRef<ReturnType<typeof setInterval>>();

  const [startDisabled, setStartDisabled] = useState<boolean>(false);
  const [stopDisabled, setStopDisabled] = useState<boolean>(true);
  const [resetDisabled, setResetDisabled] = useState<boolean>(true);

  const startTimer = () => {
    setStartDisabled(true);
    setStopDisabled(false);
    setResetDisabled(false);
    timerId.current = setInterval(() => {
      setTime((previousState) => previousState + 1);
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
    if (time) {
      setTime(0);
    }
  };

  const formatTime = (minutes: number, seconds: number) => {
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const updateTimer = () => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return formatTime(minutes, seconds)
  }

  // const formatMinutes = () => {
  //   const formattedMinutes = `0${Math.floor(seconds / 60) % 60}`.slice(-2);
  //   return formattedMinutes;
  // };

  // const formatSeconds = () => {
  //   const formattedSeconds = `0${seconds % 60}`.slice(-2);
  //   return formattedSeconds
  // };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="h-6 w-6 text-sm font-light">
          <ClockIcon />
        </div>
        <div className="text-center text-sm font-light gap-0.5 flex items-center justify-center">
          <div className="min-w-[15px]">{updateTimer()}</div>
          {/* <div className="">:</div>
          <div className="min-w-[15px]">{formatSeconds()}</div> */}

        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {stopDisabled ? (
          <button
            onClick={() => startTimer()}
            className="rounded-full bg-indigo-200 py-1.5 px-2.5 min-w-[75px] text-sm disabled:bg-indigo-50 disabled:text-gray-400"
            disabled={startDisabled}
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => stopTimer()}
            className="rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm min-w-[75px] disabled:bg-indigo-50 disabled:text-gray-400"
            disabled={stopDisabled}
          >
            Stop
          </button>
        )}
        <button
          onClick={() => resetTimer()}
          className="rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm min-w-[75px] disabled:bg-indigo-50 disabled:text-gray-400"
          disabled={resetDisabled}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
