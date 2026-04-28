import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    console.log("Form submitted:", formData);

    navigate("/login");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Đăng ký tài khoản</h2>

        <p>
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </p>

        <label>
          Tên đăng nhập *
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>

        <label>
          Địa chỉ E-Mail *
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Mật khẩu *
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>

        <label>
          Xác nhận mật khẩu *
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>

        <div className="register-captcha">
          <input type="checkbox" required /> Tôi không phải là người máy
        </div>

        <button type="submit"><Link to="/login">Đăng Ký</Link></button>
      </form>
    </div>
  );
}