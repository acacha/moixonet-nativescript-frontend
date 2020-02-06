import { myAxios as httpClient } from '../../plugins/axios'

export default {
  index () {
    return httpClient.get('/channels')
  },
  store (channel) {
    return httpClient.post('/channels', channel)
  },
  destroy (channel) {
    return httpClient.delete('/channels/' + channel.id)
  },
  update (channel) {
    return httpClient.put('/channels/' + channel.id, channel)
  }
}
