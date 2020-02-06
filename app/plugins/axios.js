import Vue from 'nativescript-vue'
import axios from 'axios'
import { SnackBar } from 'nativescript-material-snackbar'
import store from '../store'
import * as mutations from '~/store/mutation-types'
// import httpAdapter from 'axios/lib/adapters/http'

const snackbar = new SnackBar()

// TOKEN EXPLOTACIO eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjViYmI3ZjhlN2I5MjAwYTAzZWIwOTYxMmIyNTExZWM0YzEwMmI2MzYwOTRiZjhiNjZkZWE3YzBlNDllZTdiNzQwN2MyMDY0MTMwZDhmNzA5In0.eyJhdWQiOiIyIiwianRpIjoiNWJiYjdmOGU3YjkyMDBhMDNlYjA5NjEyYjI1MTFlYzRjMTAyYjYzNjA5NGJmOGI2NmRlYTdjMGU0OWVlN2I3NDA3YzIwNjQxMzBkOGY3MDkiLCJpYXQiOjE1NzQ5NDU4MjksIm5iZiI6MTU3NDk0NTgyOSwiZXhwIjoxNjA2NTY4MjI5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.BTq5xjAjNHpRalehIpEDvOiNcU15v6rKGl7b0iZG0N6YyQX-ulUdK9cbsmevpruw9eo_8zCwMcrbzw3nOzl-DpFnKT1y4xqhlJkS9Su_mBe5L4FrrRPJ2SFQotF_UN7u5fkdv2mRET3N5VecwZPVfd9tevnd5cZF9ypa41W3XCW3e0gUt1NYHmvcWGPf8PPfKmjZzz4qj--fkF83SNIWQTUtJF9dPO1MmYqe012CbLmsjqjGj5daW89D7f_-XHXGSkU6evUt1VITENVdwMc6Sc5Mf18Hs3WR6nlqqPV8Rhy76yiVVvXMUmH6SMfMWv05UCweSsI2aEhVnzrsbm3w6liEO0cg8kImWxkqo9rB_YB2RvRGQxaY9XLuEsGSDL5V0CbTMcMBwbbS5LV0bv3WZFNG3YJUPTuBtEdIFiZVxZ6wtVsul20byFWah17cicBsd4TATd-H1bgfSQ_IlpCI8gMfVHzmURRMRyEjPFTSrRL4Qhybp5v4Lz996QuPCytxf7MpiF-aqDCNPcsmG8NUmpwDHsB18xXdaLdfPOZmN4M6HHEDEbc-mJw60x13PiAlAqU_h0mnw4O6oPC7K0ntEC7S3EZDZEcrNSaDbL9P29EZT4dxbWN0R4mIfsY3Lg6JRE5Buyp-AxrOwWBeuCZx3oBKrXUp09_UmJ1fQCeESqo
const myAxios = axios.create({
  baseURL: 'https://moixonet.acacha.scool.cat/api/v1',
  // adapter: httpAdapter,
  headers: {
    // Authorization: 'Bearer eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ0M2FhN2M1NTg5YmVkZDNiMTM0NThkYTYyYzNjNWFjM2EzMGY3MzhmNTU5MjAyYWU0MGQ5NzAyMmU1NTliMWNlZDEwMGY5OTU3Mjg3ZDU3In0.eyJhdWQiOiIxIiwianRpIjoiZDQzYWE3YzU1ODliZWRkM2IxMzQ1OGRhNjJjM2M1YWMzYTMwZjczOGY1NTkyMDJhZTQwZDk3MDIyZTU1OWIxY2VkMTAwZjk5NTcyODdkNTciLCJpYXQiOjE1ODAyMTU0MzgsIm5iZiI6MTU4MDIxNTQzOCwiZXhwIjoxNjExODM3ODM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.aGUcK_aLFUC9aTDI_u-V3cromEIzT9ZLgll09baotFB7KW9yXNInNoWz7RcvAbEKmiXGHU9fABNJpLy4mkax8P9jZkvb9vjj_ivw_vtFnKStgYaFgururrURDzUc7mo283ydfQ4I8jkofa5Kudv3lb13J11u2GSNYNOX7Yi8-CXo_4S0x0rdXcpNJB6vqN8Q4GQVXtSVx9tt6s7iSi-oJXmKtwGoSYFI2zGuMlQTByjjJe_MtHZM9M5bp8uv1BR-kGKz39tKtXwGdO2HKoZBn5ego6OBkcOATyKd06loJQeMtG9X07J_F8mMkqeoTzeJ9-vkai_Dcc5b85ScDc3TLy0EEGsfJBXAZFeG0LiuMZzc98wa4kC_nXniie6MBV0at07nazGT6J61nblO7z_Y1N-jU5teVJPm5ybCbIX4756Pru60qPFsg8TmLCtli_-JpC7W6suLVA2qwT6ozK9fYw0o_FrNHjU-nxzRw9DWtGB1jW_TY9dxLfnamiquRrRAuJsat6Qam14UKsUz2YePhgHldzwkpBPAsu_Rkv4uj_RgxNKTD9tiUN2Qaqj6Uq_n4b-tlpOuXmdYjjWkCita1DDSkQJ43cqSBRTMxZ-Bte3L1HTDzsKu5yLBAkTxTeTdaCWHUGGaTnD4vLwaXqSNydU0RbPW_0RpByUz_dGHqSM'
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBkMTZlOTMwZjc3Yzk3YzA1NjhiMzEwNTEyYWM4NDllZmRmNGUxN2Q1MzZjMDA2YTM2MjllNjQ2MzllMWUwMzc2ZTFkOGI1NTEzMTFmZjhjIn0.eyJhdWQiOiIxIiwianRpIjoiMGQxNmU5MzBmNzdjOTdjMDU2OGIzMTA1MTJhYzg0OWVmZGY0ZTE3ZDUzNmMwMDZhMzYyOWU2NDYzOWUxZTAzNzZlMWQ4YjU1MTMxMWZmOGMiLCJpYXQiOjE1ODA0MDgyNTMsIm5iZiI6MTU4MDQwODI1MywiZXhwIjoxNjEyMDMwNjUzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Ii6zRgQ3yCyg_t-qun-0Wv7SXQ6vB5eAeCPJqm6Wq5ATyd-0OxhyzqXF4tNSkQ6AOhNPj6IWVd3GSTeIPll1T7J6rXQsNrASOSrcrADLSYP4wFH7Y2d-f0LowRaPOLGon6Mye0YbWTDrW5VEJmTcq1yKs8Ycj_EGadstjxIP-K2naj1G-i17D0lmInY5d98JK4B0N7xnF4VHZ-4Yp-aarL-BWQp-IAXGlNwpactBEIFPyo4iYEkXtH5dyBqpBz2tyCO7dJ8bfzISL0SFOFeZToTSTmpsFB9fbPCH16w3z-DqfoQRhFiTihhO_IuMHf-9sQqGvp2z0ufqymn963buSJAyjq2iLIpHSphEnNkH_sEve5xGqJ9QsmqAQRBmoaSmnci_UKIJm9CyQxk2oNXmYDdVofSzkT05XHLlJD_t-dyVtrLqSuBUgsHqiCz3i35C7DXM1dLuC77BZXnS1O1BgCkhC2NLD2yKVVlbmMW7CXTn2oBuvAEe24CwD_DvnsjS7dA-tSFVZtFDKfudy7gnHb7MAg3W8XfaJLFNT7Gcwem_s0lOydk6Jl48bjdeqBkynpfjOr6K7yyGa5ezG64zxD9DWLiS1U1kMFTHrIDt_dlNNjvJjvFy1UMHVNgOeyzsWBNXOMXDwFcX3TQZ2Nu-3-HJa2tgefAwe5V-KCGx0lM'
  }
})

