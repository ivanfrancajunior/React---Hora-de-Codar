import React from "react";

const Progress = ({ index, questQtd, points, maxPointsValue, answer }) => {
    return (
        <header className="progress">
            <progress max={questQtd} value={index + Number(answer !== null)} />
            <p>
                Question <strong>{index + 1}</strong>/{questQtd}
            </p>
            <p>
                <strong>
                    {points} /{maxPointsValue}{" "}
                </strong>
            </p>
        </header>
    );
};

export default Progress;
