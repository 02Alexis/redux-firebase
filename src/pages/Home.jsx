import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutActionAsync } from "../redux/actions/userActions";
import Card from "react-bootstrap/Card";

function Home() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log("usuario ingresado ", user);

  return (
    <div className="p-5">
      <h3>Home</h3>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user?.avatar} />
        <Card.Body>
          <Card.Title>{user?.name}</Card.Title>
        </Card.Body>
      </Card>

      <button onClick={() => dispatch(logoutActionAsync())}>
        Cerrar Sesion
      </button>
    </div>
  );
}

export default Home;
