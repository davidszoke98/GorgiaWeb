import request from './Request'

function getAllBooks(){
    return request({
        url:"/book",
        method:"GET"
    })
}

export default {
    getAllBooks
}