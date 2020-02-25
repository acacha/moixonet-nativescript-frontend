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

const debounce = (func, wait, immediate) => {
  let timeout
  return function() {
    let context = this, args = arguments
    let later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

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
        // var myEfficientFn = debounce(function() {
        //   // All the taxing stuff you do
        // }, 250);
        //
        // window.addEventListener('resize', myEfficientFn);

        const response = await debounce(api.search(this.textToSearch),250)
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
