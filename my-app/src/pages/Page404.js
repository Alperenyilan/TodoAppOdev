import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="page404Container">
      <div className="page404Content">
        <div className="page404TitleSection">
          <h1 className="page404Title">404</h1>
          <p className="page404SecondTitle">Sayfa Bulunamadi</p>
        </div>
        <Link to="/" className="page404HomeButton">
          Anasayfaya Git!
        </Link>
      </div>
    </div>
  );
}

export default Page404;
