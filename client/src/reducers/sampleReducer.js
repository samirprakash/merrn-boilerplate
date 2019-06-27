import faker from "faker";
import uuid from "uuid";
import { ADD_SAMPLE, DELETE_SAMPLE, GET_SAMPLES } from "../actions/types";

const initialState = {
  samples: [
    { id: uuid(), name: faker.name.firstName() },
    { id: uuid(), name: faker.name.firstName() },
    { id: uuid(), name: faker.name.firstName() }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SAMPLES:
      return { ...state };
    case DELETE_SAMPLE:
      return {
        ...state,
        samples: state.samples.filter(sample => sample.id !== action.payload)
      };
    case ADD_SAMPLE:
      return {
        ...state,
        samples: [...state.samples, { id: uuid(), name: action.payload }]
      };
    default:
      return state;
  }
}
