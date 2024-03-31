

const initialState = {
  fullname: "",
  national_id: "",
  createdAt: "",
};

const customer_reducer = (state = initialState, action) => {
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

export function create_customer(fullname, national_id) {
  return {
    type: "customer/create_custumer",
    payload: { fullname, national_id, createdAt: new Date().toISOString() },
  };
}
export function update_name(fullname) {
  return {
    type: "customer/update_name",
    payload: { fullname },
  };
}

export default customer_reducer;

