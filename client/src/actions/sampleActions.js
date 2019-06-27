import { ADD_SAMPLE, DELETE_SAMPLE, GET_SAMPLES } from "./types";

export const getSamples = () => {
  return {
    type: GET_SAMPLES
  };
};

export const deleteSample = id => {
  return {
    type: DELETE_SAMPLE,
    payload: id
  };
};

export const addSample = name => {
  return {
    type: ADD_SAMPLE,
    payload: name
  };
};
