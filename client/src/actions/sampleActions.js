import axios from "axios";
import { ADD_SAMPLE, DELETE_SAMPLE, GET_SAMPLES } from "./types";

export const getSamples = () => dispatch => {
  axios.get("/api/samples").then(res =>
    dispatch({
      type: GET_SAMPLES,
      payload: res.data
    })
  );
};

export const addSample = name => dispatch => {
  axios.post("/api/samples", name).then(res => {
    dispatch({
      type: ADD_SAMPLE,
      payload: res.data
    });
  });
};

export const deleteSample = id => dispatch => {
  axios.delete(`api/samples/${id}`).then(res =>
    dispatch({
      type: DELETE_SAMPLE,
      payload: id
    })
  );
};
