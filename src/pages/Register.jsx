import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
  return (
    <Form className="p-5">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Nombre" />
        {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su Email" />
        {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Ingrese una Contraseña" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirme la Contraseña" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ingrese un Avatar</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default Register;
