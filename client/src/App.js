import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import "./assets/App.css";
import Input from "./components/input";
import Alert from "./components/alert";
import "./assets/all.scss";

function App() {
  const [resData, setData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/users",
        data
      );
      setData(response);
    } catch (errors) {
      setData(errors.response);
    }
  };

  return (
    <form
      className="vh-100 container d-flex flex-column justify-content-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register}
        errors={errors}
        id="name"
        labelText="*Name"
        type="text"
        rules={{
          required: { value: true, message: "Name 為必填" },
          maxLength: 80,
          pattern: {
            value: /^[a-zA-Z0-9]+$/i,
            message: "只能包含英文字母和數字",
          },
        }}
      ></Input>

      <Input
        register={register}
        errors={errors}
        id="email"
        labelText="*Email"
        type="email"
        rules={{
          required: { value: true, message: "Email 為必填" },
          pattern: { value: /^\S+@\S+$/i, message: "Email 格式錯誤" },
        }}
      ></Input>

      <Input
        register={register}
        errors={errors}
        id="password"
        labelText="*Password"
        type="password"
        rules={{
          required: { value: true, message: "Password 為必填" },
          pattern: {
            value:
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-={}[\]:;'<>,.?\/]).*$/i,
            message: "密碼需符合大、小寫英文、數字、特殊符號（四選三）",
          },
        }}
      ></Input>

      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>

      {resData && <Alert data={resData} />}
      {resData && JSON.stringify(resData.data)}

    </form>
  );
}

export default App;
