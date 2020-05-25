import request from './Request';

function getCurrentBorrowings(){
  return request({
    url:    `/book/0`,
    method: 'GET',
  });
}

const UserService = {
    getCurrentBorrowings
}

export default UserService;