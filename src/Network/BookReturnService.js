import request from './Request';

function returnBook(data){
  return request({
    url:    `/return`,
    method: 'POST',
    data:data,
  });
}

const BookReturnService = {
  returnBook
}

export default BookReturnService;