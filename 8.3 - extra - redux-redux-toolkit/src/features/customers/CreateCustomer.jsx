import { useState } from "react";
import { useDispatch } from "react-redux";
import { create_customer } from "./customerSlice";
import store from "../../store";

function CreateCustomer() {
    const [fullName, setFullName] = useState("");
    const [national_id, setNational_Id] = useState("");

    const dispatch = useDispatch();

    function handleClick() {
        if (!fullName) return;

        if (!national_id) return;

        dispatch(create_customer(fullName, national_id));

        setFullName("");
        setNational_Id("");

        console.log(store.getState());
    }

    return (
        <div>
            <h2>Create new customer</h2>
            <div className="inputs">
                <div>
                    <label>Customer full name</label>
                    <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div>
                    <label>National ID</label>
                    <input
                        value={national_id}
                        onChange={(e) => setNational_Id(e.target.value)}
                    />
                </div>
                <button onClick={handleClick}>Create new customer</button>
            </div>
        </div>
    );
}

export { CreateCustomer };
