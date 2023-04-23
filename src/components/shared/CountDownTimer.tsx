import { useRef, useState } from "react"

type Props = {}

const CountDownTimer = (props: Props) => {
  const [seconds, setSeconds] = useState<number>(5000)
  const [startDisabled, setStartDisabled] = useState<boolean>(false);
  const [stopDisabled, setStopDisabled] = useState<boolean>(true);
  const [resetDisabled, setResetDisabled] = useState<boolean>(true);
  const timerId = useRef<ReturnType<typeof setInterval>>();

  const startTimer = () => {
    setStartDisabled(true)
    setStopDisabled(false)
    setResetDisabled(false)
    timerId.current = setInterval(() => {
      setSeconds((previousState) => previousState - 1)
    }, 1000)
  }

  const stopTimer = () => {
    setStartDisabled(false)
    setStopDisabled(true)
    clearInterval(timerId.current)
    timerId.current = setInterval(() => 0)
  }

  const resetTimer = () => {
    setStartDisabled(false)
    setStopDisabled(true)
    setResetDisabled(true)
    stopTimer()
    if (seconds) {
      setSeconds(0)
    }
  }

  const formatMinutes = () => {
    const formattedMinutes = `0${Math.floor(seconds / 60) % 60}`.slice(-2);
    return formattedMinutes;
  }

  const formatSeconds = () => {
    const formattedSeconds = `0${seconds % 60}`.slice(-2);
    return formattedSeconds
  };

  return (
    <div>CountDownTimer</div>
  )
}

export default CountDownTimer