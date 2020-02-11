import { myAxios as httpClient } from '../../plugins/axios'

export default {
  index () {
    return httpClient.get('/published_channels')
  },
  show (channel) {
    return httpClient.get('/published_channels/' + channel.id)
  }
}
