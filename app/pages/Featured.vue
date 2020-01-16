<template
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://schemas.android.com/apk/res/android "
>
  <Page class="page" @navigatingFrom="onNavigatingFrom" @navigatingTo="onNavigatingTo" @navigatedTo="onNavigatedTo" @loaded="greet">
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
      <Label class="action-bar-title" text="Featured" />
    </ActionBar>

    <GridLayout id="myGrid" class="page__content">
      <Label class="page__content-icon fas" text.decode="&#xf005;" />
      <Label class="page__content-placeholder" :text="message" />
      <Button class="page__content-cta -primary" automation-text="new_channel_button" @tap="prova">Prova</Button>
    </GridLayout>
  </Page>
</template>

<script>
import SelectedPageService from '../shared/selected-page-service'
import * as utils from '~/shared/utils'

export default {
  computed: {
    message () {
      return 'HEY YOU! FEATURED!!'
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('Featured')
  },
  created () {
    console.log('THIS:')
    console.log(this)
  },
  methods: {
    onNavigationFrom (args) {

    },
    prova (args) {
      console.log('args:')
      console.log(args)
      const stack = args.object
      console.log('stack:')
      console.log(stack)
      const page = stack.page
      console.log('Page:')
      console.log(page)
    },
    onDrawerButtonTap () {
      utils.showDrawer()
    },
    onLoaded (args) {
      this.page = args.object
      this.greet()
    },
    greet () {
      alert('Hello!').then(() => {
        console.log('Dialog closed')
      })
    },
    onNavigatedTo (args) {
      console.log('#### onNavigatedTo')
      console.log('args:')
      console.log(args)
      const page = args.object
      const myGrid = page.getViewById('myGrid') // e.g. StackLayout<myStack>@file:///app/page.xml:2:5;
      console.log('myGrid:')
      console.log(myGrid)
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
