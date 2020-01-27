<!--suppress HtmlUnknownTag -->
<template
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://schemas.android.com/apk/res/android "
>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton
        text="hamburguer_icon"
        ios:visibility="collapsed"
        icon="res://menu"
        @tap="onDrawerButtonTap"
      />
      <ActionItem
        icon="res://menu"
        text="hamburguer_icon"
        android:visibility="collapsed"
        ios.position="left"
        @tap="onDrawerButtonTap"
      />
      <Label class="action-bar-title" automation-text="action_bar_label" text="Els meus canals" />
    </ActionBar>

    <GridLayout class="page__content">
      TODO MESSAGES
    </GridLayout>
  </Page>
</template>

<script>
import SelectedPageService from '../shared/selected-page-service'
import UserChannels from '../components/UserChannels'
import channelsData from '../data/channels.json'
import NewChannel from './NewChannel'
import * as utils from '~/shared/utils'

export default {
  components: {
    'user-channels': UserChannels
  },
  data () {
    return {
      channels: channelsData
    }
  },
  computed: {
    message () {
      return 'No esteu subscrit a cap canal'
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('Home')
  },
  methods: {
    onDrawerButtonTap () {
      utils.showDrawer()
    },
    newChannel () {
      this.$navigateTo(NewChannel)
    },
    newSampleChannel () {
      this.channels.push({
        id: 1,
        name: 'Canal exemple',
        created_at: 'Fa 1 segon'
      })
    },
    newSampleChannels () {
      this.channels = channelsData
    },
    removeAll () {
      // TODO CONFIRM
      this.channels = []
    }
  }
}
</script>

<style scoped lang="scss">
  // Start custom common variables
  @import '~@nativescript/theme/scss/variables/blue';
  // End custom common variables

  // Custom styles
  .fab-button {
    height: 70;
    width: 70; /// this is required on iOS - Android does not require width so you might need to adjust styles
    margin: 15;
    background-color: #ff4081;
    horizontal-align: right;
    vertical-align: bottom;
  }
</style>
