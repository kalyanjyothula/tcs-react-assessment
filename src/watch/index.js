import useTimer from '../hook/useTimer'
import "./index.css";

export default function StopWatch() {

  const { buttonClass, handleTimer, renderMinutes, renderSeconds, resetTimer } = useTimer()
  // const [isStart, setIsStart] = useState(false);
  // const [minutes, setMinutes] = useState();

  /*
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
    console.log(timeInstance.current, "time")

  };

  const resetTimer = (e) => {
    clearInterval(timeInstance.current);
    setSeconds(0)
    setButtonClass(false)
  }; */

  return (
    <div className="stop-watch-container">
      <h3>Stop Watch</h3>
      <div className="stop-watch-show-container">
        <div>{renderMinutes()}</div>
        <span>:</span>
        <div>{renderSeconds()}</div>
      </div>
      <div className="stop-watch-button-container">
        <button className={buttonClass ? "stop" : "start"} onClick={handleTimer}>{buttonClass ? "Stop" : "Start"}</button>
        <button className="reset" onClick={resetTimer}>Restart</button>
      </div>
    </div>
  );
}
