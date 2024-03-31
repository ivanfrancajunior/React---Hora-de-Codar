import { combineReducers, createStore } from "redux";

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

const account_reducer = (state = initialStateAccount, action) => {
    switch (action.type) {
        case "account/deposit":
            return { ...state, balance: state.balance + action.payload };
        case "account/witdraw":
            return { ...state, balance: state.balance - action.payload };

        case "account/request_loan":
            if (state.loan > 0) {
                return state;
            }
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };

        case "account/pay_loan":
            if (state.loan < 0) {
                return state;
            }
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            };

        default:
            return state;
    }
};

const initailStateCustomer = {
    fullname: "",
    national_id: "",
    createdAt: "",
};

function create_customer(fullname, national_id) {
    return {
        type: "customer/create_custumer",
        payload: { fullname, national_id, createdAt: new Date().toISOString() },
    };
}
function update_name(fullname) {
    return {
        type: "customer/update_name",
        payload: { fullname },
    };
}
const customer_reducer = (state = initailStateCustomer, action) => {
    switch (action.type) {
        case "customer/create_custumer":
            return {
                ...state,
                fullname: action.payload.fullname,
                national_id: action.payload.national_id,
                createdAt: action.payload.createdAt,
            };
        case "customer/update_name":
            return { ...state, fullname: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    acount: account_reducer,
    custumer: customer_reducer,
});

const store = createStore(rootReducer);

store.dispatch(create_customer("Jota Apenas", "123456789"));
console.log(store.getState());

//--------- with action creators usage ---------

function deposit(amount) {
    return { type: "account/deposit", payload: amount };
}
store.dispatch(deposit(500));
console.log(store.getState());

function witdraw(amount) {
    return { type: "account/witdraw", payload: amount };
}
store.dispatch(witdraw(200));
console.log(store.getState());

function request_loan(amount, purpose) {
    return { type: "account/request_loan", payload: { amount, purpose } };
}

store.dispatch(request_loan(1200, "buy a ride"));
console.log(store.getState());

function pay_loan() {
    return { type: "account/pay_loan" };
}
store.dispatch(pay_loan());
console.log(store.getState());
