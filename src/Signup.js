import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

export default function Signup() {
  const history = useHistory();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (username && email && password) {
      let headersList = {
        "Content-Type": "application/json"
      };
      fetch("https://password-reset-email.herokuapp.com/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: headersList
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.username) {
            alert("Hi " + data.username + " !! You are signed in ");
            history.push("/login");
          } else if (data.keyValue.username) {
            console.log(data.keyValue.username);
            alert("User already exists");
          } else {
            console.log(data);
            alert(data.error);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please enter the fields");
    }
  };
  return (
    <div className="container-md forget-password">
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="text-center">
                <img
                  src="https://pic.onlinewebfonts.com/svg/img_221313.png"
                  alt="signup"
                  border="0"
                />
                <h2 className="text-center">Sign-Up</h2>
                <div autocomplete="off" className="form">
                  <br />
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        placeholder="User name"
                        className="form-control"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <br />
                    <div className="input-group">
                      <input
                        placeholder="Email id"
                        className="form-control"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <br />
                    <div className="input-group">
                      <input
                        placeholder="Password"
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="btn btn-lg btn-primary btn-block"
                      value="Signup"
                      type="button"
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
                Have an account ?
                <button
                  className="btn btn-success ml-4"
                  onClick={() => history.push("/login")}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}