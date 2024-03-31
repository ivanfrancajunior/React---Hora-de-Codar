import { useSelector } from "react-redux";
function Customer() {
    const user = useSelector((store) => store.customer);
    return (
        <h2>
            {user.fullname === ""
                ? "Welcome!"
                : ` 👋 Welcome back, ${user.fullname}`}
        </h2>
    );
}

export { Customer };
