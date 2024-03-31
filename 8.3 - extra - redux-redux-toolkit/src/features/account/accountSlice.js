import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  balance: 0,
  loan: 0,
  loan_purpose: "",
  is_loading: false,
};

const account_slice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance += action.payload;
      state.is_loading = false;
    },
    witdraw(state, action) {
      state.balance = state.balance -= action.payload;
    },
    request_loan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;

        state.loan_purpose = action.payload.purpose;

        state.balance = state.balance += action.payload.amount;
      },
    },
    pay_loan(state) {
      if (state.loan < 0) return;

      state.balance -= state.loan;

      state.loan = 0;

      state.loan_purpose = "";
    },
    converting_currency(state) {
      state.is_loading = true;
    },
  },
});

export function deposit(amount, currency) {
  if (currency === "USD") {
    return { type: "account/deposit", payload: amount, is_loading: false };
  }

  return async function (dispatch) {
    dispatch({ type: "account/converting_currency" });

    const response = await fetch(
      `http://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const raw_data = await response.json();

    const converted_data = raw_data.rates.USD;

    await dispatch({
      type: "account/deposit",
      payload: converted_data,
    });

    // console.log(store.getState());
  };
}

console.log(account_slice);

export default account_slice.reducer;
export const { witdraw, request_loan, pay_loan } = account_slice.actions;
