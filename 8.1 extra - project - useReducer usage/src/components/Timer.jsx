import { useEffect } from "react";

const Timer = ({ dispatch, secondsRemainig }) => {
    const minutes = Math.floor(secondsRemainig / 60);
    const seconds = secondsRemainig % 60;
    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: "tick" });
        }, 1000);

        return () => clearInterval(id);
    }, [dispatch]);
    return (
        <div className="timer">
            {minutes}:{seconds > 9 ? `${seconds}` : `0${seconds}`}
        </div>
    );
};

export default Timer;
