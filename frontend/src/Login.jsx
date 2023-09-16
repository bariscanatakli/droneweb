import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        // Redirect to the home page
        const navigate = useNavigate();
        navigate("/dashboard");
      }
    } catch (error) {
      // Show an error message
      console.log(error);
    }
  };
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <p className="small mb-3 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              {/* <Link to="/dashboard"> */}
                <MDBBtn
                  onClick={handleLogin}
                  outline
                  className="mx-2 px-5"
                  color="white"
                  size="lg"
                >
                  Login
                </MDBBtn>
              {/* </Link> */}

              <div className="d-flex flex-row mt-3 mb-5">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="text-white-50 fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
  // return (
  //   <Form>
  //     <Form.Group controlId="username">
  //       <Form.Label>Username</Form.Label>
  //       <Form.Control
  //         type="text"
  //         placeholder="Enter your username"
  //         value={username}
  //         onChange={(e) => setUsername(e.target.value)}
  //       />
  //     </Form.Group>
  //     <Form.Group controlId="password">
  //       <Form.Label>Password</Form.Label>
  //       <Form.Control
  //         type="password"
  //         placeholder="Enter your password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //     </Form.Group>
  //     <Button variant="primary" onClick={handleLogin}>
  //       Login
  //     </Button>
  //   </Form>

  // );
};

export default Login;
