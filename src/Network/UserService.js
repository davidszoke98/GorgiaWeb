import request from './Request';

function getCurrentBorrowings(){
  return request({
    url:    `/dummy/address`,
    method: 'GET',
  });
}

const UserService = {
    getCurrentBorrowings
}

export default UserService;