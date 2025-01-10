import { Link } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  return (
    <section className="sign-up-section">
      <div className="sign-up-section-container">
        <h6 className="sign-logo">RAGA</h6>
        <h4 className="sign-up-header">Sign into your account</h4>
        <form className="sign-up-form">
          <div className="form-item">
            <label htmlFor="userName">Email</label>
            <input
              required
              type="email"
              className="email-input"
              name="email"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              className="password-input"
              name="password"
              placeholder="********"
            />
          </div>

          <button className="cta submit-form-cta" type="submit">
            Sign in to your account
          </button>
        </form>
      </div>
      <div className="already-have-an-account-container">
        <p className="already-account">
          Don't have an account? <Link to="/sign up">Sign Up</Link>
        </p>
      </div>
    </section>
  );
}
