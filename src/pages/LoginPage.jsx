import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLoginData } from "../api/login-page";
import Loading from "../components/loading";
import "../stylesheets/login.css";

export default function LoginPage() {
  const [loading, setLoading] = useState(true);
  const [loginData, setLoginData] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const loadingData = async () => {
      try {
        const data = await getLoginData();
        setLoginData(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    loadingData();
    window.scrollTo(0, 0);
  }, []);

  const onChangeInput = (target) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const submitHendler = async (e) => {
    e.preventDefault();
    console.log(formData);

  };

  if (loading) {
    return <Loading />
  }

  return loginData && (
    <div className="login_page wrapper">
      <div className="container">
        <div className="content">
          <h3 className="title">{loginData.title}</h3>
          <p className="subtitle">{loginData.subtitle}</p>
        </div>

        <div className="register_login">
          <Link to="/register" className="reg_log">
            {loginData.register_btn_text}
          </Link>
          <Link to="/login" className="reg_log active">
            {loginData.log_in_btn_text}
          </Link>
        </div>

        <form onSubmit={submitHendler}>
          <label className="form_label" htmlFor="email">
            {loginData.label_email}
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required="required"
            value={formData.email}
            onChange={(e) => onChangeInput(e.target)}
          />

          <label className="form_label" htmlFor="pass">
            {loginData.label_password}
          </label>
          <input
            name="password"
            type="password"
            id="pass"
            required="required"
            value={formData.password}
            onChange={(e) => onChangeInput(e.target)}
          />

          <button type="submit" className="btn">
            {loginData.log_in_btn_text}
          </button>
        </form>

        <div className="social_register">
          <h3>{loginData.other_method_out_field}</h3>
          <div className="line"></div>
          <div className="socials">
            <div className="btn soc_icon">
              <Link to="/">
                <img src="images/users/icon-facebook.svg" alt="social icon" />
              </Link>
            </div>
            
            <div className="btn soc_icon">
              <Link to="/">
                <img src="images/users/icon-google.svg" alt="social icon" />
              </Link>
            </div>
            
            <div className="btn soc_icon">
              <Link to="/">
                <img src="images/users/icon-apple.svg" alt="social icon" />
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
