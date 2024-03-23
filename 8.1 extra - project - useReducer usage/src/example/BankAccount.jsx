import { useReducer } from "react";
/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

const initialState = {
    balance: 0,
    loan: 0,
    isActive: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "OPEN_ACC":
            return { ...state, isActive: true, balance: 500 };
        case "DEPOSIT_150":
            return { ...state, isActive: true, balance: state.balance + 150 };
        case "WITHDRAW_50":
            return { ...state, isActive: true, balance: state.balance - 50 };
        case "LOAN_5000":
            return {
                ...state,
                isActive: true,
                balance: state.loan > 0 ? state.loan : state.balance + 5000,
                loan: 5000,
            };
        case "PAY_LOAN":
            const canPay = 5000;
            return {
                ...state,
                isActive: true,
                balance:
                    state.balance > canPay
                        ? state.balance - canPay
                        : state.balance,
                loan: 0,
            };
        case "CANCEL_ACCOUNT":
            const haveFounds = state.balance > 0;
            const haveLoan = state.loan > 0;

            return {
                ...state,
                isActive: haveFounds && haveLoan ? true : false,
            };
        default:
            throw new Error('Unknow action type.')
    }   
};

const BankAccount = () => {
    const [{ balance, loan, isActive }, dispacth] = useReducer(
        reducer,
        initialState
    );
    return (
        <div className="main">
            <h1>useReducer Bank Account</h1>
            <h3>
                {isActive
                    ? `Balance: $${balance}`
                    : `Avaliable only for bank costumers`}
            </h3>
            <h3 style={{ color: loan >= 0 ? "white" : "#eb6572" }}>
                {isActive
                    ? `Loan: $${loan}`
                    : `Avaliable only for bank costumers`}
            </h3>

            <h4>
                <button
                    className="btn"
                    onClick={() => {
                        dispacth({ type: "OPEN_ACC" });
                    }}
                    disabled={isActive}
                >
                    Open account
                </button>
            </h4>
            <h4>
                <button
                    className="btn"
                    onClick={() => {
                        dispacth({ type: "DEPOSIT_150" });
                    }}
                    disabled={isActive === true ? false : true}
                >
                    Deposit 150
                </button>
            </h4>
            <h4>
                <button
                    className="btn"
                    onClick={() => {
                        dispacth({ type: "WITHDRAW_50" });
                    }}
                    disabled={isActive === true ? false : true}
                >
                    Withdraw 50
                </button>
            </h4>
            <h4>
                <button
                    className="btn"
                    onClick={() => {
                        dispacth({ type: "LOAN_5000" });
                    }}
                    disabled={isActive === true ? false : true}
                >
                    Request a loan of 5000
                </button>
            </h4>
            <h4>
                <button
                    className="btn"
                    onClick={() => {
                        dispacth({ type: "PAY_LOAN" });
                    }}
                    disabled={isActive === true && loan > 0 ? false : true}
                >
                    Pay loan
                </button>
            </h4>
            <h4>
                <button
                    className="btn"
                    onClick={() => {
                        dispacth({ type: "CANCEL_ACCOUNT" });
                    }}
                    disabled={
                        isActive === true && loan <= 0 && balance === 0
                            ? false
                            : true
                    }
                >
                    Close account
                </button>
            </h4>
        </div>
    );
};

export default BankAccount;
