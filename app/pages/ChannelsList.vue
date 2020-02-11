<!--suppress SpellCheckingInspection, HtmlUnknownTarget -->
<template>
  <PageLayout title="CANALS PROVA" name="ChannelsList">
    <GridLayout>
      <StackLayout>
        <Button text="Refresh" @tap="refresh" />
        <Button text="loading" @tap="load" />
        <Button text="unloading" @tap="unload" />
        <Button text="snackbar 1" @tap="showSimpleSnackbar" />
        <Button text="snackbar 2" @tap="showActionSnackbar" />
        <Button text="snackbar 3" @tap="showColorfulSnackbar" />
        <Label @swipe="unsubscribe"> Loading: {{ loading ? 'True': 'False' }}</Label>
        <RadListView
          ref="listView"
          for="channel in channels"
          :swipeActions="true"
          :pullToRefresh="true"
          @itemTap="onItemTap"
          @itemSwipeProgressStarted="onSwipeStarted"
          @pullToRefreshInitiated="onPullToRefreshInitiated"
        >
          <v-template>
            <GridLayout rows="auto" columns="auto, *, auto">
              <Image row="0" col="0" :src="getImageUrl(channel)" class="thumb img-rounded m-l-10" />
              <StackLayout row="0" col="1">
                <Label class="list-group-item-heading">{{ channel.name }} ({{ channel.messages_number }})</Label>
                <Label :text="'Subscrit des de ' + channel.formatted_created_at_diff" text-wrap="true" class="list-group-item-text" />
              </StackLayout>
              <!--          // TODO -> BUTTON ACTION CAN BE MODIFIED USING SLOT. Per exemple subscriure en comptes de sortir del canal-->
              <Button col="2" text="Sortir" @tap="$emit('leave')" />
            </GridLayout>
          </v-template>

          <v-template name="itemswipe">
            <GridLayout columns="auto, *, auto" background-color="White">
              <Label></Label>
            </GridLayout>
          </v-template>
        </RadListView>
      </StackLayout>
      <GridLayout v-if="loading">
        <Label class="overlay" />
        <ActivityIndicator class="indicator" :busy="loading" />
      </GridLayout>
    </GridLayout>
  </PageLayout>
</template>

<script>
import { SnackBar } from 'nativescript-material-snackbar'
import SelectedPageService from '../shared/selected-page-service'
// import channelsFixture from '../../e2e/fixtures/channels'
import * as mutations from '../store/mutation-types'
import api from '../store/api/channelsPublished'
import * as utils from '~/shared/utils'
import {baseUrl} from '../plugins/axios'

const snackbar = new SnackBar()

export default {
  name: 'ChannelsList',
  data () {
    return {
      // channels: channelsFixture
      channels: []
    }
  },
  computed: {
    loading () {
      return this.$store.getters['axios/loading']
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('ChannelsList')
  },
  async created () {
    await this.refresh()
  },
  methods: {
    getImageUrl (channel) {
      const url = baseUrl + '/channels/published/' + channel.id + '/image'
      console.log(url)
      return url
    },
    onItemTap () {
      console.log('########## HEY!!!!!!!!!!!')
    },
    onSwipeStarted () {
      console.log('********************************************************* Swipe started')
      confirm('Esteu segurs que voleu sortir del canal?')
        .then((result) => {
          if (result) {
            console.log('TODO SORTIR')
            return
          }
          console.log('CANCEL!')
        })
    },
    async onPullToRefreshInitiated ({ object }) {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!! Pulling...');
      await this.refresh()
      object.notifyPullToRefreshFinished()
    },
    unsubscribe () {
      console.log('TODO UNSUBSCRIBE!!!')
    },
    unload () {
      this.$store.commit('axios/' + mutations.SET, { key: 'loading', value: false })
    },
    load () {
      this.$store.commit('axios/' + mutations.SET, { key: 'loading', value: true })
    },
    showSimpleSnackbar () {
      snackbar.simple('I\'m a simple snackbar').then(result => console.log('Simple Snackbar:', result))
    },
    showActionSnackbar () {
      snackbar
        .action({
          message: 'I\'m a snackbar with an action',
          actionText: 'Dismiss',
          hideDelay: 2000
        })
        .then(result => console.log('Action Snackbar:', result))
    },
    showColorfulSnackbar () {
      snackbar
        .action({
          message: 'I\'m a colorful snackbar',
          textColor: 'blue',
          actionTextColor: 'yellow',
          backgroundColor: 'green',
          actionText: 'Dismiss',
          hideDelay: 2000
        })
        .then(result => console.log('Action Snackbar:', result))
    },
    onDrawerButtonTap () {
      utils.showDrawer()
    },
    async refresh () {
      console.log('REFRESHING!')
      // this.loading = true
      // try {
      //   const result = await this.$axios.get('/channels')
      //   this.channels = result.data
      // } catch (error) {
      //   // this.$snackbar.showError(error)
      // }
      // this.loading = false
      // const result = await this.$axios.get('/channels')
      const result = await api.index()
      this.channels = result.data
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
