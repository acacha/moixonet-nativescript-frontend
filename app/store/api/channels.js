import { myAxios as instance } from '../../plugins/axios'

export default {
  index () {
    console.log('HEY! index api channels is called!')
    return instance.get('/channels')
  },
  store (channel) {
    return instance.post('/channels', channel)
  },
  destroy (channel) {
    return instance.delete('/channels/' + channel.id)
  },
  update (channel) {
    return instance.put('/channels/' + channel.id, channel)
  }
}
