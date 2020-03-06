import * as mutations from '../../mutation-types'
import * as actions from '../../action-types'
import * as getters from '../../getter-types'
import ChannelsService from '../../../services/ChannelsService'

import api from '../../api/channelsPublished'

export default {
  [actions.CHANNELS_INDEX] (context, channel) {
    return new Promise(async (resolve, reject) => {
      try {
        const logged = context.rootGetters[getters.LOGGED_IN]
        let channels = []
        if (logged) {
          console.log('loggedIn!')
          const response = await api.index()
          console.log('RESPONSE:')
          console.log(response)
          console.log('RESPONSE DATA:')
          console.log(response.data)
          channels = response.data
        } else {
          console.log('NOT loggedIn! TODO!!!!!!!!!!!!!!!')
          // SET NEW CHANNEL TO LOCAL STORAGE
        }
        console.log('hey!!!!!!!!!')
        console.log('channels:')
        console.log(channels)
        context.commit('SET', {
          key: 'list',
          value: channels
        })
        resolve(channels)
      } catch (error) {
        reject(error)
      }
    })
  },
  [actions.CHANNELS_STORE] (context, channel) {
    return new Promise(async (resolve, reject) => {
      try {
        // 2 OPCIONS -> 1) Usuari logat -> 2) Usuari no logat
        let channels = context.getters[getters.CHANNELS]
        const logged = context.getters[getters.LOGGED_IN]
        if (logged) {
          const response = await api.store(channel)
          channels.push(response)
        } else {
          channels.push(channel)
          // SET NEW CHANNEL TO LOCAL STORAGE
          ChannelsService.save(channels)
        }
        context.commit(mutations.SET, {
          list: channels
        })
        resolve(channels)
      } catch (error) {
        reject(error)
      }
    })
  }
}
