import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRegisterData } from "../api/register-page";
import "../stylesheets/register.css";

export default function RegisterPage() {
  const [registerData, setRegisterData] = useState(null);
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const loadingData = async () => {
      try {
        const data = await getRegisterData();
        setRegisterData(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    loadingData();
    window.scrollTo(0, 0);
  }, []);

  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(registerData.confirm_password_message);
  };

  return (
    registerData && (
      <div className="register_page wrapper">
        <div className="container">
          <div className="content">
            <h3 className="title">{registerData.title}</h3>
            <p className="subtitle">{registerData.subtitle}</p>
          </div>

          <div className="register_login">
            <Link to="/register" className="reg_log active">
              {registerData.register_btn_text}
            </Link>
            <Link to="/login" className="reg_log">
              {registerData.login_btn_text}
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            {registerData.form_fields.map((field) => (
              <div
                key={field.id}
                className={`form_group ${["country", "city", "region", "post_code"].includes(
                  field.name
                )
                    ? "half"
                    : ""
                  }`}
              >
                <label htmlFor={field.name}>
                  {field.label}
                  {field.required && <span> *</span>}
                </label>

                <div className="input_with_icon">
                  <input
                    type={
                      field.field_type === "password" && showPassword
                        ? "text"
                        : field.field_type
                    }
                    id={field.id}
                    name={field.name}
                    required={field.required}
                    value={formData[field.name] || ""}
                    onChange={onChangeInput}
                  />

                  {field.field_type === "password" && (
                    <span
                      className="toggle_pass"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <img
                        src={
                          showPassword
                            ? "/images/eye-regular-full.svg"
                            : "/images/eye-slash-regular-full.svg"
                        }
                        alt="toggle password"
                        className="eye_icon"
                      />
                    </span>
                  )}
                </div>
              </div>
            ))}

            <button type="submit" className="btn">
              {registerData.register_btn_text}
            </button>
          </form>

          <div className="social_register">
            <h3>{registerData.other_method_out_field}</h3>
            <div className="line"></div>
            <div className="socials">
              <div className="btn soc_icon">
                <a href="#">
                  <img src="/images/users/icon-facebook.svg" alt="social icon" />
                </a>
              </div>

              <div className="btn soc_icon">
                <a href="#">
                  <img src="/images/users/icon-google.svg" alt="social icon" />
                </a>
              </div>

              <div className="btn soc_icon">
                <a href="#">
                  <img src="/images/users/icon-apple.svg" alt="social icon" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  );
}
