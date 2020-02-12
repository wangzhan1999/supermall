import {request} from "./request"

export function getCategory() {
  return request({
    url: "/category"
  }).catch(err => err)
}

export function getSubcategory(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  }).catch(err => err)
}

export function getCategoryDetail(miniWallkey, type) {
  return axios({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  }).catch(err => err)
}