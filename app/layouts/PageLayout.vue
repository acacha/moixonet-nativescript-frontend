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
      <Label class="action-bar-title" automation-text="action_bar_label" :text="title" />
    </ActionBar>

    <slot>YOUR PAGE CONTENT HERE!</slot>
  </Page>
</template>

<script>
import SelectedPageService from '../shared/selected-page-service'
import * as utils from '~/shared/utils'

export default {
  name: 'PageLayout',
  props: {
    title: {
      type: String,
      default: 'PAGE TITLE HERE!'
    },
    name: {
      type: String,
      required: true
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage(this.name)
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
