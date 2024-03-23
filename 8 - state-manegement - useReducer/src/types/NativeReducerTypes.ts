export const enum REDUCER_TYPE_VALUES {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
  }
  export type ReducerActions = {
    type: REDUCER_TYPE_VALUES;
    payload?: string;
  };
  export type InitialStateType = {
    count: number;
    text: string;
  };