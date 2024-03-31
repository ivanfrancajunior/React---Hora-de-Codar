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
    },
    witdraw(state, action) {
      state.balance = state.balance -= action.payload;
    },
    request_loan(state, action) {
      if (state.loan > 0) return;

      state.loan = action.payload.amount;

      state.loan_purpose = action.payload.purpose;

      state.balance = state.balance += action.payload.amount;
    },
    pay_loan(state, action) {
      if (state.loan > 0) return;

      state.loan = 0;

      state.loan_purpose = "";

      state.balance = state.balance -= state.loan;
    },
  },
});

export default account_slice.reducer;
export const { deposit, witdraw, request_loan, pay_loan } = account_slice.reducer;


// import store from "../../store";
// const initialStateAccount = {
//     balance: 0,
//     loan: 0,
//     loanPurpose: "",
//     is_loading: false,
// };

// const account_reducer = (state = initialStateAccount, action) => {
//     switch (action.type) {
//         case "account/deposit":
//             return {
//                 ...state,
//                 balance: state.balance + action.payload,
//                 is_loading: false,
//             };
//         case "account/witdraw":
//             return { ...state, balance: state.balance - action.payload };
//         case "account/converting_currency":
//             return { ...state, is_loading: true };

//         case "account/request_loan":
//             if (state.loan > 0) {
//                 return state;
//             }
//             return {
//                 ...state,
//                 loan: action.payload.amount,
//                 loanPurpose: action.payload.purpose,
//                 balance: state.balance + action.payload.amount,
//             };

//         case "account/pay_loan":
//             if (state.loan < 0) {
//                 return state;
//             }
//             return {
//                 ...state,
//                 loan: 0,
//                 loanPurpose: "",
//                 balance: state.balance - state.loan,
//             };

//         default:
//             return state;
//     }
// };

export function deposit(amount, currency) {
    if (currency === "USD") {
        return { type: "account/deposit", payload: amount, is_loading: false };
    }

    return async function (dispatch, getState) {
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

        console.log(store.getState());
    };
}

// export function witdraw(amount) {
//     return { type: "account/witdraw", payload: amount };
// }

// export function request_loan(amount, purpose) {
//     return { type: "account/request_loan", payload: { amount, purpose } };
// }

// export function pay_loan() {
//     return { type: "account/pay_loan" };
// }

// export default account_reducer;
