import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-form-box">
        <h2 className="login-title">Đăng nhập</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">
            Email hoặc Tên đăng nhập
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="login-input"
              required
            />
          </label>

          <label className="login-label">
            Mật khẩu
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="login-input"
              required
            />
          </label>

          <div className="login-options">
            <label className="login-remember">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Ghi nhớ
            </label>

            <button type="button" className="login-link-btn">
              Quên mật khẩu?
            </button>
          </div>

          <button type="submit" className="login-button">
            Đăng nhập
          </button>
        </form>

        <div className="login-social">
          <p>Hoặc đăng nhập bằng</p>
          <button type="button" className="login-google">Google</button>
        </div>

        <p className="login-note">Lưu ý: Facebook không còn hỗ trợ đăng nhập.</p>

        <p className="login-register-link">
          Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </p>
      </div>
    </div>
  );
}
