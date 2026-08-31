import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!username || !password) {
      setError("Please enter your username and password.");
      return;
    }

    // TODO: Connect this to your backend/API
    console.log("Username:", username);
    console.log("Password:", password);

    alert("Login successful!");
   navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Login Card */}
        <div className="login-card">

          {/* Logo */}
          <div className="logo-container">
            <img
              src="/CASA LOGO.png"
              alt="CASA Logo"
              className="casa-logo"
            />
          </div>

          {/* Title */}
          <div className="login-title">
            <h2>CASA</h2>
            <h1>DATA STORING CENTER</h1>
          </div>

          <form onSubmit={handleLogin}>

            {/* Username */}
            <div className="form-group">
              <div className="label-row">
                <label htmlFor="username">Username</label>
                <span>ឈ្មោះអ្នកប្រើប្រាស់</span>
              </div>

              <div className="input-wrapper">
                <span className="input-icon">♙</span>

                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <span>លេខសម្ងាត់</span>
              </div>

              <div className="input-wrapper">
                <span className="input-icon">▣</span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? "◉" : "◌"}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && <div className="error-message">{error}</div>}

            {/* Login Button */}
            <button type="submit" className="login-button">
              <span>Login</span>

              <span className="divider"></span>

              <span>ចូលប្រព័ន្ធ</span>

              <span className="arrow">→</span>
            </button>
          </form>

          {/* Help */}
          <div className="help-section">
            <span>ត្រូវការជំនួយ / </span>
            <span>Need Help?</span>
          </div>

          {/* Security Notice */}
          <div className="security-box">
            <div className="security-icon">♢</div>

            <div>
              <strong>Secure administrative portal.</strong>
              <p>
                Unauthorized access is strictly
                <br />
                prohibited and monitored.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="login-footer">
          <div className="footer-line"></div>

          <h3>Cambodian Agricultural Science Academy</h3>

          <p>បណ្ឌិត្យសភាវិទ្យាសាស្ត្រកសិកម្មកម្ពុជា</p>

          <small>
            © 2024 KINGDOM OF CAMBODIA • OFFICIAL ADMINISTRATIVE PORTAL
          </small>
        </footer>

      </div>
    </div>
  );
}

export default Login;