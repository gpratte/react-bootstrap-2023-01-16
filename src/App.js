import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import ParentHasState from "./ParentHasState";
import ParentNoState from "./ParentNoState";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import ParentHasContext from "./ParentHasContext";
import React from "react";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/">
            <Button variant="outline-secondary"> Home </Button>
          </Link>
          <Link to="/hasstate">
            <Button variant="outline-secondary"> Has State </Button>
          </Link>
          <Link to="/hascontext">
            <Button variant="outline-secondary"> Has Context </Button>
          </Link>
          <Link to="/nostate">
            <Button variant="outline-secondary"> No State </Button>
          </Link>
          <br/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/hasstate' element={<ParentHasState/>}/>
            <Route path='/hascontext' element={<ParentHasContext/>}/>
            <Route path='/nostate' element={<ParentNoState/>}/>
        </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
