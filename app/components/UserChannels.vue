<template>
  <app-user-channels :channels="channels" @leave="leave" @selected="selected" />
</template>

<script>
import ChannelDetails from '../pages/ChannelDetails'
import AppUserChannels from './AppUserChannels'
export default {
  name: 'UserChannels',
  components: {
    'app-user-channels': AppUserChannels
  },
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  methods: {
    leave () {
      // TODO CONFIRM DIALOG
      alert('Leaving channel').then(() => {
        console.log('Dialog closed')
      })

      // TODO -> Si es confirma vol sortir del canal eliminar de l'storage
    },
    selected (args) {
      console.log('SELECTED!')
      console.log('args:')
      console.log(args)
      this.$navigateTo(ChannelDetails, {
        props: {
          // TODO
          channel: {
            name: 'CACA'
          }
        }
      })
    }
  }
}
</script>
