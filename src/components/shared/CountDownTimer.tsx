import { useEffect, useRef, useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

type Props = {
  initialSeconds: number
  initialMinutes: number
};

const CountDownTimer = ({initialSeconds, initialMinutes}: Props) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [timeRemaining, setTimeRemaining] = useState(-1);

  const [startDisabled, setStartDisabled] = useState<boolean>(false);
  const [stopDisabled, setStopDisabled] = useState<boolean>(true);
  const [resetDisabled, setResetDisabled] = useState<boolean>(true);

  const timerId = useRef<ReturnType<typeof setInterval>>();

  const startTimer = () => {
    setStartDisabled(true);
    setStopDisabled(false);
    setResetDisabled(false);
    timerId.current = setInterval(() => {
      setTimeRemaining((previousState) => previousState - 1);
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
    setSeconds(initialSeconds)
    setMinutes(initialMinutes)
    setTimeRemaining(minutes * 60 + seconds);
  };

  const endTimer = () => {
    setStartDisabled(true)
    setStopDisabled(true)
    clearInterval(timerId.current);
    timerId.current = setInterval(() => 0);
  }

  const formatTime = (minutes: number, seconds: number) => {
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const updateCountdown = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return formatTime(minutes, seconds);
  };

  useEffect(() => {
    setTimeRemaining(minutes * 60 + seconds);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      endTimer()
    }
  }, [timeRemaining])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="h-6 w-6 text-sm font-light">
          <ClockIcon />
        </div>
        <div className="flex items-center justify-center gap-0.5 text-center text-sm font-light">
          <div className="min-w-[15px]">{updateCountdown()}</div>
          {/* <div className="">:</div>
          <div className="min-w-[15px]">{formatSeconds()}</div> */}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {stopDisabled ? (
          <button
            onClick={() => startTimer()}
            className="min-w-[75px] rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm disabled:bg-indigo-50 disabled:text-gray-400"
            disabled={startDisabled}
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => stopTimer()}
            className="min-w-[75px] rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm disabled:bg-indigo-50 disabled:text-gray-400"
            disabled={stopDisabled}
          >
            Stop
          </button>
        )}
        <button
          onClick={() => resetTimer()}
          className="min-w-[75px] rounded-full bg-indigo-200 py-1.5 px-2.5 text-sm disabled:bg-indigo-50 disabled:text-gray-400"
          disabled={resetDisabled}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountDownTimer;