// INTERCEPTORS
// https://github.com/axios/axios#interceptors
myAxios.interceptors.request.use(function (config) {
  console.log('REQUEST INTERCEPTED!!!!!!!!!!!!!!!')
  // Do something before request is sent
  store.commit('axios/' + mutations.SET, { key: 'loading', value: true })
  return config
}, function (error) {
  // Do something with request error
  console.log('######### REQUEST ERROR INTERCEPTED!!!!!!!!!!!!!!!')
  console.log('ERROR:')
  console.log(error)
  snackbar.simple(error)
  return Promise.reject(error)
})

myAxios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log('RESPONSE INTERCEPTED!!!!!!!!!!!!!!!')
  console.log(response.status)
  store.commit('axios/' + mutations.SET, { key: 'loading', value: false })
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  store.commit('axios/' + mutations.SET, { key: 'loading', value: false })
  console.log('######### RESPONSE ERROR INTERCEPTED!!!!!!!!!!!!!!!')
  console.log('ERROR:')
  console.log(error)
  // https://github.com/axios/axios#handling-errors
  if (error.response) {
    console.log('CASE 1')
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data)
    console.log('## STATUS:')
    console.log(error.response.status)
    // console.log(error.response.headers)
    if (parseInt(error.response.status) === 401) {
      console.log('$$$$$$$$$$$ 401 $$$$$$$')
      snackbar.simple('YOU NEED TO RELOGIN!').then(
        result => console.log('Simple Snackbar:', result)
        // TODO SHOW PAGE LOGIN WHEN WE HAVE ONE
      )
    } else if (parseInt(error.response.status) === 403) {
      snackbar.simple('No teniu permisos per realitzar aquesta acció')
    } else {
      snackbar.action({
        message: 'ERROR AXIOS INTERCEPTED: ' + error,
        backgroundColor: 'red',
        actionText: 'Dismiss',
        hideDelay: 2000
      })
    }
  } else if (error.request) {
    console.log('CASE 2')
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request)
  } else {
    console.log('CASE 3')
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message)
  }
  // console.log(error.config)
  return Promise.reject(error)
})

// this helps WebStorm with autocompletion, otherwise it's not needed
Vue.prototype.$axios = myAxios

export { myAxios }

export default {
  install (Vue, options) {
    // Add Vue instance methods by attaching them to Vue.prototype.
    Vue.prototype.$axios = myAxios
  }
}
