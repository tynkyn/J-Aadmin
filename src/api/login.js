import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function logout(token) {
  return request({
    url: '/user/logout',
    method: 'post',
    params: { token }
  })
}

export function getInfo(token) {
  // console.log('999999999:------' + token)
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function getMenus(token) {
  return fetch({
    url: '/user/menus',
    method: 'get',
    params: { token }
  })
}
