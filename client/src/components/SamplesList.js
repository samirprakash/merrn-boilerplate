import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { addSample, deleteSample, getSamples } from "../actions/sampleActions";

class SamplesList extends Component {
  componentDidMount() {
    this.props.getSamples();
  }

  addSampleData = () => {
    const name = prompt("Enter Sample Name:");
    if (name) {
      this.props.addSample({ name: name });
    }
  };

  deleteSampleData = id => {
    this.props.deleteSample(id);
  };

  render() {
    const { samples } = this.props.sample;

    return (
      <Container>
        <Row className="col-md">
          <Button color="dark" onClick={this.addSampleData}>
            Add Sample
          </Button>
        </Row>

        <Row className="col-md">
          <ListGroup>
            {samples.map(({ _id, name }) => (
              <ListGroupItem key={_id}>
                {name}&nbsp;
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => this.deleteSampleData(_id)}
                >
                  &times;
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ sample: state.sample });
export default connect(
  mapStateToProps,
  { getSamples, deleteSample, addSample }
)(SamplesList);
