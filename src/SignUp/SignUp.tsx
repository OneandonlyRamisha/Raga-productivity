import { Link } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
export default function SignUp() {
  const signUpErrorMessages = {
    usrnameError:
      "Username must be 5-24 characters - No space allowed just . and _",
    passwordError:
      "Password must be more than 8 characters and must include at least 1 number",
    passwordDontMatch: "Passwords Don't Match",
  };

  const passwrodCheckerumber = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];

  const userNameChecker = [
    " ",
    "-",
    "/",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "&",
    "*",
    "(",
    ")",
    "+",
    "=",
    ",",
    "<",
    ">",
    "?",
    "`",
    "~",
    "'",
    '"',
  ];

  const [signUpData, setSignUpData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Get input field's name and value
    setSignUpData((prevData) => ({
      ...prevData, // Keep other fields unchanged
      [name]: value, // Update the specific field
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(signUpData);
    if (signUpData.password !== signUpData.repeatPassword) {
      console.log("a");
    } else {
      console.log("ads");
    }
  }

  return (
    <>
      <section className="sign-up-section">
        {/* <SigninSignUpNav /> */}
        <div className="sign-up-section-container">
          <div className="sign-up-container">
            <h6 className="sign-logo">RAGA</h6>
            <h4 className="sign-up-header">Create new account</h4>

            <form
              onSubmit={handleSubmit}
              method="post"
              className="sign-up-form"
            >
              <div className="form-item">
                <label htmlFor="name">Full Name</label>
                <input
                  required
                  type="text"
                  className="name-input"
                  name="name"
                  placeholder="John Doe"
                  value={signUpData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="userName">Username</label>
                <input
                  required
                  type="text"
                  className="username-input"
                  name="userName"
                  placeholder="John.Doe"
                  value={signUpData.userName}
                  onChange={handleChange}
                />

                <p
                  className="error-messages"
                  style={
                    signUpData.userName.length <= 24 &&
                    signUpData.userName.length >= 5 &&
                    userNameChecker.every(
                      (sym) => !signUpData.userName.includes(sym)
                    )
                      ? { opacity: 0 }
                      : { opacity: 1 }
                  }
                >
                  {signUpErrorMessages.usrnameError}
                </p>
              </div>
              <div className="form-item">
                <label htmlFor="userName">Email</label>
                <input
                  required
                  type="email"
                  className="email-input"
                  name="email"
                  placeholder="johndoe@example.com"
                  value={signUpData.email}
                  onChange={handleChange}
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
                  value={signUpData.password}
                  onChange={handleChange}
                />
                <p
                  className="error-messages"
                  style={
                    signUpData.password.length > 7 &&
                    passwrodCheckerumber.some((number) =>
                      signUpData.password.includes(number)
                    )
                      ? { opacity: 0 }
                      : { opacity: 1 }
                  }
                >
                  {signUpErrorMessages.passwordError}
                </p>
              </div>

              <div className="form-item">
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input
                  required
                  type="password"
                  className="password-input"
                  name="repeatPassword"
                  placeholder="********"
                  value={signUpData.repeatPassword}
                  onChange={handleChange}
                />
                <p
                  className="error-messages"
                  style={
                    signUpData.password === signUpData.repeatPassword
                      ? { opacity: 0 }
                      : { opacity: 1 }
                  }
                >
                  {signUpErrorMessages.passwordDontMatch}
                </p>
              </div>
              <button className="cta submit-form-cta" type="submit">
                Create An Account
              </button>
            </form>
          </div>
        </div>
        <div className="already-have-an-account-container">
          <p className="already-account">
            Already have an account? <Link to="sign in">Sign in</Link>{" "}
          </p>
        </div>
      </section>
    </>
  );
}

function SigninSignUpNav() {
  return (
    <nav className="sign-nav">
      <Link to="/" className="nav-item">
        Home
      </Link>
    </nav>
  );
}
