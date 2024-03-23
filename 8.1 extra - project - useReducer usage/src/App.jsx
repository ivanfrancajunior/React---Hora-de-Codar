import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import BankAccount from "./example/BankAccount";
const SECS_PER_QUESTION = 30;
const initialState = {
  questions: [],
  status: "", //loading, error , ready, active, finish
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemainig: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return {
        ...state,
        status: "active",
        secondsRemainig: state.questions.length * SECS_PER_QUESTION,
      };
    case "tick":
      return {
        ...state,
        secondsRemainig: state.secondsRemainig - 1,
        status: state.secondsRemainig === 0 ? "finish" : state.status,
      };
    case "restart":
      return {
        ...initialState,
        question: state.questions,
        status: "ready",
      };

    case "finish":
      return {
        ...state,
        status: "finish",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    default:
      throw new Error("Unknown Action");
  }
};

function App() {
  const url = "http://localhost:3000/questions";

  const [
    { status, questions, index, answer, points, highscore, secondsRemainig },
    dispatch,
  ] = useReducer(reducer, initialState);
  const questQtd = questions.length;

  const maxPointsValue = questions.reduce((prev, cur) => prev + cur.points, 0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        dispatch({ type: "dataRecived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });

        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      
      <Header />

      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {status === "ready" && (
          <StartScreen questQtd={questQtd} dispatch={dispatch} />
        )}

        {status === "active" && (
          <>
            {" "}
            <Progress
              questQtd={questQtd}
              index={index}
              points={points}
              maxPointsValue={maxPointsValue}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemainig={secondsRemainig} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                questQtd={questQtd}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === "finish" && (
          <FinishScreen
            maxPointsValue={maxPointsValue}
            points={points}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
      <BankAccount />
    </div>
  );
}

export default App;

/*
    Usamos o json-server como api -> 
    
    Salvamos o retorno da chamada à api no useReducer -> 
    
    Controlamos o esdao de erro e sucesso tbm com useReducer 

    */
