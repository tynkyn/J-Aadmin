import request from '@/utils/request'

export function page(query) {
  return request({
    url: '/element/list',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/element',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/element/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/element/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: '/element/' + id,
    method: 'put',
    data: obj
  })
}
