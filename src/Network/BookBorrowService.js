import request from './Request';

function borrow(data){
  return request({
    url:    `/borrow`,
    method: 'POST',
    data:data,
  });
}

const BookBorrowService = {
  borrow
}

export default BookBorrowService;