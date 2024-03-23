import { useState, useEffect, useReducer } from "react";

import { db } from "../firebase/config";

import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "INSERTED_DOCUMENT":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useInsertDocument = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  const checkCancelledBeforeDispatch = (action) => {
    if (isCancelled) return;

    dispatch(action);
  };

  const insertDocument = async (document) => {
    checkCancelledBeforeDispatch({ type: "LOADING" });
    try {
      const new_document = { ...document, createdAt: Timestamp.now() };

      const insertedDocment = await addDoc(
        collection(db, docCollection),
        new_document
      );

      checkCancelledBeforeDispatch({
        type: "INSERTED_DOCUMENT",
        payload: insertedDocment,
      });
    } catch (error) {
      checkCancelledBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    setIsCancelled(true);
  }, []);

  return { response, insertDocument };
};
