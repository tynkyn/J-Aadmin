import request from '@/utils/request'

export function page(query) {
  return request({
    url: '/groupType/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/groupType',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/groupType/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/groupType/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: '/groupType/' + id,
    method: 'put',
    data: obj
  })
}
