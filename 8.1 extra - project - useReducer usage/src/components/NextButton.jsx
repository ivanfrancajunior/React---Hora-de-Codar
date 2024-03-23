import React from "react";

const NextButton = ({ dispatch, answer, questQtd, index }) => {
    if (answer === "null") return null;

    if(index < questQtd - 1)return (
        <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextQuestion" })}
        >
            Next
        </button>
    );
    if(index === questQtd - 1)return (
        <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finish" })}
        >
            Finish
        </button>
    );
};

export default NextButton;
