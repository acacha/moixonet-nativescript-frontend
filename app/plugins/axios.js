import Vue from 'nativescript-vue'
import axios from 'axios'
import { SnackBar } from 'nativescript-material-snackbar'
import store from '../store'
import * as mutations from '~/store/mutation-types'
// import httpAdapter from 'axios/lib/adapters/http'

const snackbar = new SnackBar()

export const baseUrl = 'https://moixonet.acacha.scool.cat'

// TOKEN EXPLOTACIO eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjViYmI3ZjhlN2I5MjAwYTAzZWIwOTYxMmIyNTExZWM0YzEwMmI2MzYwOTRiZjhiNjZkZWE3YzBlNDllZTdiNzQwN2MyMDY0MTMwZDhmNzA5In0.eyJhdWQiOiIyIiwianRpIjoiNWJiYjdmOGU3YjkyMDBhMDNlYjA5NjEyYjI1MTFlYzRjMTAyYjYzNjA5NGJmOGI2NmRlYTdjMGU0OWVlN2I3NDA3YzIwNjQxMzBkOGY3MDkiLCJpYXQiOjE1NzQ5NDU4MjksIm5iZiI6MTU3NDk0NTgyOSwiZXhwIjoxNjA2NTY4MjI5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.BTq5xjAjNHpRalehIpEDvOiNcU15v6rKGl7b0iZG0N6YyQX-ulUdK9cbsmevpruw9eo_8zCwMcrbzw3nOzl-DpFnKT1y4xqhlJkS9Su_mBe5L4FrrRPJ2SFQotF_UN7u5fkdv2mRET3N5VecwZPVfd9tevnd5cZF9ypa41W3XCW3e0gUt1NYHmvcWGPf8PPfKmjZzz4qj--fkF83SNIWQTUtJF9dPO1MmYqe012CbLmsjqjGj5daW89D7f_-XHXGSkU6evUt1VITENVdwMc6Sc5Mf18Hs3WR6nlqqPV8Rhy76yiVVvXMUmH6SMfMWv05UCweSsI2aEhVnzrsbm3w6liEO0cg8kImWxkqo9rB_YB2RvRGQxaY9XLuEsGSDL5V0CbTMcMBwbbS5LV0bv3WZFNG3YJUPTuBtEdIFiZVxZ6wtVsul20byFWah17cicBsd4TATd-H1bgfSQ_IlpCI8gMfVHzmURRMRyEjPFTSrRL4Qhybp5v4Lz996QuPCytxf7MpiF-aqDCNPcsmG8NUmpwDHsB18xXdaLdfPOZmN4M6HHEDEbc-mJw60x13PiAlAqU_h0mnw4O6oPC7K0ntEC7S3EZDZEcrNSaDbL9P29EZT4dxbWN0R4mIfsY3Lg6JRE5Buyp-AxrOwWBeuCZx3oBKrXUp09_UmJ1fQCeESqo
const myAxios = axios.create({
  baseURL: baseUrl + '/api/v1',
  // adapter: httpAdapter,
  headers: {
    // Authorization: 'Bearer eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ0M2FhN2M1NTg5YmVkZDNiMTM0NThkYTYyYzNjNWFjM2EzMGY3MzhmNTU5MjAyYWU0MGQ5NzAyMmU1NTliMWNlZDEwMGY5OTU3Mjg3ZDU3In0.eyJhdWQiOiIxIiwianRpIjoiZDQzYWE3YzU1ODliZWRkM2IxMzQ1OGRhNjJjM2M1YWMzYTMwZjczOGY1NTkyMDJhZTQwZDk3MDIyZTU1OWIxY2VkMTAwZjk5NTcyODdkNTciLCJpYXQiOjE1ODAyMTU0MzgsIm5iZiI6MTU4MDIxNTQzOCwiZXhwIjoxNjExODM3ODM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.aGUcK_aLFUC9aTDI_u-V3cromEIzT9ZLgll09baotFB7KW9yXNInNoWz7RcvAbEKmiXGHU9fABNJpLy4mkax8P9jZkvb9vjj_ivw_vtFnKStgYaFgururrURDzUc7mo283ydfQ4I8jkofa5Kudv3lb13J11u2GSNYNOX7Yi8-CXo_4S0x0rdXcpNJB6vqN8Q4GQVXtSVx9tt6s7iSi-oJXmKtwGoSYFI2zGuMlQTByjjJe_MtHZM9M5bp8uv1BR-kGKz39tKtXwGdO2HKoZBn5ego6OBkcOATyKd06loJQeMtG9X07J_F8mMkqeoTzeJ9-vkai_Dcc5b85ScDc3TLy0EEGsfJBXAZFeG0LiuMZzc98wa4kC_nXniie6MBV0at07nazGT6J61nblO7z_Y1N-jU5teVJPm5ybCbIX4756Pru60qPFsg8TmLCtli_-JpC7W6suLVA2qwT6ozK9fYw0o_FrNHjU-nxzRw9DWtGB1jW_TY9dxLfnamiquRrRAuJsat6Qam14UKsUz2YePhgHldzwkpBPAsu_Rkv4uj_RgxNKTD9tiUN2Qaqj6Uq_n4b-tlpOuXmdYjjWkCita1DDSkQJ43cqSBRTMxZ-Bte3L1HTDzsKu5yLBAkTxTeTdaCWHUGGaTnD4vLwaXqSNydU0RbPW_0RpByUz_dGHqSM'
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg5ZDI4ODE4ZmY3MjdiMGVhNDZiMzI3YzZmNTM4MDRkZWExMjY4OWQ0MWI4MWMxNDg5ZDQ2NDlmMzA4NjUxN2M0NGUwOWIwODA1M2E4ZDU0In0.eyJhdWQiOiIxIiwianRpIjoiODlkMjg4MThmZjcyN2IwZWE0NmIzMjdjNmY1MzgwNGRlYTEyNjg5ZDQxYjgxYzE0ODlkNDY0OWYzMDg2NTE3YzQ0ZTA5YjA4MDUzYThkNTQiLCJpYXQiOjE1ODE0NDUwNzcsIm5iZiI6MTU4MTQ0NTA3NywiZXhwIjoxNjEzMDY3NDc3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JGknMTac4ICk53-8wxeKeiagjFmvPMACk19TjzyH7lrKs8oEN3IwA0Ji7f_ywWI2187QIRNHg01BzTPSP27BbVo0L3Dk-6fDPHGCZLGqf7hDcFtoMb_p3XhrS1XmLNd4PD52unjqMV_QuhuHsBbSVN6AHlCkEAgjETmmsG6V2pF-4v_9fkjsDR1_KbC12AqUzN3LSv0XxKI6AMbPpDCtJp2tUAeiTtChhXsDSNwDd1EUcbXvvJ0sCS3S3iCkcnwe1c2ZOsJysiVlaIDlN2KnR1Cu9ENopoXtPSslC7SSdY1VDdAc7dH_sNdadJe8R1VMbCS_fHSEB0N1nkbuh_K8isCvfLhDQaVUsOhzjgdtcSHmyi-CGjzQlWE7tc_R20E9toycW_fQU7wsxaNB4TSVCQ8QcEYYqGCcxKXNBzdZTMUhr0BrjMJ_QixvPA-J1CNpdVhL_UDC6fV012xBcgpjldR1GyPPwCnToJeqs5pQQeqsakm3BPq3THMi6MfzrVkCl7ckTNRB04FGGVjl_5hcKMKbT_RZmeE23ve2-XaCbuLwnQOEtuOWkmCxga7SdWP2eQWfEzV1Jmz-HgQqc68_KBXgyX7zuBTck-AJy50cagnqadRbsZ6ColLvrOqm-GsJJCv5GcNRWn004HRfl0MgeV4RA817pivxnDX_q9uKV_4'
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
  console.log(response)
  console.log('STATUS:')
  console.log(response.status)
  console.log('REQUEST:')
  console.log(response.request)
  store.commit('axios/' + mutations.SET, { key: 'loading', value: false })
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  store.commit('axios/' + mutations.SET, { key: 'loading', value: false })
  console.log('######### RESPONSE ERROR INTERCEPTED!!!!!!!!!!!!!!!')
  console.log('ERROR:')
  console.log(error)
  console.log('URL:')
  let response = error.response
  response.request.url
  // console.log('RESPONSE CONFIG:')
  // console.log(response.config)
  console.log('REQUEST:')
  console.log(response.request)
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
