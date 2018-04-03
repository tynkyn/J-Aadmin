import request from '@/utils/request'

export function fetchTree(query) {
  return request({
    url: '/menu/tree',
    method: 'get',
    params: query
  })
}

export function fetchAll() {
  return request({
    url: '/menu/all',
    method: 'get'
  })
}

export function addObj(obj) {
  return request({
    url: '/menu',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/menu/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/menu/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: '/menu/' + id,
    method: 'put',
    data: obj
  })
}
