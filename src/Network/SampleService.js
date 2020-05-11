import request from './Request';

function createBook(data){
  return request({
    url:    `/books`,
    method: 'POST',
    data:data,
  });
}

const OrderService = {
    createBook
}

export default OrderService;