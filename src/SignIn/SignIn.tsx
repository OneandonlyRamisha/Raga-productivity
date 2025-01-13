import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { useState } from "react";

export default function SignIn() {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // Handle input changes to update the state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogInData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form reload
    console.log("User Sign-In Data:", logInData); // Log or send the data

    try {
      const logInRes = await fetch(
        "https://raga-project-management-api.onrender.com/api/user/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(logInData),
        }
      );

      if (logInRes.ok) {
        const logData = await logInRes.json();

        localStorage.setItem("isLoggedIn", "true");

        navigate("/home");
      } else {
        const logError = await logInRes.json();
        console.log("awdasdawdas");
      }
    } catch (err) {
      console.log("network error");
    }
  };

  return (
    <section className="sign-up-section">
      <div className="sign-up-section-container">
        <h6 className="sign-logo">RAGA</h6>
        <h4 className="sign-up-header">Sign into your account</h4>
        {/* Add onSubmit to the form */}
        <form className="sign-up-form" onSubmit={handleSignInSubmit}>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              className="email-input"
              name="email"
              value={logInData.email}
              placeholder="johndoe@example.com"
              onChange={handleInputChange} // Track input changes
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              className="password-input"
              name="password"
              value={logInData.password}
              placeholder="********"
              onChange={handleInputChange} // Track input changes
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
