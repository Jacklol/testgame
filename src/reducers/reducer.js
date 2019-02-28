import { GET_CITIES, GET_TEMPERATURE } from '../actions/types';

const initialState = {
  citiesHistoty: [],
  leftCityName: {},
  rightCityName: {},
  typeOfMeasure: 'Celsiy',
  leftTemp:null,
  rightTemp:null,
  cities: null,
  score: 0

};

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_CITIES:

      return {
        ...state,
        leftCityName: action.payload.leftCity,
        rightCityName: action.payload.rightCity,

      };
    case GET_TEMPERATURE:
    console.log( action.payload)
      return {
        ...state,
        rightTemp: action.payload.rightData.main.temp ,
        leftTemp:action.payload.leftData.main.temp ,
        cities: { 'leftName': state.leftCityName, 'rightName': state.rightCityName, 'leftTemp': action.payload.leftData.main.temp, 'rightTemp': action.payload.rightData.main.temp },
      };

    default:
      return state;
  }
}
