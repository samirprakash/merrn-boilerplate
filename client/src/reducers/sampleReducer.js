import { ADD_SAMPLE, DELETE_SAMPLE, GET_SAMPLES } from "../actions/types";

const initialState = {
  samples: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SAMPLES:
      return { ...state, samples: action.payload };
    case ADD_SAMPLE:
      return {
        ...state,
        samples: [...state.samples, action.payload]
      };
    case DELETE_SAMPLE:
      return {
        ...state,
        samples: state.samples.filter(sample => sample._id !== action.payload)
      };
    default:
      return state;
  }
}
