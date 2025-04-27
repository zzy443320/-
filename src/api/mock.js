import Mock from 'mockjs' 

import homeTableApi from './mockData/homeTable.js'
import driverDataApi from './mockData/driverData.js'
import fleetDataApi from './mockData/fleetData.js'
import calendarDataApi from './mockData/calendarData.js'
import trackDataApi from './mockData/trackData.js'
import newsDataApi from './mockData/newsData.js'
import userDataApi from './mockData/userData.js'

Mock.mock(/api\/home\/getTableData/, "get", homeTableApi.getTableData)
Mock.mock(/api\/home\/getDriverData/, "get", driverDataApi.getDriverData)
Mock.mock(/api\/home\/getFleetData/, "get", fleetDataApi.getFleetData)
Mock.mock(/api\/home\/getCalendarData/, "get", calendarDataApi.getCalendarData)
Mock.mock(/api\/home\/getTrackData/, "get", trackDataApi.getTrackData)
Mock.mock(/api\/home\/getNewsData/, "get", newsDataApi.getNewsData)
Mock.mock(/api\/home\/getUserData/, "get", userDataApi.getUserData)
// Mock.mock(/api\/home\/addUser/, "post", userDataApi.addUser)
// Mock.mock(/api\/home\/login/, "post", userDataApi.login)