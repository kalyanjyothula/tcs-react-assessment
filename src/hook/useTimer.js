import { useState, useRef } from 'react'

const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [buttonClass, setButtonClass] = useState(false);
  const timeInstance = useRef(null);

  const renderSeconds = () => {
    const sec = seconds % 60;
    return sec < 10 ? `0${sec}` : sec;
  }

  const renderMinutes = () => {
    const mins = Math.floor(seconds / 60)
    return mins < 10 ? `0${mins}` : mins;
  }

  const handleTimer = (e) => {
    setButtonClass(!buttonClass)
    if (!buttonClass)
      timeInstance.current = setInterval(() => setSeconds(prev => prev + 1), 1000);
    else
      clearInterval(timeInstance.current);
    // console.log(timeInstance.current, "time")

  };

  const resetTimer = (e) => {
    clearInterval(timeInstance.current);
    setSeconds(0)
    setButtonClass(false)
  };

  return { renderMinutes, renderSeconds, resetTimer, handleTimer, buttonClass }
}


export default useTimer;

