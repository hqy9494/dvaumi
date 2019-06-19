import fetch from 'dva/fetch';
import axios from 'axios'
import baseUrl from '../common/baseUrl';
// function parseJSON(response) {
//   return response.json();
// }

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }

//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error;
// }

fetch = (playload) => {
  let obj = {
    url: `${baseUrl.base}${playload.url}`,
    type: playload.method,
    headers:{
      Authorization: localStorage.getItem('token') || ""
  },
  }
  if(playload.data) obj.data = playload.data;
  if(playload.params) {
    let paramsList = Object.keys(playload.params).map(e=>`${e}=${playload.params[e]}`)
      obj.url = `${obj.url}?${paramsList.join('&')}`
  }
  return axios(obj)
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(playload) {
  return fetch(playload)
    // .then(checkStatus)
    // .then(parseJSON)
    // .then(data => ({ data }))
    // .catch(err => ({ err }));
}
