import LoginForm from "../components/LoginForm";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const user = useSelector((state) => state.auth.user);

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="loginPageContainer">
      <div className="loginPageContent">
        <h1 className="loginPageTitle">Hosgeldiniz!</h1>
        <h2 className="loginPageSecondTitle">
          Todo app uygulamasına hoşgeldiniz! Lütfen <br /> kullanici adinizi giriniz!
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
