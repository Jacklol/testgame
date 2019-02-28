import { GET_CITIES, GET_TEMPERATURE } from './types';




export const getCities = (leftCity, rightCity) => dispatch => {
  console.log(leftCity)
  console.log(rightCity)
  dispatch({
    type: GET_CITIES,
    payload: { leftCity, rightCity }
  });
};

export const getTemperature = (leftCity, rightCity) => dispatch => {
  console.log('here')
  console.log(leftCity)
  console.log(rightCity)
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${leftCity.name}&APPID=c900e1b50dd57f4c489f7f87da15ce29`)
    .then(response => response.json())
    .then(leftData =>
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${rightCity.name}&APPID=c900e1b50dd57f4c489f7f87da15ce29`)
        .then(response => response.json())
        .then(rightData =>
          dispatch({
            type: GET_TEMPERATURE,
            payload: { leftData, rightData }
          }))
    )
};