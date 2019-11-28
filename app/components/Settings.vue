<!--suppress ALL -->
<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <!--
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
      <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap" />
      <!--
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        ios.position="left"
        @tap="onDrawerButtonTap"
      />
      <Label class="action-bar-title" text="Settings" />
    </ActionBar>

    <GridLayout class="page__content">
      <Label class="page__content-icon fas" text.decode="&#xf013;" />
      <Label class="page__content-placeholder" :text="message" />
    </GridLayout>
  </Page>
</template>

<script>
import SelectedPageService from '../shared/selected-page-service'
import * as utils from '~/shared/utils'

export default {
  computed: {
    message () {
      return '<!-- Page content goes here -->'
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('Settings')
  },
  methods: {
    onDrawerButtonTap () {
      utils.showDrawer()
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
