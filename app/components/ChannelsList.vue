<template
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://schemas.android.com/apk/res/android "
>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap" />
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        ios.position="left"
        @tap="onDrawerButtonTap"
      />
      <Label class="action-bar-title" text="CANALS PROVA" />
    </ActionBar>

    <StackLayout>
      <Button text="Refresh" @tap="refresh"></Button>
      <ListView for="channel in channels" @itemTap="onItemTap">
        <v-template>
          <Label :text="channel.name" />
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import SelectedPageService from '../shared/selected-page-service'
// import channelsFixture from '../../e2e/fixtures/channels'
import * as utils from '~/shared/utils'

export default {
  name: 'ChannelsList',
  data () {
    return {
      // channels: channelsFixture
      channels: []
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('Browse')
  },
  async created () {
    await this.refresh()
  },
  methods: {
    onDrawerButtonTap () {
      utils.showDrawer()
    },
    onItemTap () {
      console.log('ITEM TAP!')
    },
    async refresh () {
      try {
        const result = await this.$axios.get('/api/v1/channels')
        this.channels = result.data
        console.log('result:')
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  // Start custom common variables
  @import '~@nativescript/theme/scss/variables/blue';
  // End custom common variables

  // Custom styles
</style>
