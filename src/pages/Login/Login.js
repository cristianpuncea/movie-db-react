import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({handleLoginStatus}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const savedToken = localStorage.getItem("token");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          handleLoginStatus(true);
          navigate("/account");
        }
        if (data.error) {
          setLoginError("Wrong email or password.");
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (savedToken) {
      handleLoginStatus(true);
      navigate("/account");
    }
  });

  return (
    <Row className="justify-content-center py-4">
      <Col sm="auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-danger fst-italic lh-5">{loginError}</Form.Text>
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
