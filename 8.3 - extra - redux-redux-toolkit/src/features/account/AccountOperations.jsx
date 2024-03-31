import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, pay_loan, request_loan, witdraw } from "./accountSlice.js";
import store from "../../store";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const { is_loading } = useSelector((store) => store.account);
  
  function handleDeposit() {
    dispatch(deposit(depositAmount, currency ));
    // dispatch(deposit(depositAmount));
    setDepositAmount("");
    setCurrency("USD");
    console.log(store.getState());
  }

  function handleWithdrawal() {
    dispatch(witdraw(withdrawalAmount));
    setWithdrawalAmount("");
    console.log(store.getState());
  }

  function handleRequestLoan() {
    dispatch(request_loan(loanAmount, loanPurpose));
    setLoanPurpose("");
    setLoanAmount("");
    console.log(store.getState());
  }

  function handlePayLoan() {
    dispatch(pay_loan());
    console.log(store.getState());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button disabled={is_loading} onClick={handleDeposit}>
            {is_loading ? "carregando..." : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>Withdraw {withdrawalAmount}</button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        <div>
          <span>Pay back $X</span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
}

export { AccountOperations };
