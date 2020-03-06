<template>
  <StackLayout>
    <template v-if="length > 0">
      <app-user-channels :channels="channels" @leave="leave" @selected="selected" />
    </template>
    <channels-no-items v-else></channels-no-items>
  </StackLayout>
</template>

<script>
import ChannelDetails from '../../pages/ChannelDetails'
import AppUserChannels from './AppUserChannels'
import ChannelsNoItems from './ChannelsNoItems'
import * as actions from '../../store/action-types'
import * as getters from '../../store/getter-types'

export default {
  name: 'UserChannels',
  components: {
    'app-user-channels': AppUserChannels,
    'channels-no-items': ChannelsNoItems
  },
  computed: {
    length () {
      return this.channels && this.channels.length
    },
    channels() {
      // console.log('getters.CHANNELS: ')
      // console.log(getters.CHANNELS)
      return this.$store.getters[getters.CHANNELS]
    }
  },
  methods: {
    leave (channel) {
      // this.$store.dispatch(actions.LEAVE_CHANNEL, channel)
    },
    selected (channel) {
      this.$navigateTo(ChannelDetails, {
        props: {
          channel
        }
      })
    }
  }
}
</script>
