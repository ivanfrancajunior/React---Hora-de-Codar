const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        width: "100%",
        padding: "40px 20px",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
