import React from "react";
import style from "./MyModuleCssComponent.module.css";
const MyModuleCssComponent = () => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>Este CSS foi estilizado de via module css</h1>
    </div>
  );
};

export default MyModuleCssComponent;
