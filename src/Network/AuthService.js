import request from './Request';

function login(data){
  return request({
    url:    `/auth/login`,
    method: 'POST',
    data:data,
  });
}

const AuthService = {
  login
}

export default AuthService;