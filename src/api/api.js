import request from "./request"

export default {
  getTableData() {
    return request({
      url: "/home/getTableData",
      method: "get",
      mock: true,
    })
  },
  getDriverData() {
    return request({
      url: "/home/getDriverData",
      method: "get",
      mock: true,
    })
  },
  getFleetData() {
    return request({
      url: "/home/getFleetData",
      method: "get",
      mock: true
    })
  },
  getCalendarData() {
    return request({
      url: "/home/getCalendarData",
      method: "get",
      mock: true
    })
  },
  getTrackData() {
    return request({
      url: "/home/getTrackData",
      method: "get",
      mock: true
    })
  },
  getNewsData() {
    return request({
      url: "/home/getNewsData",
      method: "get",
      mock: true
    })
  },
  getUserData() {
    return request({
      url: "/home/getUserData",
      method: "get",
      mock: true
    })
  },
  addUser(data) {
    return request({
      url: "/addUser",
      method: "post",
      mock: false,
      data
    })
  },
  login(data) {
    return request({
      url: "/login",
      method: "post",
      mock: false,
      data
    })
  },
}