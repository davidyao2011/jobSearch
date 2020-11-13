import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Search(props) {
  const [state, setState] = useState({
    description: "",
    location: "",
    full_time: false,
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    if (name === "full_time") {
      setState((pre) => ({ ...state, [name]: !pre.full_time }));
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(state);
    props.onSearch(state);
  };

  return (
    <div className="search-section">
      <Form className="search-form" onSubmit={handleSearch}>
        <Row>
          <Col>
            <Form.Group controlId="description">
              <Form.Control
                type="text"
                name="description"
                value={state.description || ""}
                placeholder="Enter search term"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="location">
              <Form.Control
                type="text"
                name="location"
                value={state.location || ""}
                placeholder="Enter location"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit" className="btn-search">
              Search Job
            </Button>
          </Col>
        </Row>

        <div className="filters">
          <Form.Group controlId="full_time">
            <Form.Check
              type="checkbox"
              name="full_time"
              className="full-time-checkbox"
              label="Full time Only"
              checked={state.full_time}
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}
