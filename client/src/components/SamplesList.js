import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { addSample, deleteSample, getSamples } from "../actions/sampleActions";

class SamplesList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSamples();
  }

  addSampleData = () => {
    const name = prompt("Enter Sample Name:");
    if (name) {
      // this.setState(state => ({
      //   samples: [...state.samples, { id: uuid(), name: name }]
      // }));
      this.props.addSample(name);
    }
  };

  deleteSampleData = id => {
    // this.setState(state => ({
    //   samples: state.samples.filter(sample => sample.id !== id)
    // }));
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

        <Row className="col-sm">
          <ListGroup>
            {samples.map(({ id, name }) => (
              <ListGroupItem key={id}>
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => this.deleteSampleData(id)}
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

const mapStateToProps = state => ({ sample: state.sample });
export default connect(
  mapStateToProps,
  { getSamples, deleteSample, addSample }
)(SamplesList);
