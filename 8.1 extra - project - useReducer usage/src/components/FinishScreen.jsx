import React from "react";

const FinishScreen = ({ points, maxPointsValue, highscore, dispatch }) => {
    const percentage = Math.ceil((points / maxPointsValue) * 100);

    return (
        <div>
            <p className="result">
                You scored {points} out of {maxPointsValue} ({percentage}%)
            </p>
            <p className="highscore">(HighScore: {highscore} points)</p>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "restart" })}
            >
                Restart
            </button>
        </div>
    );
};

export default FinishScreen;
