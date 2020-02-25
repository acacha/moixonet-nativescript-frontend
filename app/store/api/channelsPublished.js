import { myAxios as httpClient } from '../../plugins/axios'

export default {
  index () {
    return httpClient.get('/published_channels')
  },
  show (channel) {
    return httpClient.get('/published_channels/' + channel.id)
  },
  search(textToSearch) {
    const url = '/channels/published/search/' + textToSearch
    console.log('URL:')
    console.log(url)
    return httpClient.get(url)
  }
}
