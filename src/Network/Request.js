import axios from 'axios';
/**
 * Request Wrapper with default success/error actions
 */
var baseApiAddress="http://localhost:80/api";

const request = async function (options) {

  const client = axios.create({
    baseURL: baseApiAddress,
  });

  const onSuccess = function (response) {
    return response.data;
  }

  const onError = function (error) {

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx

    } else {
      // Something else happened while setting up the request
      // triggered the error
    }

    return Promise.reject(error.response || error.message);
  }


  return client(options)
    .then(onSuccess)
    .catch(onError);
}

export default request;