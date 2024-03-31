import { useSelector } from "react-redux";

function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
    }).format(value);
}

function BalanceDisplay() {
    const total_amout = useSelector((store) => store.account.balance);
    return <div className="balance">{formatCurrency(total_amout)}</div>;
}

export { BalanceDisplay };
