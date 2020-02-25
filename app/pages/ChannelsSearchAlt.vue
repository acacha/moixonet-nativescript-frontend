<template lang="html">
  <PageLayout title="Buscar canal" name="ChannelsSearchAlt">
    <StackLayout height="800">
      <TextField @textChange="search" @returnPress="search" v-model="textToSearch" hint="Enter text to search..." />
      <ListView for="foundChannel in foundChannels" @itemTap="onItemTap">
        <v-template>
          <Label :text="foundChannel.name" />
        </v-template>
      </ListView>
    </StackLayout>
  </PageLayout>
</template>

<script>
import api from '../store/api/channelsPublished'

export default {
  name: 'ChannelsSearchAlt',
  data () {
    return {
      textToSearch: '',
      foundChannels: []
    }
  },
  methods: {
    async search () {
      try {
        if (this.textToSearch === '') { return }
        const response = await api.search(this.textToSearch)
        console.log('Response:')
        console.log(response)
        console.log('Response.data:')
        console.log(response.data)
        if (response.data) this.foundChannels = response.data
      } catch (error) {
        console.log(error)
      }
    },
    onItemTap () {
      console.log('TODO')
    }
  }
}
</script>

<style lang="scss">
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles

</style>
