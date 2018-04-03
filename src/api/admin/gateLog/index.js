import request from '@/utils/request'

export function page(query) {
  return request({
    url: '/gateLog/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/gateLog',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/gateLog/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/gateLog/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: '/gateLog/' + id,
    method: 'put',
    data: obj
  })
}
