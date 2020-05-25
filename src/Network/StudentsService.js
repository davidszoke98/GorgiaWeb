import request from './Request';

function getInfo(page){
  return request({
    url:    `/student/information/${page}`,
    method: 'GET',
  });
}

const StudentService = {
    getInfo
}

export default StudentService;