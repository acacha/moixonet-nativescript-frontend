<!--suppress HtmlUnknownTag -->
<template
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://schemas.android.com/apk/res/android "
>
  <Page class="page">
    <ActionBar class="action-bar">
      <!--
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar

            automationText not working: https://github.com/NativeScript/NativeScript/issues/3746
            -->
      <NavigationButton
        text="hamburguer_icon"
        ios:visibility="collapsed"
        icon="res://menu"
        @tap="onDrawerButtonTap"
      />
      <!--
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
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
      <template v-if="channels.length > 0">
        <user-channels :channels="channels"/>
        <Button class="page__content-cta c-bg-ruby" automation-text="new_channel_button" text="Eliminar tots els canals " @tap="removeAll" />
      </template>
      <template v-else>
        <Label class="page__content-icon fas" text.decode="&#xf2bb;" />
        <Label class="page__content-placeholder" :text="message" />
        <Button class="page__content-cta -primary" automation-text="new_channel_button" text="Nou canal" @tap="newChannel" />
        <Button text="Nou canal sample" @tap="newSampleChannel" />
      </template>

      <!--      <Button class="page__content-cta -primary" automation-text="new_channel_button" @tap="newChannel">-->
      <!--        <FormattedString>-->
      <!--          <Label text.decode="&#xf2bb;" class="fas nt-icon"/>-->
      <!--          <Span text="Afegir canal" />-->
      <!--        </FormattedString>-->
      <!--      </Button>-->

      <!--      <Button class="-primary">-->
      <!--        <FormattedString>-->
      <!--          <Span text="fa-twitter | fonticon" class="fa nt-icon"/>-->
      <!--          <Span text="PROVA"/>-->
      <!--        </FormattedString>-->
      <!--      </Button>-->
      <!--      <Label class="page__content-icon fas" text.decode="&#xf2bb;"></Label>-->
      <Fab
        row="1"
        icon="res://baseline_add_white_24"
        ripple-color="#f1f1f1"
        class="fab-button"
        @tap="newChannel"
      />
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
      console.log('newSampleChannel!!!!!!!!!!!')
      this.channels.push({
        id: 1,
        name: 'Canal exemple',
        created_at: 'Fa 1 segon'
      })
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
