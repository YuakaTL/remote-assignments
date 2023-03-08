const Input = ({ register, errors, id, labelText, type, rules }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {labelText}
      </label>
      <input
        className={`form-control ${errors[id] && "is-invalid"}`}
        type={type}
        id={id}
        placeholder={id}
        {...register(id, rules)}
      />
      {errors[id] && (
        <div className="invalid-feedback"> {errors?.[id]?.message} </div>
      )}
    </div>
  );
};

export default Input;