<template
  xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://schemas.android.com/apk/res/android "
>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton text="Go Back" android-system-icon="ic_menu_back" @tap="$navigateBack" />
      <ActionItem
        icon="res://menu"
        text="hamburguer_icon"
        android:visibility="collapsed"
        ios.position="left"
        @tap="$navigateBack"
      />
      <Label class="action-bar-title" automation-text="action_bar_label" text="Detall canal" />
    </ActionBar>

    <TabView :selected-index="selectedIndex" @selectedIndexChange="indexChange">
      <TabViewItem title="Tab 1">
        <Label text="Content for Tab 1" />
      </TabViewItem>
      <TabViewItem title="Tab 2">
        <Label text="Content for Tab 2" />
      </TabViewItem>
      <TabViewItem title="Tab 3">
        <Label text="Content for Tab 3" />
      </TabViewItem>
      <TabViewItem title="Tab 4">
        <Label text="Content for Tab 4" />
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import SelectedPageService from '../shared/selected-page-service'

export default {
  name: 'Channel',
  data () {
    return {
      selectedIndex: 0
    }
  },
  mounted () {
    SelectedPageService.getInstance().updateSelectedPage('Channel')
  },
  methods: {
    indexChange (args) {
      const newIndex = args.value
      console.log('Current tab index: ' + newIndex)
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
