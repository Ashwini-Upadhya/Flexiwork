import { Button } from "@mui/material";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="container w-100 justify-content-center">
        <div class="card w-75 text-center d-flex m-8 justify-content-center">
          <div class="card-body text-centerr">
            <div className="container-fluid text-center">
              <a className="navbar-logo" href="#">
                <span style={{ color: "#333" }}>Flexi</span>Work
              </a>
            </div>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control W-25"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Terms and conditions
                </label>
              </div>
            <Button
                type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#0d6efd", color: "white" }}
            >
              Login
            </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
