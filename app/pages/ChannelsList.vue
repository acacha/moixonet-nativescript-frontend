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
      <Label class="action-bar-title" text="CANALS PROVA AA" />
    </ActionBar>

    <GridLayout>
      <StackLayout>
        <Button text="Refresh" @tap="refresh" />
        <Button text="loading" @tap="loading=true" />
        <Button text="unloading" @tap="loading=false" />
        <Label> Loading: {{ loading ? 'True': 'False'}}</Label>
        <ListView for="channel in channels" @itemTap="onItemTap">
          <v-template>
            <Label :text="channel.name" />
          </v-template>
        </ListView>
      </StackLayout>
      <GridLayout v-if="loading">
        <Label class="overlay">a</Label>
        <ActivityIndicator class="indicator" :busy="loading" @busyChange="onBusyChanged" />
      </GridLayout>
    </GridLayout>

    <!--    <GridLayout rows="auto, *">-->
    <!--&lt;!&ndash;      <Button row="0"  col="0" class="btn btn-primary btn-active" text="Modify Busy property" (tap)="onTap()"></Button>&ndash;&gt;-->
    <!--      <Button row="0" col="0" text="Refresh" @tap="refresh" />-->
    <!--      <ListView row="1" col="0" for="channel in channels" @itemTap="onItemTap">-->
    <!--        <v-template>-->
    <!--          <Label :text="channel.name" />-->
    <!--        </v-template>-->
    <!--      </ListView>-->
    <!--      <StackLayout row="0" col="0" rowSpan="2" class="loading">-->
    <!--        <ActivityIndicator row="1" class="activity-indicator" width="100" height="100" busy="true"></ActivityIndicator>-->
    <!--      </StackLayout>-->

    <!--    </GridLayout>-->
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
      channels: [],
      loading: true
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('Browse')
  },
  async created () {
    await this.refresh()
  },
  methods: {
    onBusyChanged (args) {
      const indicator = args.object
      console.log('indicator.busy changed to: ' + indicator.busy)
    },
    onDrawerButtonTap () {
      utils.showDrawer()
    },
    onItemTap () {
      console.log('ITEM TAP!')
    },
    async refresh () {
      this.loading = true
      try {
        const result = await this.$axios.get('/api/v1/channels')
        this.channels = result.data
        console.log('result:')
        console.log(result)
      } catch (error) {
        console.log(error)
      }
      // this.loading = false
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
