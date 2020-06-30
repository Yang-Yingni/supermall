//在这里对首页进行的网络请求
import {request} from "network/request.js"

export function getMultiData() {
  return request({
    url:'/home/multidata'
  })
}

export function getGoodsData( type, page ) {
  return request({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}