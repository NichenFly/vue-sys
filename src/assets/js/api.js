import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5962eeb29adc231f357c6bd5/sys'
axios.defaults.timeout = 5000

export default {
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params
    }).catch(function (err) {
      console.log(err)
    })
  },
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data
    }).catch(function (err) {
      console.log(err)
    })
  }
}
