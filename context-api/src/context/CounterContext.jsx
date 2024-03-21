import { createContext, useReducer } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const initialValue = { value: 0 };

  const counterReducer = (state, action) => {
    
    switch (action.type) {
      case 'INCREASE':
        return { value: state.value + 1 };

      case 'DECREASE':
        return { value: state.value - 1 };
      case 'RESET':
        return initialValue;
      default:
        return state;
    }
  };
  
  const [counter, dispatchCounter] = useReducer(counterReducer, initialValue);

  return <CounterContext.Provider value={{counter, dispatchCounter}}>{children}</CounterContext.Provider>;
};
