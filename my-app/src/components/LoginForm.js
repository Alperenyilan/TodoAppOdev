import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/auth/authSlice";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    if (userName !== "") {
      dispatch(userLogin(userName));
      navigate("/");
    }
  };

  return (
    <form className="loginPageFormContainer" onSubmit={handleLoginUser}>
      <input
        className="loginPageInput"
        placeholder="Kullanici Adini giriniz"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="loginPageLoginButton">Giris</button>
    </form>
  );
}

export default LoginForm;
