<!--suppress SpellCheckingInspection -->
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
        <Label> Loading: {{ loading ? 'True': 'False' }}</Label>
        <ListView for="channel in channels" @itemTap="onItemTap">
          <v-template>
            <Label :text="channel.name" />
          </v-template>
        </ListView>
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
import * as utils from '~/shared/utils'

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
    onItemTap () {
      console.log('ITEM TAP!')
    },
    async refresh () {
      // this.loading = true
      // try {
      //   const result = await this.$axios.get('/channels')
      //   this.channels = result.data
      // } catch (error) {
      //   // this.$snackbar.showError(error)
      // }
      // this.loading = false
      const result = await this.$axios.get('/channels')
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
