import faker from "faker";
import React, { Component } from "react";
import { Button, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import uuid from "uuid";

class SamplesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      samples: [
        { id: uuid(), name: faker.name.firstName() },
        { id: uuid(), name: faker.name.firstName() },
        { id: uuid(), name: faker.name.firstName() }
      ]
    };
  }

  addSample = () => {
    const name = prompt("Enter Sample Name:");
    if (name) {
      this.setState(state => ({
        samples: [...state.samples, { id: uuid(), name: name }]
      }));
    }
  };

  deleteSample = id => {
    this.setState(state => ({
      samples: state.samples.filter(sample => sample.id !== id)
    }));
  };

  render() {
    const { samples } = this.state;

    return (
      <Container>
        <Row className="col-md">
          <Button color="dark" onClick={this.addSample}>
            Add Sample
          </Button>
        </Row>

        <Row className="col-sm">
          <ListGroup>
            {samples.map(({ id, name }) => (
              <ListGroupItem key={id}>
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => this.deleteSample(id)}
                >
                  X&nbsp;
                </Button>
                {name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default SamplesList;
