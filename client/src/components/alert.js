const Alert = ({ data }) => {
  return (
    <div
      className={`alert ${
        data.status === 200 ? "alert-success" : "alert-danger"
      }  mt-3`}
      role="alert"
    >
      {" "}
      {data.data.message}{" "}
    </div>
  );
};

export default Alert;
